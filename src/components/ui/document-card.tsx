import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Doc } from "../../../convex/_generated/dataModel";
import { Button } from "./button";
import { Eye } from "lucide-react";
import Link from "next/link";

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
          <Button
            asChild
            variant={"secondary"}
            className="flex items-center gap-2"
          >
            <Link href={`documents/${document._id}`}>
              <Eye className="w-4 h-4" />
              view
            </Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
