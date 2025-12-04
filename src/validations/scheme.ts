import { z } from "zod";

export const authScheme = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, { message: "Password is required" }),
    fName:z.string().min(1, {message:"First name is required"}),
    lName:z.string().min(1, {message:"Last name is required"})
});

export const loginSchema = authScheme.pick({
  email: true,
  password: true,
});