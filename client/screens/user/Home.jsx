import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import ItemNotFound from "../../components/ItemNotFound";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

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

const categories = [
  {
    id: "1",
    name: "Textile",
    image: require("../../assets/categories/textileIconBg.png"),
  },
  {
    id: "2",
    name: "Decorative",
    image: require("../../assets/categories/decorativeIconBg.png"),
  },
  {
    id: "3",
    name: "Paper",
    image: require("../../assets/categories/paperIconBg.png"),
  },
  {
    id: "4",
    name: "Tribal",
    image: require("../../assets/categories/tribalIconBg.png"),
  },
  {
    id: "5",
    name: "Function",
    image: require("../../assets/categories/functionIconBg.png"),
  },
  {
    id: "6",
    name: "Function",
    image: require("../../assets/categories/functionIconBg.png"),
  },
];

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 356000,
    rating: 4,
    total_reviews: 25,
    image: require("../../assets/products/poster.png"),
  },
  {
    id: "2",
    name: "Product 2",
    price: 356000,
    rating: 5,
    total_reviews: 1,
    image: require("../../assets/products/poster.png"),
  },
  {
    id: "3",
    name: "Product 3",
    price: 356000,
    rating: 5,
    total_reviews: 12,
    image: require("../../assets/products/poster.png"),
  },
  {
    id: "4",
    name: "Product 4",
    price: 356000,
    rating: 4,
    total_reviews: 33,
    image: require("../../assets/products/poster.png"),
  },
  {
    id: "5",
    name: "Product 5",
    price: 356000,
    rating: 3,
    total_reviews: 46,
    image: require("../../assets/products/poster.png"),
  },
];

const products2 = [];

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const BannerDiv = styled.View`
  padding: 0 0 24px 24px;
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
  margin-bottom: 18px;
`;

const BannerAdsDivIn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerAds = styled.Image`
  width: 100%;
  height: 180px;
  padding-left: 10px;
  resize-mode: contain;
`;

const BannerAds2 = styled.Image`
  width: 100%;
  height: 188px;
  margin-left: 12px;
  resize-mode: contain;
`;

export default function Home() {
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
      <View style={{ paddingBottom: 80 }}>
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <Search />

          {products.length === 0 ? (
            <ItemNotFound
              image={require("../../assets/vector/pnf.png")}
              title="Produk tidak ditemukan"
              subtitle="Coba cari kata lain untuk mencari produk yang kamu inginkan"
            />
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

              <BannerDiv style={{ marginTop: 10 }}>
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
                  data={products}
                  renderItem={({ item }) => (
                    <FeaturedProductCard content={item} />
                  )}
                />
              </BannerDiv>

              <BannerAdsDiv>
                <BannerAdsDivIn>
                  <BannerAds
                    source={require("../../assets/ads/cable_multifunc.png")}
                  />
                </BannerAdsDivIn>
              </BannerAdsDiv>

              <BannerDiv>
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
                  data={products}
                  renderItem={({ item }) => (
                    <FeaturedProductCard content={item} />
                  )}
                />
              </BannerDiv>

              <BannerAdsDiv>
                <BannerAdsDivIn>
                  <BannerAds2
                    source={require("../../assets/ads/modular_headphones.png")}
                  />
                </BannerAdsDivIn>
              </BannerAdsDiv>

              <BannerDiv>
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
                  data={products}
                  renderItem={({ item }) => (
                    <FeaturedProductCard content={item} />
                  )}
                />
              </BannerDiv>

              <BannerDiv>
                <HeaderContainer>
                  <HeaderTitle>Top Related Products</HeaderTitle>
                  <HeaderLinkDiv>
                    <HeaderLink
                      onPress={() =>
                        navigation.navigate("AllProductsPage", {
                          title: "Top Related Products",
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
                  data={products}
                  renderItem={({ item }) => (
                    <FeaturedProductCard content={item} />
                  )}
                />
              </BannerDiv>

              <BannerDiv>
                <HeaderContainer>
                  <HeaderTitle>Special Offers</HeaderTitle>
                  <HeaderLinkDiv>
                    <HeaderLink
                      onPress={() =>
                        navigation.navigate("AllProductsPage", {
                          title: "Special Offers",
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
                  data={products}
                  renderItem={({ item }) => (
                    <FeaturedProductCard content={item} />
                  )}
                />
              </BannerDiv>
            </>
          )}
        </ScrollDiv>
      </View>
    );
  }
}
