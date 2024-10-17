import { FC } from "react";
import VerificationTokenModel from "../models/verificationToken";
import UserModel from "../models/user";
import { notFound } from "next/navigation";
import VerificationSuccess from "../components/VerificationSuccess";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

const Verify: FC<Props> = async ({ searchParams }) => {
  const { token, userId } = searchParams;

  try {
    const verificationToken = await VerificationTokenModel.findOne({ userId });
    if (verificationToken?.compare(token)) {
      // token is verified correctly
      await UserModel.findByIdAndUpdate(userId, { verified: true });
      await VerificationTokenModel.findByIdAndDelete(verificationToken._id);
    } else {
       // token is mismatched or something wrong happened
      throw new Error();
    }
  } catch (error) {
   
    return notFound();
  }

  return <VerificationSuccess />;
};

export default Verify;
