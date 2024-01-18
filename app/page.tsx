import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <main className="main-page-wrapper min-h-[100dvh] h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className=" space-y-6">
        <h1
          className={cn(
            "text-5xl font-semibold text-white drop-shadow-md",
            poppins.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple authentcation service</p>
        <div className="login-form-wrapper flex justify-center item-center">
          <LoginButton asChild>
            <Button variant={"secondary"} size={"lg"}>
              Log in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}