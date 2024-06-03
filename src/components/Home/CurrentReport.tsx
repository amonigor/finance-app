import { ArrowUpIcon } from "@heroicons/react/16/solid";
import Container from "../common/Container";

export default function CurrentReport() {
  return (
    <Container name="Relatório atual">
      <p>
        em <span className="font-bold">maio</span> você gastou...
      </p>
      <p className="font-bold text-4xl py-4">R$ 4.985,37</p>
      <div className="flex items-center gap-1 pb-2">
        <ArrowUpIcon className="size-4 text-danger" />
        <p className="text-danger text-sm">R$ 1.595,32</p>
      </div>
      <p className="text-xs text-muted">
        seu maior gasto foi <span className="font-bold">Cartão Itaú</span>
      </p>
    </Container>
  );
}
