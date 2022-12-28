import Nav from "./components/nav/Nav";
import MyRoutes from "./routes/Routes";
import {MdLocalMovies} from "react-icons/md";
import "./sass/app.scss";
import {navCategories} from "./category/category";
import {UseContext} from './contexts/Provider';
import Error from "./pages/error/Error";
import Footer from "./components/footer/Footer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();
    const {error}: any = UseContext();
    useEffect(() => {
        window.addEventListener('load', () => {
            navigate('/');
        });
    }, [])
    return (
        <div className={`app ${error ? "centering-content" : null}`}>
            {
                error ? (<Error/>) : (
                    <>
                        <Nav
                            logo={<MdLocalMovies/>}
                            appName="Movies App"
                            links={navCategories}
                        />
                        <div className="container">
                            <MyRoutes/>
                        </div>
                        <Footer/>
                    </>
                )
            }

        </div>
    );
}

export default App;
