import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

// const CategoryCard = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 6px;
//   margin-right: 20px;
// `;

const CategoryCard = styled.Pressable`
  border: 1px solid #c4c5c4;
  padding: 6px 20px;
  border-radius: 100px;
  margin-right: 10px;
  margin-top: 4px;
`;

const CategoryText = styled.Text``;

const IconDiv = styled.View`
  width: 64px;
  height: 64px;
`;

const Icon = styled.Image`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  resize-mode: cover;
`;

export default function Category({ content }) {
  const navigation = useNavigation();

  return (
    <CategoryCard
      onPress={() =>
        navigation.navigate("ProductPerCategory", {
          category: content?.name,
          id: content?.id,
        })
      }
    >
      {/* <IconDiv>
        <Icon source={content?.image} />
      </IconDiv> */}
      <CategoryText>{content?.name}</CategoryText>
    </CategoryCard>
  );
}
