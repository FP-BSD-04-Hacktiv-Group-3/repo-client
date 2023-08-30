import { Text, View } from "react-native";
import styled from "styled-components/native";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";
import Loading from "./Loading";

const Container = styled.View`
  padding: 60px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  max-width: 280px;
  gap: 10px;
`;

const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Image = styled.Image`
  width: 100%;
  height: 180px;
  resize-mode: contain;
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  font-family: DMSans_500Medium;
  text-align: center;
`;

const Subitle = styled.Text`
  color: #9c9c9c;
  font-size: 14px;
  font-family: DMSans_400Regular;
  text-align: center;
`;

export default function ItemNotFound({ image, title, subtitle }) {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
  });

  if (fontsLoaded) {
    //   return <Loading />;
    // } else {
    return (
      <Container>
        <InnerContainer>
          <ImageContainer>
            <Image source={image} />
          </ImageContainer>
          <Title>{title}</Title>
          <Subitle>{subtitle}</Subitle>
        </InnerContainer>
      </Container>
    );
  }
}
