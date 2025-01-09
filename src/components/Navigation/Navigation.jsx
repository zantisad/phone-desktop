import { Link } from "react-router"

export const Navigation = () => {

    const links = [
        {
            id: 1,
            link: "/calculadora",
            name: "Calculadora"
        },
        {
            id: 2,
            link: "/ajedrez",
            name: "Ajedrez"
        },
        {
            id: 3,
            link: "/clima",
            name: "Clima"
        },
        {
            id: 4,
            link: "/galeria",
            name: "Galeria"
        },
        {
            id: 5,
            link: "/bloc",
            name: "Bloc"
        },
        {
            id: 6,
            link: "/reloj",
            name: "Reloj"
        },
        {
            id: 7,
            link: "/spotify",
            name: "Spotify"
        },
        {
            id: 8,
            link: "/whatsapp",
            name: "WhatsApp"
        }
    ]

    return (
        <ul>
            {
                links.map(link => (
                    <li key={link.id}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))
            }
        </ul>
  )
}