import Sidebar from "@/components/app.sidebar";
import { LayoutProps } from "@/models";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};
