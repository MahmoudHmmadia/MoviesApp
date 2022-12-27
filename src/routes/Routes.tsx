import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Item from "../components/item/Item";
import TopRatedMovies from "../pages/TopRatedMovies";
import PopularMovies from "../pages/PopularMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
import TopRatedSeries from "../pages/TopRatedSeries";
import PopularSeries from "../pages/PopularSeries";
import UpcomingSeries from "../pages/UpcomingSeries";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies">
                <Route path="topRated" element={<TopRatedMovies/>}/>
                <Route path="popular" element={<PopularMovies/>}/>
                <Route path="upcoming" element={<UpcomingMovies/>}/>
            </Route>
            <Route path="/series">
                <Route path="topRated" element={<TopRatedSeries/>}/>
                <Route path="popular" element={<PopularSeries/>}/>
                <Route path="upcoming" element={<UpcomingSeries/>}/>
            </Route>
            <Route path="/searchResults" element={<Search/>}/>
            <Route path='/:name' element={<Item/>}/>
            <Route path='/*' element={<Home />}/>
        </Routes>
    );
}

export default MyRoutes;
