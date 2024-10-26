import { auth } from "@/auth";
import { FC } from "react";
import VideoGrid from "@/app/components/VideoGrid";
import CategoryFilter from "@/app/components/CategoryFilter";
import UserComments from "@/app/components/UserComments";

interface Props {}

const Home: FC<Props> = async () => {
  const session = await auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-6 bg-gray-50 dark:bg-gray-900">
      <div className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Lookym
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Discover the latest shop displays, trends, and more!
        </p>
      </div>

      <CategoryFilter />
      <VideoGrid session={session} />
      <UserComments />
    </div>
  );
};

export default Home;
