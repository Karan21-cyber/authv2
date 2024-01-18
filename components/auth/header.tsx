import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="header-wrapper w-full flex flex-col gap-y-4 items-center">
      <h1 className={cn("text-3xl font-semibold drop-shadow-md")}>🔐 Auth</h1>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};
