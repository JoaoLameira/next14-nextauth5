import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { UserRoles } from "~/types/user";

export type ExtendedUser = DefaultSession["user"] & {
  role: keyof typeof UserRoles;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: keyof typeof UserRoles;
  }
}
