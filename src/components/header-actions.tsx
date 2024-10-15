import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Loader2 } from "lucide-react";
export function HeaderActions() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <div className="flex justify-center items-center ">
        <Authenticated>
          <div className="flex ">
            <UserButton />
          </div>
        </Authenticated>
        <AuthLoading>
          <div>
            <Loader2 className="animate-spin" />
          </div>
        </AuthLoading>
      </div>
    </>
  );
}
