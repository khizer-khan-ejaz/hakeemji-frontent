"use client";
import Link from "next/link";

const Admin = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-4 bg-gray-100">
      <Link href="/admin/createblogs">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Create Blog
        </button>
      </Link>
      <Link href="/admin/appointments">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
          Show Appointments
        </button>
      </Link>
    </div>
  );
};

export default Admin;
