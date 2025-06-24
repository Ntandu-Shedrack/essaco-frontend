/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { signUpSchema } from "@/types/auth";

export default function SignUpPage() {
  const onSubmit = async (data: any) => {
    console.log("Registration data:", data);
  };

  return (
    <AuthForm mode="signup" schema={signUpSchema} onSubmitHandler={onSubmit} />
  );
}
