import * as z from "zod";

export const LoginSchema = z.object({
    email : z.string().min(1,"Email is required.").email({message:"Email is Invalid."}),
    password:z.string().min(1,"Password is required.").min(6,"Password must be at least 6 characters."),
})

export const RegisterSchema = z.object({
    email : z.string().min(1,"Email is required.").email({message:"Email is Invalid."}),
    password:z.string().min(1,"Password is required.").min(6,"Password must be at least 6 characters."),
    name:z.string().min(1,"Name is required."),
})