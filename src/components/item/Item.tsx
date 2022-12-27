import {genres, MovieType, prodCop, season, SeriesType} from "../../types/types";
import Api from "../../api/apiConfig";
import {useEffect, useState} from "react";
import axios from "axios";
import {UseContext} from "../../contexts/Provider";
import './item.scss';
import {AiFillHome, AiFillStar, AiTwotoneVideoCamera, FaQuoteLeft, FaQuoteRight} from "react-icons/all";
import {nanoid} from "nanoid";
import {motion} from 'framer-motion';

function Item() {
    const api = new Api();
    const [videoKey, setVideoKey] = useState('');
    const [similarItem, setSimilarItem] = useState([]);
    //@ts-ignore
    const {item, setError, loading, setLoading, getMovieDetails} = UseContext();
    useEffect(() => {
        if (item) {
            axios.get(api.getVideo(item.id, item.type)).then(async (res) => {
                await setVideoKey(res.data.results[0].key);
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }).catch(() => {
                setTimeout(() => {
                    setLoading(false);
                    setError(true);
                }, 1000)
            });
            axios.get(api.similar(item.type, item.id))
                .then(async (res) => {
                    setSimilarItem(res.data.results.slice(0, 6));
                })
                .catch(() => {
                    setError(true);
                })

        }
    }, [item])
    return (
        <div className='section flex align-center'>
            {loading ? (<div className='loader'></div>)
                : (
                    <div className='flex flex-column g-2'>
                        <div className=' item_details flex align-center'>
                            <div className='absolute image'>
                                <img
                                    src={api.originalImage(item.backdrop_path)}
                                    alt="Image"
                                />
                            </div>
                            <div className='flex g-2 align-center item__content'>
                                <div className="poster w-fit radius overflow-hidden relative">
                                    <img
                                        src={api.originalImage(item.poster_path)}
                                        alt="Image"
                                    />
                                </div>
                                <div className="details w-100 flex-1 w-50 flex flex-column g-1 relative">
                                    <h2 className='cl-movie-main'>
                                        {
                                            item.type == 'tv' ? item.name : item.title
                                        }
                                    </h2>
                                    {
                                        item.tagline && (
                                            <h4 className='cl-movie-alt flex align-center g-1'>
                                                <div className="icon flex cl-movie-main">
                                                    <FaQuoteLeft/>
                                                </div>
                                                <span className='txt-c'>
                                                        {item.tagline}
                                                </span>
                                                <div className="icon flex cl-movie-main">
                                                    <FaQuoteRight/>
                                                </div>
                                            </h4>
                                        )
                                    }
                                    <p className='fs-small cl-w'>
                                        {item.overview}
                                    </p>
                                    {(item.original_title !== item.title ||
                                        item.original_name !== item.name) && (
                                        <div>
                                            <span className='cl-w'>Original Title : </span>
                                            <span className="cl-movie-alt">
                                                          {item.type === "movie"
                                                              ? item.original_title
                                                              : item.original_name}
                                                </span>
                                        </div>
                                    )}
                                    <div className="rate flex align-center">
                                        <span className='cl-w mr-1'>Rate :</span>
                                        <span className='cl-y'>{
                                            item.vote_average
                                        }</span>
                                        <div className='icon flex cl-y'>
                                            <AiFillStar/>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span className='cl-w'>Date : </span>
                                        <span className='cl-movie-alt'>
                                            {item.type === 'tv' ? item.first_air_date : item.release_date}
                                        </span>
                                    </div>
                                    <ul className='flex g-1 align-center genres'>
                                        <span className='cl-w'>
                                            Genres :
                                        </span>
                                        {
                                            item.genres.map((li: genres) => (
                                                <div key={nanoid()} className='flex g-1 align-center'>
                                                    <li className='cl-movie-alt'>
                                                        {li.name}
                                                    </li>
                                                    <span className='cl-w'>|</span>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                    {
                                        item.production_companies.map((el: prodCop) => (
                                            <div key={nanoid()}>
                                                {
                                                    el.logo_path && (
                                                        <img style={{width: '150px'}} src={api.originalImage(el.logo_path)}
                                                             alt=""/>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                    <div className='flex g-1'>
                                        <motion.a
                                            whileHover={{
                                                scale: .9
                                            }}
                                            href={item.homepage} target='_blank'
                                            className='button movies-main-bg cl-w w-fit flex centering-content g-1'>
                                         <span>
                                            Go To Movie Page
                                         </span>
                                            <div className='icon flex'>
                                                <AiFillHome/>
                                            </div>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: .9
                                            }}
                                            href={`https://www.youtube.com/embed/${videoKey}`}
                                            target='_blank'
                                            className='button movies-main-bg cl-w w-fit flex centering-content g-1'>
                                        <span>
                                        Watch Trailer
                                        </span>
                                            <div className='flex icon'>
                                                <AiTwotoneVideoCamera/>
                                            </div>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            item.seasons ? (
                                <div className='seasons flex-column flex-wrap relative'>
                                    <h1 className='cl-w relative mb-2 w-fit cool_title'>
                                        Seasons
                                    </h1>
                                    <div className='flex g-1 flex-wrap'>
                                        {item.seasons.map((season: season) => (
                                            <div key={nanoid()} className='overflow-hidden season flex align-center'>
                                                {
                                                    season.poster_path && (
                                                        <div className='radius overflow-hidden relative'>
                                                            <div
                                                                className='season_num centering-content fs-small g-1 absolute w-100 h-10'>
                                                                <span>Season</span>
                                                                <div className='season__number cl-w'>
                                                                    {season.season_number}
                                                                </div>
                                                            </div>
                                                            <img style={{width: '150px'}}
                                                                 src={api.originalImage(season.poster_path)} alt="Poster"/>
                                                        </div>
                                                    )
                                                }
                                                <div
                                                    className="movies-main-bg season_details p-1 h-80 flex flex-1 flex-column g-1">
                                                    <span className="cl-t fs-x-small">{season.overview}</span>
                                                    <span
                                                        className='cl-w fs-small'>{season.episode_count} Episodes</span>
                                                    <span className='cl-w fs-small'>Date: {season.air_date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            item.type == 'movie' && (
                                <div className='flex-column  g-1 centering-content relative'>
                                    <h1 className='cl-w relative'>
                                        Similar Movies
                                    </h1>
                                    <div className='similar_movies'>
                                        {
                                            similarItem.map((e: SeriesType & MovieType) => (
                                                <div
                                                    className='flex relative movie item-box-bg align-center relative flex-column box-shadow radius overflow-hidden'
                                                    key={nanoid()}>
                                                    <div>
                                                        <img src={api.originalImage(e.poster_path)}
                                                             alt="Poster"

                                                        />
                                                    </div>
                                                    <div
                                                        className='flex flex-column  flex-1 justify-start g-1 p-1'>
                                                        <div
                                                            className="movie-name cl-movie-main fs-small">
                                                            {e.title}
                                                        </div>
                                                        <p className='fs-x-small cl-light-w'>
                                                            {e.release_date}
                                                        </p>
                                                        <div className="absolute rate cl-y relative w-fit">
                                                            <div className="icon flex">
                                                                <AiFillStar/>
                                                            </div>
                                                            <p className="fs-x-small cl-b absolute rate-count">
                                                                {Math.round(e.vote_average)}
                                                            </p>
                                                        </div>
                                                        <div className='flex-1 flex align-end'
                                                             onClick={() => {
                                                                 getMovieDetails(e.id, 'movie');
                                                             }}
                                                        >
                                                            <motion.button
                                                                whileHover={{
                                                                    scale: .9
                                                                }}
                                                                className='button fs-x-small cl-w movies-alt-bg w-fit'>
                                                                View More Details
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Item;
