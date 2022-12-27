import {useRef, useState} from "react";
import homeImage from "../../assets/images/movies_home.svg";
import {GiPopcorn} from "react-icons/gi";
import {ImSearch} from "react-icons/im";
import "./home.scss";
import {UseContext} from "../../contexts/Provider";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

function Home() {
    const searchRef = useRef();
    const moviesRef = useRef();
    const seriesRef = useRef();
    const linkRef = useRef();
    //@ts-ignore
    const [err, setErr] = useState(false);
    //@ts-ignore
    const {setQuery, setSearchType} = UseContext();

    function handleSearch(e: any) {
        e.preventDefault();
        //@ts-ignore
        if (searchRef.current!.value !== "") {
            setErr(false);
            //@ts-ignore
            setQuery(searchRef.current!.value);
            //@ts-ignore
            moviesRef.current.checked ? setSearchType("movie") : setSearchType("tv");
            //@ts-ignore
            linkRef.current.click();
        } else {
            setErr(true);
        }
    }

    return (
        <div className="home section flex flex-wrap align-center relative">
            <div className="image">
                <img src={homeImage} alt=""/>
            </div>
            <div className="content flex-1">
                <form
                    onSubmit={handleSearch}
                    className="flex flex-column g-2 align-center"
                >
                    <div className="flex cl-movie-main fs-large fs-x-large popcorn">
                        <GiPopcorn/>
                    </div>
                    <h2 className="home-title">Chose Category And Search</h2>
                    <div className="cats flex flex-column g-2 ">
                        <div className="flex g-2 justify-between ">
                            <label htmlFor="movies">Movies</label>
                            <input
                                type="radio"
                                name="cats"
                                id="movies"
                                defaultChecked
                                //@ts-ignore
                                ref={moviesRef}
                                className="custom-radio relative"
                            />
                        </div>
                        <div className="flex g-2 justify-between">
                            <label htmlFor="series">Series</label>
                            <input
                                type="radio"
                                name="cats"
                                id="series"
                                //@ts-ignore
                                ref={seriesRef}
                                className="custom-radio relative"
                            />
                        </div>
                    </div>
                    {err ? <p className="cl-r">Right Keywords</p> : null}
                    <input
                        type="text "
                        className="w-100 search"
                        //@ts-ignore
                        ref={searchRef}
                    />
                    <motion.button
                        whileHover={{
                            scale: .9
                        }
                        }
                        type="submit"
                        className="button cl-w movies-main-bg w-fit radius m-auto flex g-1 align-center"
                    >
                        Search
                        <div className="icon flex">
                            <ImSearch/>
                        </div>
                        <Link
                            //@ts-ignore
                            ref={linkRef}
                            to={"/searchResults"}
                            className="d-none"
                        />
                    </motion.button>
                </form>
            </div>
        </div>
    );
}

export default Home;
//poster_path
