import Link from "next/link";
import IconeCarrinho from "../shared/IconeCarrinho";

export default function Cabecalho() {
  return (
    <>
      <div
        className=" flex  flex-col h-20"
        style={{
          background:
            "linear-gradient(90deg, #070a4d 0%, #420093 50%, #502c7c 100%)",
        }}
      >
        <div className="flex-1 container flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h1>logo</h1>
            <Link href="">
              <IconeCarrinho qtdeItens={0} />
            </Link>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
      </div>
    </>
  );
}
