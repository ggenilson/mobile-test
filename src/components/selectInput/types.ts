import { StyleProp, TextStyle } from 'react-native';

type ItemValue = string | number;

export type DataType = {
  label: string;
  value: ItemValue;
};

export type SelectInputType = {
  data: DataType[];
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  id?: string;
  name?: string;
  selectedValue?: string;
  onValueChange?: (itemValue: ItemValue, itemIndex: number) => void;
};
