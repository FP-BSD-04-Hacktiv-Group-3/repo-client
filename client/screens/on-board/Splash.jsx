import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const ImgContainer = styled.View``;

const ImageIcon = styled.Image`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio || 1};
`;

const ImageLogo = styled.Image`
  margin-top: 40px;
`;

const VersionContainer = styled.View`
  position: absolute;
  bottom: 40px;
`;

const VersionText = styled.Text``;

export default function Splash() {
  return (
    <Container>
      <ImgContainer>
        <ImageIcon
          resizeMode="cover"
          source={require("../../assets/brand/icon.png")}
          aspectRatio={1 / 1}
        />
      </ImgContainer>

      <ImgContainer>
        <ImageLogo
          resizeMode="cover"
          source={require("../../assets/brand/logo_shadow.png")}
        />
      </ImgContainer>

      <VersionContainer>
        <VersionText>Version 0.0.1</VersionText>
      </VersionContainer>
    </Container>
  );
}
