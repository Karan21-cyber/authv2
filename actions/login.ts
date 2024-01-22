"use server";

import { db } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values); // Again validate types in server to prevent from bypass the type checking
  if (!validatedFields?.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credential!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
