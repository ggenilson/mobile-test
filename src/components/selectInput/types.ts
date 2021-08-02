import { StyleProp, TextStyle } from 'react-native';

export type DataType = {
  label: string;
  value: string | number;
};

type ItemValue = string | number;

export type SelectInputType = {
  data: DataType[];
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  onValueChange?: (itemValue: ItemValue, itemIndex: number) => void;
};
