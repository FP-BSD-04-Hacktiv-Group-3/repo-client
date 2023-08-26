import styled from "styled-components/native";

const NavDiv = styled.View`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 14px;
  elevation: 2;
`;

const NavLogo = styled.Image`
  height: 18px;
`;

const NavIconDiv = styled.View`
  height: 20px;
  width: 20px;
  margin: 0 28px;
`;

const NavIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export default function Navbar() {
  return (
    <NavDiv>
      <NavIconDiv></NavIconDiv>
      <NavLogo
        source={require("../assets/brand/logo-hd.png")}
        resizeMode="contain"
      />
      <NavIconDiv>
        <NavIcon
          source={require("../assets/icons/shopping-cart.png")}
          resizeMode="contain"
        />
      </NavIconDiv>
    </NavDiv>
  );
}
