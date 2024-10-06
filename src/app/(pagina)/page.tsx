"use client";
import { ProdutoItem } from "@/components/produto/ProdutoItem";

import useProdutos from "@/data/hooks/useProdutos";

export default function Home() {
  const { produtos } = useProdutos();

  return (
  

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 flex-wrap  container ">
        {produtos.map((produto) => {
          return <ProdutoItem produto={produto} key={produto.id} />;
        })}
      </div>
   
  );
}
