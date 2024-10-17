"use client";

import AuthSubmitButton from "@/app/components/AuthSubmitButton";
import { Input } from "@nextui-org/react";
import { FC } from "react";
import { useSession } from "next-auth/react";
import { updateProfileInfo } from "@/app/actions/auth";

interface Props {}

const EditProfile: FC<Props> = () => {
  const { data, status, update } = useSession();

  if (status === "loading") return <div>Loading....</div>;

  return (
    <div className="space-y-6 max-w-96 mx-auto pt-20 sm:p-0 p-4">
      <form action={updateProfileInfo} className="space-y-4">
        <Input name="name" placeholder="New Name" label="Name" />
        <Input type="file" name="avatar" accept="image/*" />
        <AuthSubmitButton label="Update Profile" />
      </form>
    </div>
  );
};

export default EditProfile;
