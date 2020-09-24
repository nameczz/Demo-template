import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QueryProvider from "./contexts/QueryContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      display: isMobile ? "block" : "flex",
      overflow: isMobile ? "auto" : "hidden",
    },
    main: {
      height: "calc(100vh - 60px)",
      maxWidth: "700px",
      margin: "60px auto 0 auto",
      backgroundColor: "#28292E",
    },
  });
  const classes = useStyles({});

  return (
    <QueryProvider>
      <div className={classes.root}>Demo page</div>
    </QueryProvider>
  );
};

export default App;
