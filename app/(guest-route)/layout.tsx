import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GuestLayout: FC<Props> = async ({ children }) => {
  try {
    // Verificar si el usuario está autenticado
    const session = await auth();

    // Si el usuario está autenticado, redirigir a la página principal
    if (session) return redirect("/");
  } catch (error) {
    // En caso de error en la autenticación, podrías manejar el error aquí
    console.error("Error in authentication:", error);
  }

  // Si no está autenticado, renderizar los children (contenido para invitados)
  return <>{children}</>;
};

export default GuestLayout;

