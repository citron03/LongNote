import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useColorStore} from '../../stores/color';
import {getRandomColorHex} from 'colors-helper-tools';

const Settings = () => {
  const setColor = useColorStore(state => state.setColor);

  const handlePress = () => {
    // TODO: fix colors-helper-tools in non node.js environment
    // const randomColor = getRandomColorHex();
    setColor(randomColor);
  };

  return (
    <View>
      <Text>Settings</Text>
      <Button onPress={handlePress}>Set Random Color</Button>
    </View>
  );
};

export default Settings;
