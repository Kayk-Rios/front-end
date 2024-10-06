import Link from "next/link";

export default function Logo(){
    return(
        <>
            <Link href="/" className="flex items-center gap-3">
            <h1>Logo</h1>
            {/* Logo da pasta public nao existente e puxar acima */}
            <h2>Logo2</h2>
            </Link>
        </>
    )
}