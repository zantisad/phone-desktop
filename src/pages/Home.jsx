import  { Link, Outlet } from "react-router"
import { Navigation } from "../components/Navigation/Navigation"
import { TopBar } from "../components/TopBar/TopBar"

export const Home = () => {
  return (
    <>  
        <TopBar />
        <Navigation />
    </>
  )
}