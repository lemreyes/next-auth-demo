import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import { options } from "./options";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
