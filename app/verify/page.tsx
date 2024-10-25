import VerificationTokenModel from "@/app/models/verificationToken";
import UserModel from "@/app/models/user";
import { notFound } from "next/navigation";
import VerificationSuccess from "@/app/components/VerificationSuccess";
import { FC } from "react";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

const Verify: FC<Props> = async ({ searchParams }) => {
  const { token, userId } = searchParams;

  try {
    // Buscar el token de verificación en la base de datos
    const verificationToken = await VerificationTokenModel.findOne({ userId });
    
    // Verificar si el token es válido
    if (verificationToken?.compare(token)) {
      // Token verificado correctamente: actualizar el usuario como verificado
      await UserModel.findByIdAndUpdate(userId, { verified: true });
      
      // Eliminar el token de la base de datos
      await VerificationTokenModel.findByIdAndDelete(verificationToken._id);
    } else {
      // Si el token no es válido, lanzar un error
      throw new Error("Invalid token");
    }
  } catch (error) {
    // Si hay un error o el token es inválido, devolver página 404
    return notFound();
  }

  // Si todo es correcto, mostrar mensaje de verificación exitosa
  return <VerificationSuccess message="Your email has been verified successfully!" />;
};

export default Verify;
