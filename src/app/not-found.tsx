import Link from "next/link"


function notFound() {
  return (
    <main id="notFound">
        <div>No se encuentra la pagina que está buscando</div>
        <Link href={"/"} className="h2">VOLVER A <span>I</span>NICIO</Link>
    </main>
  )
}

export default notFound