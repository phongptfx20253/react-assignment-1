import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SearchList from "../../components/search/SearchList";
import SearchPopup from "../../components/search/SearchPopup";
import Subscribe from "../../components/subscribe/Subscribe";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className="searchContainer">
        <div className="searchWrapper">
          <SearchPopup />
          <SearchList />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Search;
