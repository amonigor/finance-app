import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "../ui/badge";

export default function CurrentReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatório atual</CardTitle>
        <CardDescription>em maio você gastou...</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge className="gap-1 pl-2" variant="destructive">
          <ArrowUp className="h-4 w-4" /> R$ 1.595,32
        </Badge>
        <Badge className="gap-1 pl-2" variant="default">
          <ArrowDown className="h-4 w-4" /> R$ 1.595,32
        </Badge>
        <p className="font-bold text-4xl py-4">R$ 4.985,37</p>
        <p className="text-xs text-muted-foreground">
          seu maior gasto foi <span className="font-bold">Cartão Itaú</span>
        </p>
      </CardContent>
    </Card>
  );
}
