import { Text } from "react-native";
import styled from "styled-components/native";
import formatPrice from "../utils/formatPrice";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";
import { useEffect, useState } from "react";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const CardDiv = styled.Pressable`
  width: 50%;
  padding: 0 8px;
  margin-bottom: 14px;
`;

const Card = styled.View`
  background: white;
  border-radius: 10px;
  elevation: 1;
  padding: 12px 10px;
`;

const CardImg = styled.Image`
  width: 100%;
  height: 150px;
`;

const CardTitle = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_700Bold;
  margin: 10px 0 1px 0;
`;

const CardSubtitle = styled.Text`
  color: #ff7537;
  font-size: 12px;
  font-family: DMSans_700Bold;
`;

const CardDetails = styled.View`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const RatingIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

const DetailsText = styled.Text`
  color: #0c1a30;
  font-size: 10px;
  font-family: DMSans_400Regular;
`;

export default function AllProductCard({ content }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const [img, setImg] = useState("");

  useEffect(() => {
    if (content?.Product) {
      // console.log(content?.Product?.Images[0].imageUrl, 33);
      setImg(content?.Product?.Images[0].imageUrl);
    } else if (content) {
      setImg(content?.Images[0].imageUrl);
    }
  }, []);

  if (!fontsLoaded) {
    return <></>;
  } else {
    if (content.Product) {
      return (
        <CardDiv
          onPress={() =>
            navigation.navigate("ProductDetailsPage", {
              id: content?.id,
            })
          }
        >
          <Card>
            {img && <CardImg source={{ uri: img }} />}
            <CardTitle>{content?.Product?.name}</CardTitle>
            <CardSubtitle>{formatPrice(+content?.Product?.price)}</CardSubtitle>
          </Card>
        </CardDiv>
      );
    } else {
      return (
        <CardDiv
          onPress={() =>
            navigation.navigate("ProductDetailsPage", {
              id: content?.id,
            })
          }
        >
          <Card>
            {img && <CardImg source={{ uri: img }} />}
            <CardTitle>{content?.name}</CardTitle>
            <CardSubtitle>{formatPrice(+content?.price)}</CardSubtitle>
          </Card>
        </CardDiv>
      );
    }
  }
}
