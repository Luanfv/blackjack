import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ICard {
  background?: 'white' | 'gray';
}

export const Body = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background: ${({ theme }) => theme.colors.green};
`;

export const SwiperContainer = styled.View`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View<ICard>`
  position: relative;
  width: 160px;
  height: 250px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, background = 'white' }) =>
    theme.colors[background]};
  border-radius: 6px;
  overflow: hidden;
`;

export const CardIconCenter = styled.Text`
  font-size: 40px;
`;

export const CardIconTop = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
`;

export const CardIconBottom = styled.Text`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
`;

export const PointsText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  text-align: center;
`;

export const Icon = styled(AntDesign)`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  left: 50%;
  right: 50%;
  bottom: 50%;
  top: 50%;
`;
