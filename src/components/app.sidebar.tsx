'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={`w-60 min-h-screen bg-sky-600`}>
      <h1 className="text-white font-bold text-center text-xl p-4">
        Dashboard
      </h1>
      <div className="flex flex-col p-2">
        {[
          {
            label: "User",
            path: "/user",
          },
          {
            label: "Product",
            path: "/product",
          },
        ].map((url, index) => (
          <Link
            key={index}
            className={`mt-2.5 p-2 rounded font-bold hover:bg-white hover:text-sky-600 transition ${
              pathname === url.path ? "bg-white text-sky-600" : "text-white"
            }`}
            href={url.path}
          >
            {url.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
