import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AdminPageClient from "./AdminPageClient";
import { connectDB, ContactForm } from "@/lib/database";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>You are not authorized</p>;

  await connectDB();
  const submissions = await ContactForm.find().sort({ createdAt: -1 });

  const data = submissions.map((entry) => ({
    _id: (entry._id as { toString: () => string }).toString(),
    name: entry.name,
    email: entry.email,
    message: entry.message,
    createdAt: entry.createdAt?.toISOString() ?? "",
  }));

  return <AdminPageClient submissions={data} />;
}
