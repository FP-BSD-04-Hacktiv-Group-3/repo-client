import { FlatList, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import SearchMock from "../../components/SearchMock";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import AllProductCard from "../../components/AllProductCard";
import Loading from "../../components/Loading";
import { useEffect } from "react";

const URL = "https://b999-27-50-29-117.ngrok-free.app";

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

const Container = styled.View`
  flex: 1;
`;

const Container2 = styled.View`
  margin: 0 24px;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const UserContainerDiv = styled.View`
  background: white;
  padding: 24px;
`;

const Separator = styled.View`
  background: #ededed;
  padding: 0.6px;
  elevation: 1;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const ProfilePict = styled.Image`
  height: 45px;
  width: 45px;
  padding-left: 10px;
  resize-mode: contain;
`;

const SectionContainer = styled.View``;

const Storename = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_700Bold;
`;

const Username = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_500Medium;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin: 18px 0;
`;

const IconImg = styled.Image`
  width: 20px;
  height: 20px;
`;

const Location = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_400Regular;
`;

const PreviewContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`;

const PreviewCol = styled.View`
  flex: 1;
  gap: 8px;
`;

const PreviewCol2 = styled.View`
  flex: 0.2;
  height: 100%;
  border-left-width: 1px;
  border-left-color: #000;
`;

const PTitle = styled.Text`
  color: #838589;
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

const PText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
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

const ProductsContainer = styled.View`
  padding: 24px 24px 8px 24px;
`;

const ProductsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const HeaderPressable = styled.Pressable`
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
`;

const HeaderPressableText = styled.Text`
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const SearchDiv = styled.Pressable``;

export default function MyStore({ route }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect(() => {
    async function fetchProducts(storeId) {
      const response = await fetch(URL + `/store/${+storeId}`, {
        method: "get",
      });
      if (!response.ok) throw responseJSON.message;
      const responseJSON = await response.json();
      console.log(responseJSON, 888);
    }

    fetchProducts(1);
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Dashboard Penjual" isOwner={true} />

        <ScrollDiv style={{ marginTop: 1 }}>
          <UserContainerDiv>
            <UserContainer>
              <ProfilePict
                source={require("../../assets/profile/profile.png")}
              />

              <SectionContainer>
                <Storename>Shop Larson Electronic</Storename>
                <Username>Benedict C</Username>
              </SectionContainer>
            </UserContainer>

            <LocationContainer>
              <IconImg source={require("../../assets/icons/location.png")} />
              <Location>Jakarta, Indonesia</Location>
            </LocationContainer>

            <PreviewContainer>
              <PreviewCol>
                <PTitle>Rating</PTitle>
                <RatingContainer>
                  <RatingIcon
                    resizeMode="cover"
                    source={require("../../assets/icons/star.png")}
                  />
                  <PText>4</PText>
                </RatingContainer>
              </PreviewCol>

              <PreviewCol2 />

              <PreviewCol>
                <PTitle>Produk</PTitle>
                <PText>150 items</PText>
              </PreviewCol>

              <PreviewCol2 />

              <PreviewCol>
                <PTitle>Bergabung</PTitle>
                <PText>20 Okt 2021</PText>
              </PreviewCol>
            </PreviewContainer>
          </UserContainerDiv>

          <Separator />

          <ProductsContainer>
            <ProductsHeader>
              <HeaderTitle>Produk</HeaderTitle>
              <HeaderPressable
                onPress={() => navigation.navigate("AddProductForm")}
              >
                <HeaderPressableText>+ Tambah Produk</HeaderPressableText>
              </HeaderPressable>
            </ProductsHeader>
          </ProductsContainer>

          <SearchDiv onPress={() => navigation.navigate("SearchPage")}>
            <SearchMock />
          </SearchDiv>

          <Container2>
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <AllProductCard content={item} />}
            /> */}
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {items?.map((item, index) => (
                  <AllProductCard content={item} key={index} />
                ))}
              </View>
            </ScrollView>
          </Container2>

          <View style={{ padding: 12 }}></View>
        </ScrollDiv>
      </Container>
    );
  }
}
