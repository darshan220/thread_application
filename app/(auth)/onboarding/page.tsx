import AccountProfile from "@/components/forms/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  const userData = {
    id: user?.id,
    objectId: user?.id,
    username: user?.username,
    name: user?.name,
    bio: user?.bio,
    image: user?.image,
  };
  return (
    <main className="mx-auto flex flex-col justify-start px-10 py-20 max-w-3xl">
      <h1 className="head-text">Onboarding</h1>
      <p className="text-light-2 mt-3 text-base-regular">
        Complete your profile now to use Threads
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle='continue'/>
      </section>
    </main>
  );
};

export default page;
