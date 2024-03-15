interface User {
  _id: string;
  name: string;
  isAdmin: boolean;
  email: string;
  phone: string;
  createdAt: String;
  updatedAt: String;
}

interface StringIndexSignature {
  [key: string]: any;
}
interface LayoutProps {
  children: ReactNode;
}