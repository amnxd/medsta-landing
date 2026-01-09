import { Orders } from "@/components/dashboard/orders";

export default function OrdersPage() {
  return <Orders />;
import { redirect } from "next/navigation";

export default function OrdersPage() {
  redirect("/");
}
