import { BrowserRouter, useRoutes } from "react-router-dom"
import Projects from "./components/Projects/Index"
import Typewriter from "./components/AboutMe"
import Navbar from "./components/navbar";
import Technologies from './components/technologies/index'
import YoInfo from "./components/infoMe";
import Footer from "./components/footer";
// function Routes () {
//   let rutas = useRoutes([
//     {path:"/projects", element:<Projects/>}
//   ])
//   return rutas
// }


function App() {
  return (
    <BrowserRouter>
      {/* <Routes /> */}
      <Navbar />
      <main>
      <Typewriter />
      <Projects />
      <Technologies />
      <YoInfo />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
