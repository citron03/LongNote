import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {useColorStore} from '../../stores/color';
import {
  SafeAreaViewWrapper,
  InputView,
  ItemView,
  ListView,
} from './Main.styled';

const DATA = ['First !!', '2nd ㅠㅠ'];

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
    <SafeAreaViewWrapper>
      <Text variant="displayMedium">Welcome LongNote 👻</Text>
      <InputView>
        <TextInput
          placeholder="type text !"
          value={inputText}
          onChangeText={handleOnChangeInputText}
        />
        <Button
          buttonColor={color}
          icon="camera"
          textColor="#000"
          mode="outlined"
          onPress={handlePressText}>
          Press me
        </Button>
      </InputView>
      <ListView>
        <FlashList
          renderItem={({item, index}) => {
            return (
              <ItemView>
                <Text variant="bodyMedium">{`${index + 1}. ${item}`}</Text>
              </ItemView>
            );
          }}
          estimatedItemSize={200}
          data={memoList}
        />
      </ListView>
    </SafeAreaViewWrapper>
  );
}
