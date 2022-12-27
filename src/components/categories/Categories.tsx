import { NavLink } from "react-router-dom";
import { link } from "../../types/types";
import "./categories.scss";
interface Links {
  links: link[];
}
function Categories({ links }: Links) {
  return (
    <ul className="centering-content g-2 categories flex-wrap ">
      {links.map((link, index) => (
        <li key={index} className="smooth">
          <NavLink to={link.path} className="flex g-1 align-center">
            <div className="icon flex">{link.icon}</div>
            <span className="">{link.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default Categories;
