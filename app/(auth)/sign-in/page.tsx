/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { signInSchema } from "@/types/auth";

export default function SignInPage() {
  const onSubmit = async (data: any) => {
    console.log("Login data:", data);
  };

  return (
    <AuthForm mode="signin" schema={signInSchema} onSubmitHandler={onSubmit} />
  );
}
