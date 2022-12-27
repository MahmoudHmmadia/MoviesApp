import {NavLink, useNavigate} from "react-router-dom";
import {link} from "../../types/types";
import "./nav.scss";
import {useState} from "react";

interface NavPropsI {
    logo: any;
    appName: string;
    links: link[];
}

function Nav({logo, appName, links}: NavPropsI) {
    const navigate = useNavigate();
    const [linksToggle, setLinksToggle] = useState(false);
    return (
        <>
            <nav className="pt-2 pb-2 box-shadow centering-content ">
                <div className="container flex justify-between align-center">
                    <h1 className="logo flex cl-movie-main flex align-center g-1 pointer "
                        onClick={() => navigate('/')}
                    >
                        <div className="icon flex fs-x-med">{logo}</div>
                        <span>{appName}</span>
                    </h1>
                    <div
                        className={`d-none toggle flex flex-column justify-between pointer ${
                            linksToggle ? "close" : null
                        }`}
                        onClick={() => setLinksToggle((prev) => !prev)}
                    >
                        <span className="smooth"></span>
                        <span className="smooth"></span>
                        <span className="smooth"></span>
                    </div>
                    <ul
                        className={`links flex g-2 align-center ${
                            linksToggle ? "show" : "hide"
                        }`}
                    >
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="smooth"
                                onClick={() => setLinksToggle(false)}
                            >
                                <NavLink to={link.path} className="flex align-center g-1">
                                    <div className="icon flex">{link.icon}</div>
                                    <span className="">{link.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <ul
                className={`links__toggle flex g-2 align-center ${
                    linksToggle ? "show" : "hide"
                }`}
            >
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="smooth"
                        onClick={() => setLinksToggle(false)}
                    >
                        <NavLink to={link.path} className="flex align-center g-1">
                            <div className="icon flex">{link.icon}</div>
                            <span className="">{link.title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Nav;
