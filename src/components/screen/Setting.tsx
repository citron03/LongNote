import React from 'react';
import {Button} from 'react-native-paper';
import {useColorStore} from '../../stores/color';
import {pasteltoneHex} from 'colors-helper-tools';
import styled from '@emotion/native';

const WrapperView = styled.SafeAreaView`
  margin: 30px;
`;

const Settings = () => {
  const setColor = useColorStore(state => state.setColor);

  const handlePress = () => {
    const randomColor = pasteltoneHex();
    setColor(randomColor);
  };

  return (
    <WrapperView>
      <Button onPress={handlePress}>Set Random Color</Button>
    </WrapperView>
  );
};

export default Settings;
