import { Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import Checkbox from "expo-checkbox";
import formatPrice from "../../utils/formatPrice";
import { AntDesign } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const DATA = [
  {
    id: 1,
    store_name: "Shop Larson",
    Items: [
      {
        id: 11,
        name: "Wooden Wine",
        price: 380000,
        rating: 5,
        total_reviews: 29,
        quantity: 2,
      },
      {
        id: 12,
        name: "Wooden Wine2",
        price: 380000,
        rating: 5,
        total_reviews: 29,
        quantity: 5,
      },
    ],
  },
  {
    id: 2,
    store_name: "Shop Tecotta",
    Items: [
      {
        id: 13,
        name: "Wooden Wine3",
        price: 380000,
        rating: 5,
        total_reviews: 29,
        quantity: 1,
      },
    ],
  },
];

const Container = styled.View`
  flex: 1;
  background: white;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px 30px;
  margin-bottom: 150px;
`;

const ChekoutNavDiv = styled.View`
  width: 100%;
  padding: 24px;
  display: flex;
  position: absolute;
  bottom: 0;
`;

const CheckoutNavTitle = styled.Text`
  color: #838589;
  font-size: 12px;
  font-family: DMSans_400Regular;
  margin: 0 4px;
`;

const CheckoutNavSubtitle = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_700Bold;
  margin: 10px 4px 20px 4px;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #feaf27;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutButtonText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const StoreContainer = styled.View`
  margin-bottom: 10px;
`;

const StoreNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StoreText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const ProductContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
`;

const ProductDetailsContainer = styled.View`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const ProductDetails = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ProductImg = styled.Image`
  width: 90px;
  aspect-ratio: 1/1.2;
`;

const ProductDetailsTextDiv = styled.View`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 0 4px;
`;

const ProductName = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_700Bold;
  margin: 0 4px;
`;

const Price = styled.Text`
  color: #fe3a30;
  font-size: 12px;
  font-family: DMSans_500Medium;
  margin: 0 3px;
`;

const CardDetails = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const RatingIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

const DetailsText = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_400Regular;
`;

const Separator = styled.View`
  background: #ededed;
  padding: 0.2px;
  elevation: 1;
  margin-bottom: 8px;
`;

const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const QuantityText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const QuantityBtnDiv = styled.View`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const QuantityBtn = styled.Pressable`
  justify-content: center;
`;

const QuantityAmountDiv = styled.View`
  justify-content: center;
`;

const QuantityAmountText = styled.Text`
  text-align: center;
  font-size: 16px;
`;

const QuantityBtnText = styled.Text`
  text-align: center;
  font-size: 20px;
  width: 20px;
`;

export default function Cart() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Keranjang" />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          {DATA?.map((store) => (
            <StoreContainer key={store.id}>
              <StoreNameContainer>
                <Checkbox />
                <StoreText>{store?.store_name}</StoreText>
              </StoreNameContainer>

              {store?.Items.map((item) => (
                <View key={item.id}>
                  <ProductContainer>
                    <Checkbox />

                    <ProductDetailsContainer>
                      <ProductDetails>
                        <ProductImg
                          resizeMode="cover"
                          source={require("../../assets/products/wooden_wine.png")}
                        />
                        <ProductDetailsTextDiv>
                          <ProductName>{item.name}</ProductName>

                          <Price>{formatPrice(item.price)}</Price>
                          <CardDetails>
                            <RatingContainer>
                              <RatingIcon
                                resizeMode="cover"
                                source={require("../../assets/icons/star.png")}
                              />
                              <DetailsText>{item?.rating}</DetailsText>
                            </RatingContainer>
                            <DetailsText>
                              {item?.total_reviews}&nbsp;
                              {item?.total_reviews > 1 ? "reviews" : "review"}
                            </DetailsText>
                          </CardDetails>
                        </ProductDetailsTextDiv>
                      </ProductDetails>
                      <QuantityContainer>
                        <QuantityText>Quantity</QuantityText>
                        <QuantityBtnDiv>
                          <QuantityBtn>
                            <AntDesign name="minus" size={20} color="#C4C5C4" />
                            {/* <QuantityBtnText style={{ color: "#C4C5C4" }}>
                              --
                            </QuantityBtnText> */}
                          </QuantityBtn>
                          <QuantityAmountDiv>
                            <QuantityAmountText>
                              {item.quantity}
                            </QuantityAmountText>
                          </QuantityAmountDiv>
                          <QuantityBtn>
                            <AntDesign name="plus" size={20} color="#000" />
                            {/* <QuantityBtnText style={{ color: "#000" }}>
                              +
                            </QuantityBtnText> */}
                          </QuantityBtn>
                        </QuantityBtnDiv>
                      </QuantityContainer>
                    </ProductDetailsContainer>
                  </ProductContainer>

                  <Separator />
                </View>
              ))}
            </StoreContainer>
          ))}

          <View style={{ marginBottom: 20 }} />
        </ScrollDiv>

        <ChekoutNavDiv>
          <CheckoutNavTitle>Total Belanja</CheckoutNavTitle>
          <CheckoutNavSubtitle>Rp 175.000</CheckoutNavSubtitle>
          <CheckoutButton>
            <CheckoutButtonText>Beli</CheckoutButtonText>
          </CheckoutButton>
        </ChekoutNavDiv>
      </Container>
    );
  }
}
