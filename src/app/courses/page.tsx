import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { ReactNode } from 'react';

export default async function CoursesPage(): Promise<ReactNode> {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in to view courses</h2>
          <Link
            href="/signin"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Course cards will be populated here */}
          <div className="text-center text-gray-600">
            Course content will be available soon
          </div>
        </div>
      </div>
    </div>
  );
}
