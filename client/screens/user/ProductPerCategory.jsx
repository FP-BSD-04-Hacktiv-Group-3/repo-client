import { FlatList, ScrollView, View, Text } from "react-native";
import styled from "styled-components/native";
import AllProductCard from "../../components/AllProductCard";
import Navbar from "../../components/Navbar";
import SearchMock from "../../components/SearchMock";
import axios from "axios";
import { APP_API_URL } from "../../config/api";
import { useEffect, useState } from "react";

const Container = styled.View`
  margin: 0px 24px 20px 24px;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const SearchDiv = styled.Pressable``;

export default function ProductPerCategory({ route }) {
  const { category, id } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct(categoryId) {
      const { data } = await axios({
        method: "GET",
        url: `${APP_API_URL}/product?category=${categoryId}`,
      });
      // console.log(data, 123123123);
      setProducts(data);
    }

    fetchProduct(id);
  }, [id]);

  return (
    <View style={{ paddingBottom: 80 }}>
      <Navbar back="back" title={category} />

      <ScrollDiv
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 1, height: "100%" }}
      >
        <SearchDiv onPress={() => navigation.navigate("SearchPage")}>
          <SearchMock />
        </SearchDiv>

        <Container style={{ height: "100%" }}>
          {/* <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <AllProductCard content={item} />}
          /> */}

          <ScrollView style={{ height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              {Array.isArray(products) &&
                products?.map((item, index) => (
                  <AllProductCard content={item} key={index} />
                ))}
            </View>
          </ScrollView>
        </Container>
      </ScrollDiv>
    </View>
  );
}
