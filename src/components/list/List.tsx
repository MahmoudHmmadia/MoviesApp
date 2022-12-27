import {useState, useEffect} from "react";
import axios from "axios";
import {WiMoonFull} from "react-icons/wi";
import {Link} from "react-router-dom";
import {MovieType, SeriesType} from "../../types/types";
import Api from "../../api/apiConfig";
import {UseContext} from "../../contexts/Provider";
import {motion} from "framer-motion";
import "./list.scss";
import Pagination from "../pagination/Pagination";

interface PropsI {
    type: string;
    cat?: string | undefined;

}

function List({type, cat}: PropsI) {
    //@ts-ignore
    const {setError, query, searchType, loading, setLoading, getMovieDetails} = UseContext();
    const api = new Api();
    const [pageNumber, setPageNumber] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([]);
        if (cat) {
            axios
                .get(api.getList(cat, type, pageNumber))
                .then(async (res) => {
                    await setList(res.data.results);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
                .catch(() => {
                    setTimeout(() => {
                        setLoading(false);
                        setError(true);
                    }, 1000);
                });
        } else {
            axios
                .get(api.search(query, searchType))
                .then(async (res) => {
                    await setList(res.data.results);
                    setError(false);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
                .catch(() => {
                    setTimeout(() => {
                        setLoading(false);
                        setError(true)
                    }, 1000);
                });
        }
        if (list.length == 0) setLoading(true);
    }, [pageNumber]);
    return (
        <div className="flex-1">
            {!loading ? (
                <div className="flex flex-column g-2 align-center">
                    {
                        cat && (
                            <Pagination setLoading={setLoading} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
                        )
                    }
                    <div className="list">
                        {list &&
                            list.map((item: MovieType & SeriesType, index: number) => (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    className="item box-shadow flex radius flex-column g-1 overflow-hidden item-box-bg"
                                    key={index}
                                >
                                    <div className="image relative">
                                        <div className="absolute rate">
                                            <div className="icon flex cl-g">
                                                <WiMoonFull/>
                                            </div>
                                            <span className="fs-small cl-w absolute count">
                                                {item.vote_average}
                                            </span>
                                        </div>
                                        <img
                                            src={api.originalImage(item.poster_path)}
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="pl-1 pr-1 pb-1 flex flex-column g-1 flex-1">
                                        <h4 className="name relative mb-2 w-fit cl-movie-main">
                                            {type === "movie" ? item.title : item.name}
                                        </h4>
                                        {(item.original_title !== item.title ||
                                            item.original_name !== item.name) && (
                                            <div className="fs-small">
                                                <span className='cl-w'>Original Title : </span>
                                                <span className="cl-movie-alt">
                                                      {type === "movie"
                                                          ? item.original_title
                                                          : item.original_name}
                                                </span>
                                            </div>
                                        )}
                                        <div className="votes fs-small">
                                            <span className='cl-w'>Votes : </span>
                                            <span className="cl-movie-alt">{item.vote_count}</span>
                                        </div>
                                        <div className="date fs-small">
                                            <span className='cl-w'>Date : </span>
                                            <span className="cl-movie-alt">
                                                {type === "movie"
                                                    ? item.release_date
                                                    : item.first_air_date}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/${type === "movie"
                                                ? item.title
                                                : item.name}`}
                                            className=" details"
                                            onClick={() => getMovieDetails(item.id, type)}
                                        >
                                            <motion.div
                                                whileHover={{scale: 0.9}}
                                                className="button  fs-small radius movies-main-bg cl-w txt-c normal"
                                            >
                                                View Details
                                            </motion.div>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                    {
                        cat && (
                            <Pagination setLoading={setLoading} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
                        )
                    }
                </div>
            ) : (
                <span className="loader flex"></span>
            )}
        </div>
    );
}

export default List;
