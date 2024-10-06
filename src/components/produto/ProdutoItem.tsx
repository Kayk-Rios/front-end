"use client"
import { Produto } from "@/core";
import Image from "next/image";
import Link from "next/link";

export interface ProdutoProps {
  produto: Produto;
}
export function ProdutoItem(props: ProdutoProps) {
  const { produto } = props;
  return (
    <>
      <Link
        href={`/produto/${produto.id}`}
        className="
        flex flex-col 
        bg-blue-dark 
        border cls
        border-white/10
        rounded-xl 
        relative 
        max-w-[350px]"
      >
        <div className="h-48 w-full  relative">
          <Image
            src={produto.imagem}
            fill
            alt="imagm do produto"
            className="object-contain"
          />
        </div>
        <div className="flex-1  flex flex-col gap-3 p-5">
          <span className="text-lg font-semibold">
            {props.produto.nome}
          </span>
          <span className="text-sm border-b border-dashed self-start ">
            {produto.especificacoes.destaque}
          </span>
          <div className="flex-1"></div>
          <div>
            <span className="text-sm text-gray-400 line-through">de {props.produto.precoBase} </span> <br />
            <span className="text-emerald-400 text-xl"> por R$ {props.produto.precoPromocional}</span>
          </div>
          <button className="flex bg-violet-600 h-8
           rounded-full items-center 
           justify-center hover:border-2
            border-emerald-500"
            onClick={(e:any)=>{
                e.preventDefault();
            }}
            >
          
            <span>Adicionar </span>
          </button>
        </div>
      </Link>
    </>
  );
}
