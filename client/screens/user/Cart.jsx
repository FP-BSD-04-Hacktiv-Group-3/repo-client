import { Pressable, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import Checkbox from "expo-checkbox";
import formatPrice from "../../utils/formatPrice";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { APP_API_URL } from "../../config/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

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
  gap: 0px;
  padding: 20px 8px;
`;

const ProductDetailsContainer = styled.View`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const ProductDetails = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
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
  flex: 1;
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
  padding: 0 8px;
  align-items: center;
  margin-bottom: 12px;
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

const StockContainer = styled.View`
  padding: 4px 0px;
  background: #eefaf6;
  border-radius: 100px;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  width: 100px;
`;

const StockText = styled.Text`
  color: #3a9b7a;
  font-size: 10px;
  font-family: DMSans_500Medium;
`;

export default function Cart() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const savedUser = await AsyncStorage.getItem("user");
      setUser(JSON.parse(savedUser));
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchCart(_id) {
      const { data } = await axios({
        method: "GET",
        url: `${APP_API_URL}/carts/${_id}`,
      });

      setProducts(data?.data);
    }

    fetchCart(user?.id);
  }, [user]);

  function addQuantity(itemId) {
    const updatedProducts = products.map((p) =>
      p.id === itemId
        ? {
            ...p,
            quantity: p.quantity + 1,
          }
        : p
    );

    setProducts(updatedProducts);
  }

  function minQuantity(itemId) {
    const updatedProducts = products.map((p) =>
      p.id === itemId
        ? {
            ...p,
            quantity: p.quantity == 0 ? p.quantity : p.quantity - 1,
          }
        : p
    );

    setProducts(updatedProducts);
  }

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Keranjang" />
        {/* {products && <Text>{JSON.stringify(products)}</Text>} */}
        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          {products?.map((item) => (
            <StoreContainer key={item.id}>
              <View>
                <ProductContainer>
                  <Pressable style={{ width: 50 }}>
                    {/* <Checkbox /> */}
                    <MaterialIcons name="remove-circle" size={24} color="red" />
                  </Pressable>

                  <ProductDetailsContainer>
                    <ProductDetails>
                      <ProductImg
                        resizeMode="cover"
                        source={require("../../assets/products/wooden_wine.png")}
                      />
                      <ProductDetailsTextDiv>
                        <StoreText>{item?.Product?.name}</StoreText>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome5 name="store" size={12} color="black" />
                          <ProductName style={{ marginLeft: 5 }}>
                            {item?.Product?.Store?.name}
                          </ProductName>
                        </View>

                        <Price>{formatPrice(+item?.Product?.price)}</Price>

                        {/* todo */}
                        {item?.Product?.stockStatus ? (
                          <StockContainer>
                            <StockText>Stok Tesedia</StockText>
                          </StockContainer>
                        ) : (
                          <StockContainer
                            style={{ backgroundColor: "#EE636E" }}
                          >
                            <StockText style={{ color: "white" }}>
                              Stok Habis
                            </StockText>
                          </StockContainer>
                        )}
                      </ProductDetailsTextDiv>
                    </ProductDetails>
                  </ProductDetailsContainer>
                </ProductContainer>
                <QuantityContainer>
                  <View style={{ width: 50 }}></View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    <QuantityText>Quantity</QuantityText>
                    <QuantityBtnDiv>
                      <QuantityBtn onPress={() => minQuantity(item.id)}>
                        <AntDesign name="minus" size={20} color="#C4C5C4" />
                      </QuantityBtn>
                      <QuantityAmountDiv>
                        <QuantityAmountText>
                          {+item.quantity}
                        </QuantityAmountText>
                      </QuantityAmountDiv>
                      <QuantityBtn onPress={() => addQuantity(item.id)}>
                        <AntDesign name="plus" size={20} color="#000" />
                      </QuantityBtn>
                    </QuantityBtnDiv>
                  </View>
                </QuantityContainer>
                <Separator />
              </View>

              {/* <StoreNameContainer>
                <Checkbox />
                <StoreText>{store?.store_name}</StoreText>
              </StoreNameContainer> */}

              {/* {store?.Items.map((item) => (
                <View key={item.id}>
                  <ProductContainer>
                    <View style={{ width: 50 }}>
                      <Checkbox />
                    </View>

                    <ProductDetailsContainer>
                      <ProductDetails>
                        <ProductImg
                          resizeMode="cover"
                          source={require("../../assets/products/wooden_wine.png")}
                        />
                        <ProductDetailsTextDiv>
                          <StoreText StoreText>{item.name}</StoreText>

                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <FontAwesome5
                              name="store"
                              size={12}
                              color="black"
                            />
                            <ProductName style={{ marginLeft: 5 }}>
                              {store?.store_name}
                            </ProductName>
                          </View>

                          <Price>{formatPrice(item.price)}</Price>

                          {true ? (
                            <StockContainer>
                              <StockText>Stok Tesedia</StockText>
                            </StockContainer>
                          ) : (
                            <StockContainer
                              style={{ backgroundColor: "#EE636E" }}
                            >
                              <StockText style={{ color: "white" }}>
                                Stok Habis
                              </StockText>
                            </StockContainer>
                          )}
                        </ProductDetailsTextDiv>
                      </ProductDetails>
                    </ProductDetailsContainer>
                  </ProductContainer>
                  <QuantityContainer>
                    <View style={{ width: 50 }}></View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <QuantityText>Quantity</QuantityText>
                      <QuantityBtnDiv>
                        <QuantityBtn>
                          <AntDesign name="minus" size={20} color="#C4C5C4" />
                        </QuantityBtn>
                        <QuantityAmountDiv>
                          <QuantityAmountText>
                            {item.quantity}
                          </QuantityAmountText>
                        </QuantityAmountDiv>
                        <QuantityBtn>
                          <AntDesign name="plus" size={20} color="#000" />
                        </QuantityBtn>
                      </QuantityBtnDiv>
                    </View>
                  </QuantityContainer>
                  <Separator />
                </View>
              ))} */}
            </StoreContainer>
          ))}

          <View style={{ marginBottom: 20 }} />
        </ScrollDiv>

        <ChekoutNavDiv>
          <CheckoutNavTitle>Total Belanja</CheckoutNavTitle>
          <CheckoutNavSubtitle>Rp 175.000</CheckoutNavSubtitle>
          <CheckoutButton onPress={() => navigation.navigate("OngkirForm")}>
            <CheckoutButtonText>Beli</CheckoutButtonText>
          </CheckoutButton>
        </ChekoutNavDiv>
      </Container>
    );
  }
}
