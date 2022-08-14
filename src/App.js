import Navbar from "./components/nabar/Navbar.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Product from "./components/pages/Products.js";
import SignUp from "./components/pages/SignUp.js";
const App = () => {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/services' exact element={<Services/>}/>
                    <Route path='/products' exact element={<Product/>}/>
                    <Route path='/sign-up' exact element={<SignUp/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App;