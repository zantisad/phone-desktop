import { BrowserRouter, Route, Routes } from "react-router"
import { Home, Ajedrez, Calculadora, Clima, Galeria, Bloc, Reloj, Spotify, WhatsApp } from "../pages"

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