import AuthSubmitButton from "@/app/components/AuthSubmitButton";
import UpdatePasswordForm from "@/app/components/UpdatePasswordForm";
import startDb from "@/app/lib/db";
import PassResetTokenModel from "@/app/models/passwordResetToken";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

const UpdatePassword: FC<Props> = async ({ searchParams }) => {
  const { token, userId } = searchParams;

  try {
    // Conexión a la base de datos
    await startDb();

    // Buscar el token en la base de datos
    const resetToken = await PassResetTokenModel.findOne({ userId });

    // Verificar si el token existe y es válido
    if (!resetToken) {
      throw new Error("Token not found or expired");
    }

    // Verificar si el token es válido
    const isTokenValid = resetToken.compare(token); // compare method to validate token

    if (!isTokenValid) {
      throw new Error("Invalid token");
    }
  } catch (error) {
    console.error("Error validating reset token:", error);
    // Si hay un error o el token es inválido, mostrar página 404
    return notFound();
  }

  // Renderizar el formulario de actualización de contraseña si el token es válido
  return <UpdatePasswordForm token={token} userId={userId} />;
};

export default UpdatePassword;
