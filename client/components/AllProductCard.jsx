import { Text } from "react-native";
import styled from "styled-components/native";
import formatPrice from "../utils/formatPrice";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "./Loading";

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

  if (fontsLoaded) {
    //   return <Loading />;
    // } else {
    return (
      <CardDiv
        onPress={() =>
          navigation.navigate("ProductDetailsPage", {
            item: content,
          })
        }
      >
        <Card>
          <CardImg source={content?.image} />
          <CardTitle>{content?.name}</CardTitle>
          <CardSubtitle>{formatPrice(content?.price)}</CardSubtitle>

          {/* <CardDetails>
            <RatingContainer>
              <RatingIcon
                resizeMode="cover"
                source={require("../assets/icons/star.png")}
              />
              <DetailsText>{content?.rating}</DetailsText>
            </RatingContainer>
            <DetailsText>
              {content?.total_reviews}&nbsp;
              {content?.total_reviews > 1 ? "reviews" : "review"}
            </DetailsText>
          </CardDetails> */}
        </Card>
      </CardDiv>
    );
  }
}
