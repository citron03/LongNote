import styled from '@emotion/native';
import {Dimensions} from 'react-native';

export const SafeAreaViewWrapper = styled.SafeAreaView`
  margin: 10px;
  gap: 30px;
`;

export const InputView = styled.View`
  gap: 10px;
`;

export const ListView = styled.View({
  height: 200,
  width: Dimensions.get('screen').width,
  margin: 50,
});

export const ItemView = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;
