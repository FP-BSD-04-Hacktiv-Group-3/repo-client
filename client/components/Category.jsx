import styled from "styled-components/native";

const CategoryCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-right: 20px;
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
  return (
    <CategoryCard>
      <IconDiv>
        <Icon source={content?.image} />
      </IconDiv>
      <CategoryText>{content?.name}</CategoryText>
    </CategoryCard>
  );
}
