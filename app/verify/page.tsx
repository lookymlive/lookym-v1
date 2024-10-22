import { FC } from "react";
import VerificationTokenModel from "@/app/models/verificationToken";
import UserModel from "@/app/models/user";
import { notFound } from "next/navigation";
import VerificationSuccess from "@/app/components/VerificationSuccess";
import { useState } from "react";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

const Verify: FC<Props> = async ({ searchParams }) => {
  const { token, userId } = searchParams;
  const [message, setMessage] = useState("");

  try {
    const verificationToken = await VerificationTokenModel.findOne({ userId });
    if (verificationToken?.compare(token)) {
      // token is verified correctly
      await UserModel.findByIdAndUpdate(userId, { verified: true });
      await VerificationTokenModel.findByIdAndDelete(verificationToken._id);
      setMessage(""); // ocultar el mensaje después de verificar el correo electrónico
    } else {
      // token is mismatched or something wrong happened
      setMessage("Didn't get the link? Click Here");
      throw new Error();
    }
  } catch (error) {
    setMessage("Didn't get the link? Click Here");
    return notFound();
  }

  return <VerificationSuccess message={message} />;
};

export default Verify;