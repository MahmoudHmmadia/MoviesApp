import Categories from "./categories/Categories";
import List from "./list/List";
import {listCategories} from "../category/category";

function MainLayout({cat, type}: { cat: string, type: string }) {
    const altType = type === "series" ? 'tv' : 'movie';

    return (
        <div className="section flex flex-column g-3 ">
            <Categories links={listCategories(type)}/>
            <List type={altType} cat={cat}/>
        </div>
    )
}

export default MainLayout;
