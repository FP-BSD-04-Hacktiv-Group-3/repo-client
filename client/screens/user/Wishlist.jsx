import { FlatList, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import AllProductCard from "../../components/AllProductCard";
import Loading from "../../components/Loading";
import axios from "axios";
import { APP_API_URL } from "../../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { useEffect, useState } from "react";
import ItemNotFound from "../../components/ItemNotFound";

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

  const [user, setUser] = useState("");
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const savedUser = await AsyncStorage.getItem("user");
      setUser(JSON.parse(savedUser));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchWishlist() {
      const data = await axios({
        method: "GET",
        url: `${APP_API_URL}/wishlist/${user?.id}`,
      });
      setWishlists(data?.data);
    }

    fetchWishlist();
  }, [user]);

  if (!fontsLoaded) {
    return <Loading />;
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
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <AllProductCard content={item} />}
            /> */}

            <ScrollView>
              {Array.isArray(wishlists) && wishlists?.length > 0 ? (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {wishlists?.map((item, index) => (
                    <AllProductCard content={item} key={index} />
                  ))}
                </View>
              ) : (
                <ItemNotFound
                  image={require("../../assets/vector/pnf.png")}
                  title="Produk tidak ditemukan"
                  subtitle="Coba cari kata lain untuk mencari produk yang kamu inginkan"
                />
              )}
            </ScrollView>
          </Container>
        </ScrollDiv>
      </View>
    );
  }
}
