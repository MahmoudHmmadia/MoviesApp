import List from "../../components/list/List";
import { UseContext } from "../../contexts/Provider";

function Search() {
  //@ts-ignore
  const { searchType } = UseContext();
  return (
    <div className="section flex flex-column g-2 ">
      <List type={searchType} />
    </div>
  );
}
export default Search;
