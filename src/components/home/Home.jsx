import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopList from "../UI/TopList";
import Loader from "../UI/Loader";

import { FMI_KEY, FMI_TOPGAINER_URL, FMI_TOPLOSER_URL } from "../../Constants";

const Home = () => {
  const [gainer, setGainer] = useState([]);
  const [loser, setLoser] = useState([]);
  // const [active, setActive] = useState([]);
  const [errors, setErrors] = useState([]);

  const [activeLoader, setActiveLoader] = useState(true);
  const setLoaderHandler = () => {
    setActiveLoader(false);
  };

  const navigate = useNavigate();

  const toToplistPage = (stocks, title) => {
    window.scrollTo({ top: 0 });
    navigate(`/toplist`, {
      state: {
        stocksList: stocks,
        title,
      },
    });

    //window.location.assign('/search/'+this.state.query+'/some-action');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let topGainer = await fetch(FMI_TOPGAINER_URL(FMI_KEY));
        if (topGainer.status !== 200) {
          throw new Error(topGainer.status);
        }
        topGainer = await topGainer.json();

        let topLoser = await fetch(FMI_TOPLOSER_URL(FMI_KEY));
        if (topLoser.status !== 200) {
          throw new Error(topLoser.status);
        }
        topLoser = await topLoser.json();

        setGainer(topGainer);
        setLoser(topLoser);
      } catch (error) {
        let errorArray = [];
        errorArray.push(error);
        setErrors(errorArray);
        setLoaderHandler();
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (gainer.length > 0) {
      setLoaderHandler();
    }
  }, [gainer]);

  return activeLoader ? (
    <Loader />
  ) : errors.length > 0 ? (
    errors
  ) : (
    <div className="row">
      <div className="col-md-6">
        <h3>Top Gainer</h3>
        <TopList toplist={gainer.slice(0, 4)} type="gainer" />
        <br></br>
        <button
          onClick={() => {
            let title = "Top Gainer Stocks";
            toToplistPage(gainer, title);
          }}
          className="toplistbutton"
        >
          View More
        </button>
      </div>
      <div className="col-md-6">
        <h3>Top Loser</h3>
        <TopList toplist={loser.slice(0, 4)} type="loser" />
        <br></br>
        <button
          onClick={() => {
            let title = "Top Loser Stocks";
            toToplistPage(loser, title);
          }}
          className="toplistbutton"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Home;
