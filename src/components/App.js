import React, { useState } from "react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Button from "./Button";

function App() {
  const [showMore, setshowMore] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [productsInfo, setProductsInfo] = useState([]);

  const handleShowMore = () => {
    setshowMore(true);
  };

  return (
    <div className="App">
      <Sidebar
      />
      <div className="cardList">
        <Cards
          showMore={showMore}
        />
        {showMore === false ? <Button onClick={handleShowMore} /> : null}
      </div>
    </div>
  );
}

export default App;
