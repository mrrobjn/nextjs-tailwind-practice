import accountService from "@/services/accountService";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();
  const action = formData.get("action");

  switch (action) {
    case "login":
      return accountService.login(formData);
    case "register":
      return accountService.register(formData);
    case "logout":
      break;
    default:
      return NextResponse.json(
        { message: "Bad request", status: 400 },
        { status: 400 }
      );
  }
};
