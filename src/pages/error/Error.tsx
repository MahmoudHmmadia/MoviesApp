import errorImage from '../../assets/images/error.png';
import {IoRefreshCircleSharp} from "react-icons/all";
import './error.scss';
import {useNavigate} from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    return (
        <div className='error w-100 h-100 centering-content'>
            <div className='container centering-content g-2'>
                <div className='image w-60 centering-content'>
                    <img src={errorImage} alt="Error"/>
                </div>
                <div className='flex flex-column error__content flex-1 g-2 align-center'>
                    <h1 className='cl-movie-main'>
                        OPS !
                    </h1>
                    <p className='cl-movie-alt'>
                        Check Your Internet And Try Again
                    </p>
                    <button className='button cl-w movies-main-bg centering-content g-1' onClick={
                        () => {
                            if (localStorage.getItem('ITEM') === 'null') {
                                navigate('/');
                                window.location.reload();
                            } else {
                                window.location.reload();
                            }
                        }
                    }>
                        <p>Refresh</p>
                        <div className='icon flex'>
                            <IoRefreshCircleSharp/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error;
