"use client";
import useSWR from "swr";

const UserTable = () => {
  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("An error occurred while fetching the data.");
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-[red]">{error.message}</h1>;

  return (
    <>
      <div className="flex flex-1 justify-center py-4 px-2">
        <table className="table-auto border-collapse w-4/5">
          <thead>
            <tr className="bg-slate-300">
              <th className="p-4 border border-slate-300">#</th>
              <th className="p-4 border border-slate-300">Name</th>
              <th className="p-4 border border-slate-300">User name</th>
              <th className="p-4 border border-slate-300">Email</th>
              <th className="p-4 border border-slate-300">Phone</th>
              <th className="p-4 border border-slate-300">Website</th>
              <th className="p-4 border border-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((user: User, index: number) => {
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
                    <td className="p-4 border border-slate-300">
                      {user.website}
                    </td>
                    <td className="p-4 border border-slate-300 whitespace-nowrap">
                      <button className="bg-[green] text-white py-1 px-2 mr-1" type="button">Edit</button>
                      <button className="bg-[red] text-white py-1 px-2" type="button">Delete</button>
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
