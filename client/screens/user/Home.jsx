import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import SearchMock from "../../components/SearchMock";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import ItemNotFound from "../../components/ItemNotFound";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APP_API_URL } from "../../config/api";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { useEffect, useState } from "react";

const ads = [
  {
    id: "1",
    image: require("../../assets/ads/gratis_ongkir.png"),
  },
  {
    id: "2",
    image: require("../../assets/ads/diskon_merdeka.png"),
  },
];

// const categories = [
//   {
//     id: "1",
//     name: "Textile",
//     image: require("../../assets/categories/textileIconBg.png"),
//   },
//   {
//     id: "2",
//     name: "Decorative",
//     image: require("../../assets/categories/decorativeIconBg.png"),
//   },
//   {
//     id: "3",
//     name: "Paper",
//     image: require("../../assets/categories/paperIconBg.png"),
//   },
//   {
//     id: "4",
//     name: "Tribal",
//     image: require("../../assets/categories/tribalIconBg.png"),
//   },
//   {
//     id: "5",
//     name: "Function",
//     image: require("../../assets/categories/functionIconBg.png"),
//   },
//   {
//     id: "6",
//     name: "Others",
//     image: require("../../assets/categories/functionIconBg.png"),
//   },
// ];

// const products = [
//   {
//     id: "1",
//     name: "Product 1",
//     price: 356000,
//     rating: 4,
//     total_reviews: 25,
//     image: require("../../assets/products/poster.png"),
//   },
//   {
//     id: "2",
//     name: "Product 2",
//     price: 356000,
//     rating: 5,
//     total_reviews: 1,
//     image: require("../../assets/products/poster.png"),
//   },
//   {
//     id: "3",
//     name: "Product 3",
//     price: 356000,
//     rating: 5,
//     total_reviews: 12,
//     image: require("../../assets/products/poster.png"),
//   },
//   {
//     id: "4",
//     name: "Product 4",
//     price: 356000,
//     rating: 4,
//     total_reviews: 33,
//     image: require("../../assets/products/poster.png"),
//   },
//   {
//     id: "5",
//     name: "Product 5",
//     price: 356000,
//     rating: 3,
//     total_reviews: 46,
//     image: require("../../assets/products/poster.png"),
//   },
// ];

// const products2 = [];

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const BannerDiv = styled.View`
  padding: 0 0 18px 24px;
`;

const BannerDiv2 = styled.View`
  padding: 0 0 0px 24px;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 4px;
  padding-right: 28px;
`;

const HeaderTitle = styled.Text`
  color: #0c1a30;
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const HeaderLinkDiv = styled.Pressable``;

const HeaderLink = styled.Text`
  color: #bb4648;
  font-size: 14px;
  font-family: DMSans_700Bold;
`;

const BannerAdsDiv = styled.View`
  width: 100%;
  padding: 0 10px 0 24px;
  margin-bottom: 0px;
`;

const BannerAdsDivIn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerAds = styled.Image`
  width: 100%;
  height: 160px;
  padding-left: 10px;
  resize-mode: contain;
  margin-bottom: 10px;
`;

const BannerAds2 = styled.Image`
  width: 100%;
  height: 188px;
  margin-left: 12px;
  resize-mode: contain;
`;

const SearchDiv = styled.Pressable``;

export default function Home() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios({
        method: "GET",
        url: `${APP_API_URL}/categories`,
      });
      // console.log(data, 666666);
      setCategories(data.data);
    }

    async function fetchProduct() {
      const { data } = await axios({
        method: "GET",
        url: `${APP_API_URL}/product`,
      });
      // console.log(data, 123123123);
      setProducts(data);
    }

    fetchProduct();
    fetchCategories();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View style={{ paddingBottom: 80 }}>
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <SearchDiv onPress={() => navigation.navigate("SearchPage")}>
            <SearchMock />
          </SearchDiv>

          {products.length === 0 ? (
            <></>
          ) : (
            <>
              <BannerDiv>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={ads}
                  renderItem={({ item }) => <Banner content={item} />}
                />
              </BannerDiv>

              <BannerDiv>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={categories}
                  renderItem={({ item }) => <Category content={item} />}
                />
              </BannerDiv>

              {Array.isArray(products) && (
                <BannerDiv2 style={{ marginTop: 10 }}>
                  <HeaderContainer>
                    <HeaderTitle>Featured Products</HeaderTitle>
                    <HeaderLinkDiv>
                      <HeaderLink
                        onPress={() =>
                          navigation.navigate("AllProductsPage", {
                            title: "Featured Products",
                            items: products,
                          })
                        }
                      >
                        See All
                      </HeaderLink>
                    </HeaderLinkDiv>
                  </HeaderContainer>

                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={products?.slice(0, 6)}
                    renderItem={({ item }) => (
                      <FeaturedProductCard content={item} />
                    )}
                  />
                </BannerDiv2>
              )}

              <BannerAdsDiv>
                <BannerAdsDivIn>
                  <BannerAds
                    source={require("../../assets/ads/cable_multifunc.png")}
                  />
                </BannerAdsDivIn>
              </BannerAdsDiv>

              {Array.isArray(products) && (
                <BannerDiv2>
                  <HeaderContainer>
                    <HeaderTitle>Best Sellers</HeaderTitle>
                    <HeaderLinkDiv>
                      <HeaderLink
                        onPress={() =>
                          navigation.navigate("AllProductsPage", {
                            title: "Best Sellers",
                            items: products,
                          })
                        }
                      >
                        See All
                      </HeaderLink>
                    </HeaderLinkDiv>
                  </HeaderContainer>

                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={products?.slice(0, 6)}
                    renderItem={({ item }) => (
                      <FeaturedProductCard content={item} />
                    )}
                  />
                </BannerDiv2>
              )}

              {Array.isArray(products) && (
                <BannerDiv2>
                  <HeaderContainer>
                    <HeaderTitle>New Arrivals</HeaderTitle>
                    <HeaderLinkDiv>
                      <HeaderLink
                        onPress={() =>
                          navigation.navigate("AllProductsPage", {
                            title: "New Arrivals",
                            items: products,
                          })
                        }
                      >
                        See All
                      </HeaderLink>
                    </HeaderLinkDiv>
                  </HeaderContainer>

                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={products?.slice(0, 6)}
                    renderItem={({ item }) => (
                      <FeaturedProductCard content={item} />
                    )}
                  />
                </BannerDiv2>
              )}
            </>
          )}
        </ScrollDiv>
      </View>
    );
  }
}
