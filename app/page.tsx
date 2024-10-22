import { auth } from "@/auth";
import { FC } from "react";

interface Props {}

const Home: FC<Props> = async () => {
  console.log(await auth());

  return <div className="flex min-h-screen flex-col items-center justify-center p-24" >
     
    <h1 className="text-3xl font-bold underline ">
      Welcome to Lookym App
    </h1>
    <p className="text-xl">
      This is a s. It demonstrates how to implement a basic authentication flow with email verification and password reset.
    </p> 
    
    
  </div>; 
};

export default Home;
