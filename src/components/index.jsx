import React, { useState, useEffect } from "react";
import "./index.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(0);
  useEffect(() => {
    fetch(`https://api.github.com/users?since=${user}`)
      .then(response => response.json())
      .then(data => setData(data));
  });
  return (
    <div>
      {data.map((api, i) => (
        <div key={i} className="target">
          <img src={api.avatar_url} alt="not-found" />
          <p>Name: {api.login}</p>
          <p>{api.html_url}</p>
        </div>
      ))}
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setUser(user + 1)}
        >
          Siguiente
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setUser(user - 1)}
        >
          Atrás
        </Button>
      </div>
    </div>
  );
};
export default App;
