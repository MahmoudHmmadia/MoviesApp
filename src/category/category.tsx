import { link } from "../types/types";
import { AiTwotoneStar,IoIosPeople,BiCategoryAlt,MdMovie, RiMovie2Fill, RiSearchFill, BsCalendarWeekFill } from "react-icons/all";

export const listCategories = (type:string) =>{
  return [
    { title: "Top Rated", icon: <AiTwotoneStar />, path: `/${type}/topRated` },
    { title: "Popular", icon: <IoIosPeople />, path: `/${type}/popular` },
    { title: "Upcoming", icon: <BsCalendarWeekFill />, path: `/${type}/upcoming` },
  ]
}

export const navCategories: link[] = [
  { title: "Search", icon: <RiSearchFill />, path: "/" },
  { title: "Movies", icon: <RiMovie2Fill />, path: "/movies/topRated" },
  { title: "Series", icon: <MdMovie />, path: "/series/topRated" },
];
