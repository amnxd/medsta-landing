import { MyProfile } from "@/components/dashboard/my-profile";

export default function ProfilePage() {
  return <MyProfile />;
import { redirect } from "next/navigation";

export default function ProfilePage() {
  redirect("/");
}
