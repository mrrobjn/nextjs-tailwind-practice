import MESSAGES from "@/constants/message";
import connectDB from "@/db/mongoose";
import { User } from "@/models";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  await connectDB();
  const data = await User.find({}).limit(10);
  return NextResponse.json(
    { message: "OK", status: 200, data },
    { status: 200 }
  );
};

export const POST = async (req: Request, res: Response) => {
  try {
    const formData = await req.formData();

    const data = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };

    await connectDB();
    const newUser = new User(data);
    const validationError = newUser.validateSync();

    if (validationError) {
      return NextResponse.json(
        {
          message: Object.values(validationError.errors)[0].message,
          status: 400,
        },
        { status: 400 }
      );
    }

    await newUser.save();
    return NextResponse.json(
      { message: "Create user successfully", status: 200 },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === 11000) {
      const message = `The ${Object.keys(err.keyPattern)[0]} is already exist`;
      return NextResponse.json(
        {
          message,
          status: 400,
        },
        { status: 400 }
      );
    }
    console.log(err);
    return NextResponse.json(
      { message: MESSAGES.SERVER_ERROR, status: 500 },
      { status: 500 }
    );
  }
};
