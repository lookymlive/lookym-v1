import { auth } from "@/auth"; // Importa el método auth que verificará la sesión
import { redirect } from "next/navigation"; // Redirige si ya hay una sesión activa
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GuestLayout: FC<Props> = async ({ children }) => {
  try {
    // Verifica si hay un usuario autenticado
    const session = await auth();

    // Si el usuario está autenticado, redirigir a la página principal (o a un dashboard)
    if (session) {
      return redirect("/"); 
    }
  } catch (error) {
    // Manejamos posibles errores de autenticación (en caso de fallo del auth)
    console.error("Error in authentication:", error);
  }

  // Si no está autenticado, muestra los elementos "children" que serían las páginas para invitados como SignIn o SignUp
  return <>{children}</>;
};

export default GuestLayout;

