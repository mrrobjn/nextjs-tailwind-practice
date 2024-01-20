"use client";
import UserService from "@/services/userService";
import Link from "next/link";
import useSWR from "swr";

const UserTable = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR({ limit: 10 }, UserService.getUsers);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) throw Error(error);

  return (
    <>
      <div className="flex flex-1 justify-center py-4 px-2">
        <table className="table-auto border-collapse w-4/5 h-fit">
          <thead>
            <tr className="bg-slate-300">
              <th className="p-4 border border-slate-300">#</th>
              <th className="p-4 border border-slate-300">Name</th>
              <th className="p-4 border border-slate-300">User name</th>
              <th className="p-4 border border-slate-300">Email</th>
              <th className="p-4 border border-slate-300">Phone</th>
              <th className="p-4 border border-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users.data) &&
              users.data.map((user: User, index: number) => {
                return (
                  <tr key={index}>
                    <td className="p-4 border border-slate-300">{index + 1}</td>
                    <td className="p-4 border border-slate-300">{user.name}</td>
                    <td className="p-4 border border-slate-300">
                      {user.username}
                    </td>
                    <td className="p-4 border border-slate-300">
                      {user.email}
                    </td>
                    <td className="p-4 border border-slate-300">
                      {user.phone}
                    </td>
                    <td className="p-4 border border-slate-300 whitespace-nowrap text-center">
                      <Link
                        href={`/user/${user._id}`}
                        className="bg-primary text-white py-1 px-2 mr-1"
                        type="button"
                      >
                        View
                      </Link>
                      <button
                        className="bg-[green] text-white py-1 px-2 mr-1"
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-[red] text-white py-1 px-2"
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
