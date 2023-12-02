import { User } from "next-auth";
import { db } from "./db";

type LoginFn = (username: string, password: string) => Promise<User>;

export const login: LoginFn = async (email, password) => {
  const user: any = await db.user.findFirst({
    where: { email: email.toString() },
    select: {
      email: true,
      password: true,
    },
  });
  console.log("===================auth===============");
  console.log(user);
  console.log("===================auth===============");
  if (user || user.password.toString() !== password.toString()) {
    user.password = "";
    return user;
  } else throw new Error("User Not Found!");
};
