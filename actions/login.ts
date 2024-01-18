"use server";

import { db } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";


export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);  // Again validate types in server to prevent from bypass the type checking
    if(!validatedFields?.success){
        return  {error: "Invalid fields!"};
    }

    const {email, password} = validatedFields.data;
    
    const user = await getUserByEmail(email);

    if(!user){
        return {error:"User not found!"};
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if(!comparePassword){
        return {error:"Invalid Credential!"};
    }
    
    return {success:"Login Successful!"};
}
