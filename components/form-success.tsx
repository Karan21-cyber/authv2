// this is for New work in 1.0.0 while installing the new version of @radix-ui/react-icons
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="error-message bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 ">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
