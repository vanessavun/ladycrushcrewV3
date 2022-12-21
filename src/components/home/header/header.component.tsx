import React from "react";
import { Fade } from "react-awesome-reveal";
import { HeaderPhoto, HeaderDescription } from "./header-styles";

function Header() {
  return (
    <HeaderPhoto>
      <Fade>
        <HeaderDescription>
          <h2>"Strength lies in differences, not similarities."</h2>
          <h3>Stephen Covey</h3>
        </HeaderDescription>
      </Fade>
    </HeaderPhoto>
  );
}

export default Header;
