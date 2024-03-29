"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const login = async (
    values: z.infer<typeof RegisterSchema>,
    callbackUrl?: string | null,
  ) => {
    const validatedFields = RegisterSchema.safeParse(values);

   if (!validatedFields.success) {
    return { error: "Invalid fields!" };
   }
   
 return {success:"Message is sent successfully"}
  };