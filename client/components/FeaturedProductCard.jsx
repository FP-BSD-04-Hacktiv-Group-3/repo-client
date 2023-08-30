import { Image, Text, View } from "react-native";
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
  width: 150px;
  margin-right: 20px;
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

// const AddWLIcon = styled.View`
//   position: absolute;
//   padding: 20px;
//   top: 0px;
//   right: 0px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledIcon = styled(Image)`
//   width: ${(props) => `${props.size}px` || "24px"};
//   height: ${(props) => `${props.size}px` || "24px"};
// `;

export default function FeaturedProductCard({ content }) {
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

        {/* <AddWLIcon>
          <StyledIcon
            source={
              false
                ? require("../assets/icons/ic_menu_wishlist.png")
                : require("../assets/icons/ic_menu_wishlist_outline.png")
            }
            size={22}
          />
        </AddWLIcon> */}
      </CardDiv>
    );
  }
}
