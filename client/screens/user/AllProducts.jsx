import { FlatList, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import AllProductCard from "../../components/AllProductCard";
import Navbar from "../../components/Navbar";
import SearchMock from "../../components/SearchMock";

const Container = styled.View`
  margin: 0px 24px 20px 24px;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
`;

const SearchDiv = styled.Pressable``;

export default function AllProducts({ route }) {
  const { title, items } = route.params;

  return (
    <View style={{ paddingBottom: 80 }}>
      <Navbar back="back" title={title} />

      <ScrollDiv
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 1 }}
      >
        <SearchDiv onPress={() => navigation.navigate("SearchPage")}>
          <SearchMock />
        </SearchDiv>

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
        </Container>
      </ScrollDiv>
    </View>
  );
}
