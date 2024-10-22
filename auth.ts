import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { signInSchema } from "@/app/utils/verificationSchema";
import UserModel, { createNewUser } from "./app/models/user";
import startDb from "@/app/lib/db";
import { isValidObjectId } from "mongoose";

// Definición de la interfaz del perfil de usuario en la sesión
export interface SessionUserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  verified: boolean;
}

// Extensión de la sesión para incluir los datos del perfil de usuario
declare module "next-auth" {
  interface Session {
    user: SessionUserProfile;
  }
}

// Creación de una clase de error personalizada para el manejo de errores de inicio de sesión
class CustomError extends CredentialsSignin {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
  code = "custom_error";
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  providers: [
    // Configuración del proveedor de autenticación con credenciales
    Credentials({
      async authorize(credentials, request) {
        // Validamos los datos de entrada con Zod Schema
        const result = signInSchema.safeParse(credentials);
        if (!result.success)
          throw new CustomError("Please provide a valid email & password!");

        const { email, password } = result.data;
        // Iniciamos la conexión a la base de datos
        await startDb();
        const user = await UserModel.findOne({ email });
        
        // Verificación de contraseña
        if (!user?.compare(password))
          throw new CustomError("Email/Password mismatched!");

        // Retornamos el perfil del usuario para la sesión
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          verified: user.verified,
          avatar: user.avatar?.url || "default value",
        };
      },
    }),
    // Configuración del proveedor de Google
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Callback para el manejo del inicio de sesión con Google
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        if (!profile?.email || !profile.name) return false;

        // Conexión a la base de datos
        await startDb();
        const oldUser = await UserModel.findOne({ email: profile.email });
        
        // Creación de nuevo usuario si no existe
        if (!oldUser) {
          await createNewUser({
            name: profile.name,
            email: profile.email,
            provider: "google",
            verified: profile.email_verified || false,
            avatar: { url: profile.picture },
          });
        }
      }

      return true;
    },
    // Callback para generar el token JWT
    async jwt({ token, user, trigger, session }) {
      if (user) {
        if (!isValidObjectId(user.id)) {
          // Si el ID del usuario no es válido, lo buscamos por email
          const dbUser = await UserModel.findOne({ email: user.email });
          if (dbUser) {
            token = {
              ...token,
              id: dbUser.id,
              email: dbUser.email,
              name: dbUser.name,
              verified: dbUser.verified,
              avatar: dbUser.avatar?.url,
            };
          }
        } else {
          token = { ...token, ...user };
        }
      }

      // Si se solicita una actualización del token, lo hacemos
      if (trigger === "update") {
        token = { ...token, ...session };
      }

      return token;
    },
    // Callback para generar la sesión de usuario
    session({ token, session }) {
      let user = token as typeof token & SessionUserProfile;

      if (token.user) {
        user = token.user as any;
      }

      if (user) {
        session.user = {
          ...session.user,
          id: user.id,
          email: user.email,
          name: user.name,
          verified: user.verified,
          avatar: user.avatar,
        };
      }

      return session;
    },
  },
});


