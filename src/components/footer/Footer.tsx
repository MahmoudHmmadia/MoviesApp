import {GiDandelionFlower} from "react-icons/all";
import './footerr.scss';

function Footer() {
    return (
        <footer className='relative pt-2 pb-2 movies-main-bg'>
            <div className="container">
                <h2 className='centering-content content'>
                    Made With Love By Mahmoud Hmmadia
                    <div className="fs-x-med">
                        <GiDandelionFlower/>
                    </div>
                </h2>
            </div>
        </footer>
    )
}

export default Footer;
