"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import LogoutButton from "@/components/LogoutButton";
import { MdDelete } from "react-icons/md";

type Submission = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminPageClient({
  submissions: initialSubmissions,
}: {
  submissions: Submission[];
}) {
  const [submissions, setSubmissions] = useState(initialSubmissions);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
    if (res.ok) {
      setSubmissions((prev) => prev.filter((entry) => entry._id !== id));
    } else {
      alert("Failed to delete submission");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Contact Submissions
          </h1>
          <LogoutButton />
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-blue-100">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="text-xs font-semibold uppercase bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-4 rounded-tl-2xl">Date</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4 rounded-tr-2xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((entry, index) => (
                    <tr
                      key={entry._id}
                      className={`border-b border-blue-100 transition-all duration-200 ${
                        index % 2 === 0 ? "bg-blue-50/50" : "bg-white"
                      } hover:bg-blue-100 hover:shadow-md hover:-translate-y-0.5`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {new Date(entry.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 font-medium text-blue-900">
                        {entry.name}
                      </td>
                      <td className="px-6 py-4 text-blue-700">{entry.email}</td>
                      <td className="px-6 py-4 max-w-xs break-words text-gray-600 line-clamp-3">
                        {entry.message}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-2xl hover:bg-red-700 transition"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {submissions.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center text-gray-500 py-6"
                      >
                        No submissions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
