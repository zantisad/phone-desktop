import { Navigation } from "../components/Navigation/Navigation"
import { TopBar } from "../components/TopBar/TopBar"

export const Home = () => {
  return (
    <>  
      <TopBar />
      <main className="w-full h-full p-10">
        <Navigation />
      </main>
    </>
  )
}