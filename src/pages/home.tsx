import React, { useContext, useEffect } from "react";
import { queryContext } from "../contexts/QueryContext";
const Home = () => {
  const { process } = useContext(queryContext);
  useEffect(() => {
    process();
  }, [process]);
  return <div>home</div>;
};

export default Home;
