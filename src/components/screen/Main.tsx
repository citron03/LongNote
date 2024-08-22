import {FlashList} from '@shopify/flash-list';
import React, {ComponentProps, useState} from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useColorStore} from '../../stores/color';
import styled from '@emotion/native';

const DATA = ['First !!', '2nd ㅠㅠ'];

const ListView = styled.View({
  height: 200,
  width: Dimensions.get('screen').width,
});

const ButtonColor = styled.Button<
  ComponentProps<typeof Button> & {color?: string}
>`
  background-color: ${props => `${props.color}}`};
`;

export default function Main() {
  const [inputText, setInputText] = useState('');
  const [memoList, setMemoList] = useState<string[]>(DATA);
  const color = useColorStore(state => state.color);

  const handleOnChangeInputText = (text: string) => {
    setInputText(text);
  };
  const handlePressText = () => {
    setMemoList(prev => [...prev, inputText]);
    setInputText('');
  };

  return (
    <SafeAreaView>
      <Text variant="displayMedium">Hello LongNote !</Text>
      <View>
        <TextInput
          placeholder="type text !"
          value={inputText}
          onChangeText={handleOnChangeInputText}
        />
        <ButtonColor
          color={color}
          icon="camera"
          mode="outlined"
          onPress={handlePressText}
          title="add">
          Press me
        </ButtonColor>
      </View>
      <ListView>
        <FlashList
          renderItem={({item, index}) => {
            return <Text variant="labelLarge">{`${index + 1}. ${item}`}</Text>;
          }}
          estimatedItemSize={200}
          data={memoList}
        />
      </ListView>
    </SafeAreaView>
  );
}
