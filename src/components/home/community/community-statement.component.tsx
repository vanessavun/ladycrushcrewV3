import { Link } from "react-router-dom";
import {
  CommunityHero,
  CommunityPhotos,
  GroupImage,
  GroupContainer,
  CrushSection,
} from "./community-styles";
import { Slide, Fade } from "react-awesome-reveal";
import one from "../../../assets/LCC_Group.jpg";
import two from "../../../assets/LCC_Group2.jpg";
import three from "../../../assets/LCC_Group4.png";

function CommunityStatement() {
  return (
    <div>
      <CommunityHero>
        <Slide duration={2000} direction="up" triggerOnce>
          <h2>
            Lady Crush Crew is a community for ladies who crush beta while
            empowering each other through climbing.
          </h2>
        </Slide>
      </CommunityHero>
      <CommunityPhotos>
        <Fade duration={2000} direction="up" triggerOnce>
          <GroupContainer>
            <GroupImage src={one} alt="Group of climbers" />
          </GroupContainer>
          <GroupContainer>
            <GroupImage src={two} alt="Group of climbers" />
          </GroupContainer>
          <GroupContainer>
            <GroupImage src={three} alt="Group of climbers" />
          </GroupContainer>
        </Fade>
      </CommunityPhotos>
      <CrushSection>
        <Slide duration={2000} direction="right" triggerOnce>
          <h2>
            Come crush with us! Check the <Link to="/events">EVENTS</Link>page
            for a meetup near you.
          </h2>
        </Slide>
      </CrushSection>
    </div>
  );
}

export default CommunityStatement;
