import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import Carousel from "react-native-snap-carousel";
import formatPrice from "../../utils/formatPrice";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const ProductDetailsData = {
  name: "DIY Embroidery Stater Kit - Sunflower",
  images: [
    {
      id: "1",
      product_img: require("../../assets/products/craft1.jpeg"),
    },
    { id: "2", product_img: require("../../assets/products/craft2.jpeg") },
    { id: "3", product_img: require("../../assets/products/craft3.jpeg") },
  ],
  price: 85000,
  rating: 5,
  total_reviews: 29,
  total_stocks: 199,
};

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 0 24px;
`;

const CarouselContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const CarouselItem = styled.View`
  background-color: white;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  padding: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  margin: 20px 0;
`;

const CarouselText = styled.Text`
  font-size: 18px;
  text-align: right;
`;

const CarouselImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailsFrontmatterDiv = styled.View`
  margin: 20px 12px 8px 12px;
`;

const DetailsFrontmatterTitle = styled.Text`
  font-size: 24px;
  font-family: DMSans_700Bold;
`;

const DFSubtitleDiv = styled.View`
  margin: 0px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DFSubtitleIconDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
`;

const DFPrice = styled.Text`
  color: #fe3a30;
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const StyledIcon = styled(Image)`
  width: ${(props) => `${props.size}px` || "24px"};
  height: ${(props) => `${props.size}px` || "24px"};
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const RatingIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const DetailsText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

const StockContainer = styled.View`
  padding: 4px 8px;
  background: #eefaf6;
  border-radius: 100px;
`;

const StockText = styled.Text`
  color: #3a9b7a;
  font-size: 13px;
  font-family: DMSans_500Medium;
`;

const ButtonDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
`;

const Button = styled.TouchableOpacity`
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  padding: 0 20px;
`;

const Button1 = styled(Button)`
  background-color: #feaf27;
`;

const Button2 = styled(Button)`
  border: 1px solid #feaf27;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const ButtonText1 = styled(ButtonText)`
  color: white;
`;

const ButtonText2 = styled(ButtonText)`
  color: black;
`;

const Temp = styled.View`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProductDetails({ item }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Navbar back="back" title="Detail Produk" />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <CarouselContainer>
            <Carousel
              data={ProductDetailsData.images}
              renderItem={({ item }) => (
                <CarouselItem>
                  <CarouselImage source={item.product_img} />
                  {/* <CarouselText>
                      {item.id}/{DATA?.length}
                    </CarouselText> */}
                </CarouselItem>
              )}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width * 0.79}
            />
          </CarouselContainer>

          <DetailsFrontmatterDiv>
            <DetailsFrontmatterTitle>
              {ProductDetailsData.name}
            </DetailsFrontmatterTitle>
          </DetailsFrontmatterDiv>

          <DFSubtitleDiv>
            <DFPrice>{formatPrice(ProductDetailsData.price)}</DFPrice>
            <DFSubtitleIconDiv>
              <StyledIcon
                source={require("../../assets/icons/ic_menu_wishlist_outline.png")}
                size={22}
              />
              <Ionicons
                name="md-chatbubble-ellipses-outline"
                size={22}
                color="#0C1A30"
              />
            </DFSubtitleIconDiv>
          </DFSubtitleDiv>

          <DFSubtitleDiv>
            <DFSubtitleIconDiv>
              <RatingContainer>
                <RatingIcon
                  resizeMode="cover"
                  source={require("../../assets/icons/star.png")}
                />
                <DetailsText>{ProductDetailsData?.rating}</DetailsText>
              </RatingContainer>
              <DetailsText>
                {ProductDetailsData?.total_reviews}&nbsp;
                {ProductDetailsData?.total_reviews > 1 ? "reviews" : "review"}
              </DetailsText>
            </DFSubtitleIconDiv>
            <StockContainer>
              <StockText>
                Tersedia: {ProductDetailsData?.total_stocks}
              </StockText>
            </StockContainer>
          </DFSubtitleDiv>

          <ButtonDiv>
            <Button1>
              <ButtonText1>Tambah ke keranjang</ButtonText1>
            </Button1>
            <Button2>
              <ButtonText2>Beli Sekarang</ButtonText2>
            </Button2>
          </ButtonDiv>

          <Temp>
            <Text>Store Details + Product Details</Text>
            <Text>SOOON...</Text>
          </Temp>
        </ScrollDiv>
      </View>
    );
  }
}
