import { Link } from "react-router"

export const Navigation = () => {

    const links = [
        {
            id: 1,
            link: "/calculadora",
            name: "Calculadora",
            img: "calculadora.png"
        },
        {
            id: 2,
            link: "/ajedrez",
            name: "Ajedrez",
            img: "ajedrez.png"
        },
        {
            id: 3,
            link: "/clima",
            name: "Clima",
            img: "clima.png"
        },
        {
            id: 4,
            link: "/galeria",
            name: "Galeria",
            img: "galeria-fotos.png"
        },
        {
            id: 5,
            link: "/bloc",
            name: "Bloc",
            img: "bloc-notas.png"
        },
        {
            id: 6,
            link: "/reloj",
            name: "Reloj",
            img: "reloj.png"
        },
        {
            id: 7,
            link: "/spotify",
            name: "Spotify",
            img: "spotify.png"
        },
        {
            id: 8,
            link: "/whatsapp",
            name: "WhatsApp",
            img: "whatsapp.png"
        }
    ]

    return (
        <ul className="w-full flex flex-wrap justify-between gap-10">
            {
                links.map(link => (
                    <li key={link.id} >
                        <Link to={link.link} className="w-24 h-24 flex flex-col items-center justify-center gap-2">
                            <div className="bg-white p-2.5 rounded-xl border-solid border-2 border-gray-200">
                                <div className={`h-[45px] w-[45px] bg-[url('./img/${link.img}')] bg-cover bg-center bg-no-repeat rounded-xl`}></div>
                            </div>
                            {/* <img 
                                className="h-[80px] w-[80px]"
                                src={`./img/${link.img}`} 
                                alt={link.name} 
                            /> */}
                            <h4 className="text-white font-medium text-[15px]">{link.name}</h4>
                        </Link>
                    </li>
                ))
            }
        </ul>
  )
}