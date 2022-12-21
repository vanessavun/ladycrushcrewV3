import Header from "../../components/home/header/header.component";
import CommunityStatement from "../../components/home/community/community-statement.component";
import Directory from "../../components/directory/directory.component";
import { HomeShopContainer } from "./home-styles";

function Home() {
  return (
    <div>
      <Header />
      <CommunityStatement />
      <HomeShopContainer>
        <h2>Support us through our shop</h2>
        <Directory />
      </HomeShopContainer>
    </div>
  );
}

export default Home;
