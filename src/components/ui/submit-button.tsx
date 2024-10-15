import { Loader2 } from "lucide-react";
import { Button } from "./button";

export function SubmitButton({
  isLoading,
  idleStateText,
  loadingStateText,
}: {
  isLoading: boolean;
  idleStateText: string;
  loadingStateText: string;
}) {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      variant={"secondary"}
      className="w-full flex items-center gap-2"
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? loadingStateText : idleStateText}
    </Button>
  );
}
