import styled from "styled-components/native";

const BannerImage = styled.Image`
  resize-mode: contain;
  margin-right: 10px;
`;

export default function Banner({ content }) {
  return <BannerImage source={content?.image} />;
}
