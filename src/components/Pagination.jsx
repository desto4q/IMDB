import React from "react";
import { IconMinus } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSearchStore } from "../stores/search_store";

function Pagination() {
  let location = useLocation().pathname;
  let {page: id  } = useParams();
  let navigate = useNavigate();
  let page = location.slice(0, location.lastIndexOf("/"));
  const searchTerm = useSearchStore((state) => state.search);
  let query = searchTerm;

  let NextPage = (number) => {
    if (query) {
      let currPage = parseInt(number);
      currPage += 1;
      navigate(`${page}/${currPage}?q=${query.replace(" ", "+")}`);
    } else {
      let currPage = parseInt(number);
      currPage += 1;
      navigate(`${page}/${currPage}`);
    }
  };
  
  let PrevPage = (number) => {
    let currPage = parseInt(number);
    if (query) {
      if (currPage >= 2) {
        currPage -= 1;
      }
      navigate(`${page}/${currPage}?q=${query}`);
    } else {
      if (currPage >= 2) {
        currPage -= 1;
      }
      navigate(`${page}/${currPage}`);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={(e) => {
          PrevPage(id);
        }}
      >
        <IconMinus />
      </button>
      <div className="number">{parseInt(id)}</div>
      <button
        onClick={() => {
          NextPage(id);
        }}
      >
        <IconPlus />
      </button>
    </div>
  );
}

export default Pagination;