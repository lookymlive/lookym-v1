'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useRef } from "react";

interface Props {
  message: string;
}

const VerificationSuccess: FC<Props> = ({ message }) => {
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
      {message && <p>{message}</p>}
      Congrats! Your email is verified.
    </div>
  );
};

export default VerificationSuccess;
