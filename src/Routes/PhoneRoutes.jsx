import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "../pages/Home"
import { Ajedrez } from "../pages/Ajedrez"
import { Calculadora } from "../pages/Calculadora"
import { Clima } from "../pages/Clima"
import { Galeria } from "../pages/Galeria"
import { Bloc } from "../pages/Bloc"
import { Reloj } from "../pages/Reloj"
import { Spotify } from "../pages/Spotify"
import { WhatsApp } from "../pages/WhatsApp"

export const PhoneRoutes = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ajedrez" element={<Ajedrez />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/bloc" element={<Bloc />} />
            <Route path="/reloj" element={<Reloj />} />
            <Route path="/spotify" element={<Spotify />} />
            {/* <Route element={PrivateAuth}> */}
            <Route path="/whatsapp" element={<WhatsApp />} />
            {/* </Route> */}
        </Routes>
    </BrowserRouter>
  )
}