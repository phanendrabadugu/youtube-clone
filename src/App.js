import React from "react";

import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoDetails from "./Components/VideoDetails";

import { Grid } from "@material-ui/core";

//import youtube from "./Api/youtube";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={12}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
