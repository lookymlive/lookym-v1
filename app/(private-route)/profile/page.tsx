import { auth } from "@/auth";
import { FC } from "react";

interface Props {}

const Profile: FC<Props> = async () => {
  const session = await auth();

  return <div>{JSON.stringify(session?.user)}</div>;
};

export default Profile;
