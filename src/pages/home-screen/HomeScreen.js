import "./home-screen.css";
import Nav from "../../Components/Nav";
import Banner from "../../Components/Banner";
import Row from "../../Components/Row";

function HomeScreen() {
  return (
    <div>
      {/* Nav Bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row />
    </div>
  );
}

export default HomeScreen;
