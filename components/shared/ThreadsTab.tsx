import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";
import ThreadCard from "../cards/ThreadCard";
interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}
const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result = await fetchUserPosts(accountId);
  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((item: any) => (
        <ThreadCard
          key={item._id}
          id={item._id}
          currentUserId={currentUserId}
          parentId={item.parentId}
          content={item.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: item.author.name,
                  image: item.author.image,
                  id: item.author.id,
                }
          }
          community={item.community}
          createAt={item.createAt}
          comments={item.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;
