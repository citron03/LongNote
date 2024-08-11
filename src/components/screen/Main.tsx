import {FlashList} from '@shopify/flash-list';
import React, {useState} from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useColorStore} from '../../stores/color';

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
    <SafeAreaView>
      <Text variant="displayMedium">Hello LongNote !</Text>
      <View>
        <TextInput
          placeholder="type text !"
          value={inputText}
          onChangeText={handleOnChangeInputText}
        />
        <Button icon="camera" mode="outlined" onPress={handlePressText}>
          Press me
        </Button>
      </View>
      <View style={{height: 200, width: Dimensions.get('screen').width}}>
        <FlashList
          renderItem={({item, index}) => {
            return (
              <Text variant="labelLarge" selectionColor={color}>{`${
                index + 1
              }. ${item}`}</Text>
            );
          }}
          estimatedItemSize={200}
          data={memoList}
        />
      </View>
    </SafeAreaView>
  );
}
