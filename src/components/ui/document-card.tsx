import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Doc } from "../../../convex/_generated/dataModel";
import { Button } from "./button";

export function DocumentCard({ document }: { document: Doc<"documents"> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>
          <Button variant={"secondary"}>view</Button>
        </p>
      </CardFooter>
    </Card>
  );
}
