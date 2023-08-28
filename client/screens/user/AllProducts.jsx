import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import AllProductCard from "../../components/AllProductCard";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

const Container = styled.View`
  margin: 0px 24px 20px 24px;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
`;

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
        <Search />

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
