import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import AllProductCard from "../../components/AllProductCard";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const items = [
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

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 20px;
`;

const Container = styled.View`
  margin: 0 0 40px 0;
`;

export default function Wishlist() {
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
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <HeaderTitle>Wishlist</HeaderTitle>

          <Container>
            <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <AllProductCard content={item} />}
            />
          </Container>
        </ScrollDiv>
      </View>
    );
  }
}
