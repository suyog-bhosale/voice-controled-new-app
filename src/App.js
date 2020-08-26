import React, { useEffect, useState } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./componets/newCards/NewsCard";

const alankey =
  "934f4ba7b574fd325ff42fea29161a5d2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArtival, setnewArtical] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setnewArtical(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div>
        <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
      </div>
      <NewsCard articles={newsArtival} />
    </div>
  );
}

export default App;
