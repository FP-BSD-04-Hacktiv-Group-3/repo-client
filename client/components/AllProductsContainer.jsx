import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import AllProductCard from "./AllProductCard";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 356000,
    rating: 4,
    total_reviews: 25,
    image: require("../assets/products/poster.png"),
  },
  {
    id: "2",
    name: "Product 2",
    price: 356000,
    rating: 5,
    total_reviews: 1,
    image: require("../assets/products/poster.png"),
  },
  {
    id: "3",
    name: "Product 3",
    price: 356000,
    rating: 5,
    total_reviews: 12,
    image: require("../assets/products/poster.png"),
  },
  {
    id: "4",
    name: "Product 4",
    price: 356000,
    rating: 4,
    total_reviews: 33,
    image: require("../assets/products/poster.png"),
  },
  {
    id: "5",
    name: "Product 5",
    price: 356000,
    rating: 3,
    total_reviews: 46,
    image: require("../assets/products/poster.png"),
  },
];

const Container = styled.View`
  margin: 20px 30px 0px 30px;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const ContentContainer = styled.View`
  margin: 20px 0;
`;

export default function AllProductsContainer() {
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
        <HeaderContainer>
          <HeaderTitle>All Products</HeaderTitle>
          <HeaderLink>See All</HeaderLink>
        </HeaderContainer>

        <ContentContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <AllProductCard content={item} />}
          />
        </ContentContainer>
      </Container>
    );
  }
}
