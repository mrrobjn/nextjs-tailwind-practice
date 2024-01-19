import { LayoutProps } from "@/models";

export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      {children}
    </div>
  );
};
