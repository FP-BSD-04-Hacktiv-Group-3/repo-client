import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import FeaturedProductCard from "../../components/FeaturedProductCard";

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

const ScrollDiv = styled.ScrollView``;

const BannerDiv = styled.View`
  padding: 0 0 30px 28px;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 4px;
  padding-right: 28px;
`;

const HeaderTitle = styled.Text`
  color: #0c1a30;
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const HeaderLink = styled.Text`
  color: #bb4648;
  font-size: 14px;
  font-family: DMSans_700Bold;
`;

const BannerAdsDiv = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

const BannerAds = styled.Image`
  width: 100%;
  height: 160px;
  resize-mode: contain;
  margin-left: 18px;
`;

const BannerAds2 = styled.Image`
  width: 100%;
  height: 184px;
  resize-mode: contain;
  margin-left: 24px;
`;

export default function Home() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <ScrollDiv horizontal={false}>
        <Navbar />
        <Search />

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
            <HeaderLink>See All</HeaderLink>
          </HeaderContainer>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={({ item }) => <FeaturedProductCard content={item} />}
          />
        </BannerDiv>

        <BannerAdsDiv>
          <BannerAds source={require("../../assets/ads/cable_multifunc.png")} />
        </BannerAdsDiv>

        <BannerDiv>
          <HeaderContainer>
            <HeaderTitle>Best Sellers</HeaderTitle>
            <HeaderLink>See All</HeaderLink>
          </HeaderContainer>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={({ item }) => <FeaturedProductCard content={item} />}
          />
        </BannerDiv>

        <BannerAdsDiv>
          <BannerAds2
            source={require("../../assets/ads/modular_headphones.png")}
          />
        </BannerAdsDiv>

        <BannerDiv>
          <HeaderContainer>
            <HeaderTitle>New Arrivals</HeaderTitle>
            <HeaderLink>See All</HeaderLink>
          </HeaderContainer>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={({ item }) => <FeaturedProductCard content={item} />}
          />
        </BannerDiv>

        <BannerDiv>
          <HeaderContainer>
            <HeaderTitle>Top Related Products</HeaderTitle>
            <HeaderLink>See All</HeaderLink>
          </HeaderContainer>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={({ item }) => <FeaturedProductCard content={item} />}
          />
        </BannerDiv>

        <BannerDiv>
          <HeaderContainer>
            <HeaderTitle>Special Offers</HeaderTitle>
            <HeaderLink>See All</HeaderLink>
          </HeaderContainer>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={({ item }) => <FeaturedProductCard content={item} />}
          />
        </BannerDiv>
      </ScrollDiv>
    );
  }
}
