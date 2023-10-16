import { BrowserRouter, useRoutes } from "react-router-dom"
import Projects from "./components/projectss/Index";
import Typewriter from "./components/AboutMe"
import Navbar from "./components/navbar";
import Technologies from './components/technologies/index'
import YoInfo from "./components/infoMe";
import Footer from "./components/footer";
import { ProviderContext} from "./helpers/Context";
import Hamburguer from './components/hamburguer/index'
// function Routes () {
//   let rutas = useRoutes([
//     {path:"/projects", element:<Projects/>}
//   ])
//   return rutas
// }


function App() {
  return (
    <ProviderContext>
      <BrowserRouter>
      {/* <Routes /> */}
      <Navbar />
      <Hamburguer />
      <main>
      <Typewriter />
      <Projects />
      <Technologies />
      <YoInfo />
      </main>
      <Footer />
    </BrowserRouter>
    </ProviderContext>
  )
}

export default App
