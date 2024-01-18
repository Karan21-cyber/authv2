"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  mode?: "modal" | "redirect";
}

import { useRouter } from "next/navigation";
import React from "react";

export const LoginButton = ({ children, asChild, mode }: LoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO:Implement modal</span>;
  }

  return (
    <span onClick={handleClick} className="login-button-wrapper cursor-pointer">
      {children}
    </span>
  );
};
