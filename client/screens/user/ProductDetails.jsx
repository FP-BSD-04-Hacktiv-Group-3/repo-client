import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import Carousel from "react-native-snap-carousel";
import formatPrice from "../../utils/formatPrice";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { APP_API_URL } from "../../config/api";
import axios from "axios";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

// const ProductDetailsData = {
//   name: "DIY Embroidery Stater Kit - Sunflower",
//   images: [
//     {
//       id: "1",
//       product_img: require("../../assets/products/craft1.jpeg"),
//     },
//     { id: "2", product_img: require("../../assets/products/craft2.jpeg") },
//     { id: "3", product_img: require("../../assets/products/craft3.jpeg") },
//   ],
//   price: 85000,
//   rating: 5,
//   total_reviews: 29,
//   total_stocks: 199,
//   desc: "PREORDER - 5 Hari. Diy Sunflower Embroider Kit: Embroidery kit sudah lengkap dengan pola yg siap di sulam, tanpa harus di salin. Sudah lengkap dengan Embroidery Guide cocok untuk pemula. Mari semua kita semakin produktif dengan belajar menyulam bersama Knit Official.Id.",
//   Store: {
//     name: "Shop Larson Electronic",
//   },
//   User: {
//     username: "Maddison B",
//   },
// };

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
  padding: 6px 8px;
  background: #eefaf6;
  border-radius: 100px;
  margin-top: 8px;
  margin-bottom: 8px;
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

const ButtonDiv2 = styled(ButtonDiv)`
  gap: 14px;
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

const Button1Seller = styled(Button)`
  border: 1px solid #feaf27;
  flex: 1;
`;

const Button2 = styled(Button)`
  border: 1px solid #feaf27;
`;

const Button2Seller = styled(Button)`
  background-color: #bb4648;
  flex: 1;
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

const BtnIcon = styled.Pressable``;

const Separator = styled.View`
  background: #ededed;
  padding: 0.1px;
  elevation: 1;
  margin: 18px 0;
`;

const StoreDetailsDiv = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 0 12px;
`;

const ProfilePict = styled.Image`
  height: 45px;
  width: 45px;
  padding-left: 10px;
  resize-mode: contain;
`;

const SectionContainer = styled.View`
  flex: 1;
`;

const UserUsername = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const UserStatus = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_400Regular;
  margin-top: 4px;
`;

const DescDiv = styled.View`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_400Regular;
  padding: 12px;
  margin-bottom: 20px;
`;

const DescTitle = styled.Text`
  color: #0c1a30;
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 14px;
`;

const DescText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

export default function ProductDetails({ route }) {
  const navigation = useNavigation();
  const { id } = route.params;

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const [isLiked, setIsLiked] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct(_id) {
      // console.log(_id, 333);
      const data = await axios({
        method: "GET",
        url: `${APP_API_URL}/product/${_id}`,
      });

      setProduct(data?.data);
    }

    fetchProduct(id);
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Navbar back="back" title="Detail Produk" />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          {product?.name && (
            <>
              <CarouselContainer>
                <Carousel
                  data={product.Images}
                  renderItem={({ item }) => (
                    <CarouselItem>
                      <CarouselImage source={{ uri: item?.imageUrl }} />
                    </CarouselItem>
                  )}
                  sliderWidth={Dimensions.get("window").width}
                  itemWidth={Dimensions.get("window").width * 0.79}
                />
              </CarouselContainer>

              <DetailsFrontmatterDiv>
                <DetailsFrontmatterTitle>
                  {product?.name}
                </DetailsFrontmatterTitle>
              </DetailsFrontmatterDiv>

              <DFSubtitleDiv>
                <DFPrice>{formatPrice(+product.price)}</DFPrice>

                {product?.stockStatus === "Available" ? (
                  <StockContainer>
                    <StockText>Stok Tesedia</StockText>
                  </StockContainer>
                ) : (
                  <StockContainer style={{ backgroundColor: "#EE636E" }}>
                    <StockText style={{ color: "white" }}>Stok Habis</StockText>
                  </StockContainer>
                )}
              </DFSubtitleDiv>

              <DFSubtitleDiv>
                {/* <DFSubtitleIconDiv>
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
            </DFSubtitleIconDiv> */}

                {/* <View /> */}
                <DFSubtitleIconDiv>
                  {/* <BtnIcon onPress={() => navigation.navigate("Wishlist")}> */}
                  <BtnIcon onPress={() => setIsLiked(!isLiked)}>
                    {isLiked ? (
                      <AntDesign name="heart" size={28} color="red" />
                    ) : (
                      <StyledIcon
                        source={require("../../assets/icons/ic_menu_wishlist_outline.png")}
                        size={28}
                      />
                    )}
                  </BtnIcon>
                  <BtnIcon onPress={() => navigation.navigate("ChatDetails")}>
                    <Ionicons
                      name="md-chatbubble-ellipses-outline"
                      size={28}
                      color="#0C1A30"
                    />
                  </BtnIcon>
                </DFSubtitleIconDiv>

                {/* Tersedia: {ProductDetailsData?.total_stocks} */}
                {/* {false ? (
              <StockContainer>
                <StockText>Stok Tesedia</StockText>
              </StockContainer>
            ) : (
              <StockContainer style={{ backgroundColor: "#EE636E" }}>
                <StockText style={{ color: "white" }}>Stok Habis</StockText>
              </StockContainer>
            )} */}
              </DFSubtitleDiv>

              {/* kalo user */}
              <ButtonDiv>
                <Button1>
                  <ButtonText1>Tambah ke keranjang</ButtonText1>
                </Button1>
                <Button2>
                  <ButtonText2>Beli Sekarang</ButtonText2>
                </Button2>
              </ButtonDiv>

              {/* kalo produk nya si seller */}
              {/* <ButtonDiv2>
            <Button1Seller
              onPress={() => navigation.navigate("EditProductForm")}
            >
              <ButtonText2>Edit Produk</ButtonText2>
            </Button1Seller>
            <Button2Seller>
              <ButtonText1>Hapus Produk</ButtonText1>
            </Button2Seller>
          </ButtonDiv2> */}

              <Separator />
              <StoreDetailsDiv
                onPress={() => navigation.navigate("InfoSellerPage")}
              >
                <ProfilePict
                  source={require("../../assets/profile/profile.png")}
                />

                <SectionContainer>
                  <UserUsername>{product?.Store?.name}</UserUsername>
                  {/* <UserStatus>{product?.User?.username}</UserStatus> */}
                </SectionContainer>

                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </StoreDetailsDiv>
              <Separator />

              <DescDiv>
                <DescTitle>Description Product</DescTitle>
                <DescText>{product?.description}</DescText>
              </DescDiv>
            </>
          )}
        </ScrollDiv>
      </View>
    );
  }
}
