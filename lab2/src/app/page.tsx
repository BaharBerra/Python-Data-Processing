

import { LatestPost } from "@bahar/app/_components/post";
import { api, HydrateClient } from "@bahar/trpc/server";

import Link from "next/link";
import { db } from "@bahar/server/db";
import { posts } from "@bahar/server/db/schema";

export default async function HomePage() {
  const data = await db.select().from(posts);
  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2 text-left">ID</th>
            <th className="border border-gray-200 p-2 text-left">Name</th>
            <th className="border border-gray-200 p-2 text-left">Created at</th>
            <th className="border border-gray-200 p-2 text-right">
              Updated at
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 p-2">{row.id}</td>
              <td className="border border-gray-200 p-2">{row.name}</td>
              <td className="border border-gray-200 p-2">
                {row.createdAt.toString()}
              </td>
              <td className="border border-gray-200 p-2 text-right">
                {row.updatedAt?.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

