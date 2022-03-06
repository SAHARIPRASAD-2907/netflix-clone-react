import "./home-screen.css";
import Nav from "../../Components/Nav";
import Banner from "../../Components/Banner";
import Row from "../../Components/Row";

import requests from "../../utils/Requests";

function HomeScreen() {
  return (
    <div>
      {/* Nav Bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      {Object.values(requests).map(({ url, title, isLargeRow }) => {
        return (
          <Row key={url} title={title} fetchUrl={url} isLargeRow={isLargeRow} />
        );
      })}
      {/* {requests.map((request) => {
        console.log(request);
        return (
          
        );
      })} */}
    </div>
  );
}

export default HomeScreen;
