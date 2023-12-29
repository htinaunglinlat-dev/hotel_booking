import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
/* .....................
        Pages
..................... */
import Home from "./pages/Home"
import List from "./pages/List"
import Hotel from "./pages/Hotel"
import NavBarContainer from "./components/header/NavBar"

const App = () => {
  return (
    <BrowserRouter>
        {/* <NavBarContainer /> */}
        <Routes>
          <Route index element={<>
              <NavBarContainer />
              <Home />
          </>} />
          <Route path="/hotels" element={<>
            <NavBarContainer />
            <List />
          </>} />
          <Route path="/hotels/:id" element={<>
            <Hotel>
              <NavBarContainer />
            </Hotel>
          </>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App