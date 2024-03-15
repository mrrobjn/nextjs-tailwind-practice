import KEY from "@/constants/key";
import MESSAGES from "@/constants/message";
import connectDB from "@/db/mongoose";
import { User } from "@/models";
import { NextResponse } from "next/server";
var JWT = require("jsonwebtoken");

class accountService {
  async register(formData: FormData) {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };

    const newUser = new User(data);

    const validationError = newUser.validateSync();

    if (validationError) {
      let error = validationError as {
        errors: { [key: string]: { message: string } };
      };
      return NextResponse.json(
        {
          message: Object.values(error.errors)[0].message,
          status: 400,
        },
        { status: 400 }
      );
    }

    await connectDB();

    const existEmail = await User.findOne({ email: data.email });
    if (existEmail) {
      return NextResponse.json(
        { message: MESSAGES.EMAIL_EXIST, status: 403 },
        { status: 403 }
      );
    }

    const existPhone = await User.findOne({ phone: data.phone });
    if (existPhone) {
      return NextResponse.json(
        { message: MESSAGES.PHONE_EXIST, status: 403 },
        { status: 403 }
      );
    }

    // await newUser.save();

    const token = this.encodeToken(newUser._id);

    return NextResponse.json(
      { message: MESSAGES.REGISTER_SUCCESS, status: 200, token },
      { status: 200 }
    );
  }

  async login(formData: FormData) {
    return NextResponse.json(
      { message: MESSAGES.LOGIN_SUCCESS, status: 200 },
      { status: 200 }
    );
  }

  private encodeToken = (email: string) => {
    return JWT.sign(
      { iss: "Dung", sub: email, iat: new Date().getTime() / 1000 },
      KEY.JWT_SECRET,
      { expiresIn: "3d" }
    );
  };
}

export default new accountService();
