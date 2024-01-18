// this is for New work in 1.0.0 while installing the new version of @radix-ui/react-icons
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="error-message bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
