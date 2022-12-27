import {motion} from "framer-motion";
import {TiArrowBack, TiArrowForward} from "react-icons/all";
import './pagination.scss';
interface PropsI {
    setLoading : (loading:boolean)=>void,
    setPageNumber : (pageNumber:number)=>void,
    pageNumber : number;
}
function Pagination({setLoading , setPageNumber,pageNumber} : PropsI){
    function handle(num: number) {
        setLoading(true);
        setPageNumber(num);
    }
    const pagination = [
        1, 2, 3, 4, 5
    ];
    return(
        <ul className="pagination centering-content g-1 pb-2">
            <motion.li
                className={
                    `centering-content cl-w movies-main-bg pointer fs-small  ${pageNumber==1&&'off'} `
                }
                onClick={() =>
                 pageNumber >1 && handle(pageNumber-=1)
                }
                whileHover={{
                    backgroundColor: "#fff",
                    color: '#ce3692',
                }}
            >
                <TiArrowBack/>
            </motion.li>
            {pagination.map((num: number, index) => (
                <motion.li
                    className={
                        `centering-content cl-w movies-main-bg pointer fs-small ${pageNumber === num ? 'active' : null}`
                    }
                    key={index}
                    onClick={() => handle(num)}
                    whileHover={{
                        backgroundColor: "#fff",
                        color: '#ce3692',
                    }}
                >
                    {num}
                </motion.li>
            ))}
            {
                pageNumber > pagination.length && (
                    <>
                        {
                            pageNumber >= 2 + pagination.length &&
                          (<li className='cl-movie-alt'>....</li>)
                        }
                    <motion.li
                        className={
                            `centering-content cl-w movies-main-bg pointer fs-small`
                        }
                        onClick={() => handle(pageNumber)}
                        whileHover={{
                            backgroundColor: "#fff",
                            color: '#ce3692',
                        }}
                    >
                        {pageNumber}
                    </motion.li>
                    </>
                )
            }
            <motion.li
                className={
                    `centering-content cl-w movies-main-bg pointer fs-small active}`
                }
                onClick={() =>
                    handle(pageNumber+=1)
                }
                whileHover={{
                    backgroundColor: "#fff",
                    color: '#ce3692',
                }}
            >
                <TiArrowForward/>
            </motion.li>
        </ul>
    )
}
export default  Pagination ;
