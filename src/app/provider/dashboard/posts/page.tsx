import { MyPosts } from "@/components/dashboard/my-posts";

export default function PostsPage() {
  return <MyPosts />;
import { redirect } from "next/navigation";

export default function PostsPage() {
  redirect("/");
}
