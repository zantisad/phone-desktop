import "./App.css";
import { PhoneRoutes } from "./Routes/PhoneRoutes";

function App() {
  return (
    <div
  className="app border-2 h-screen aspect-[12/16] bg-cover bg-center rounded-[3rem] overflow-hidden"
  style={{ backgroundImage: "url('https://i.pinimg.com/736x/98/fc/1c/98fc1c0bdd8815fe7ad5b3990ef59cc0.jpg')" }}
>
      <PhoneRoutes />
    </div>
  );
}

export default App;
