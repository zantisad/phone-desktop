import  { Link, Outlet } from "react-router"

export const Home = () => {
  return (
    <>
        <Link to="/calculadora">Calculadora</Link>
        <Link to="/ajedrez">Ajedrez</Link>
        <Link to="/clima">Clima</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/bloc">Bloc</Link>
        <Link to="/reloj">Reloj</Link>
        <Link to="/spotify">Spotify</Link>
        <Link to="/whatsapp">WhatsApp</Link>
    </>
  )
}