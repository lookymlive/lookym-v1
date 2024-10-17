"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useRef } from "react";

interface Props {}

const VerificationSuccess: FC<Props> = () => {
  const router = useRouter();
  const { update, status } = useSession();
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || status !== "authenticated") return;

    update({ verified: true }).then(() => {
      router.replace("/");
      router.refresh();
    });
    
    loaded.current = true;
  }, [status, router, update]);

  return (
    <div className="text-center px-4 pt-20 text-xl">
      Congrats! Your email is verified.
    </div>
  );
};

export default VerificationSuccess;
