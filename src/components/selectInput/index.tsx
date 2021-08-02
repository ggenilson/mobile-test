import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { SelectInputType } from './types';
import { Picker } from '@react-native-community/picker';

const SelectInput: FC<SelectInputType> = ({
  data,
  style,
  placeholder,
  onValueChange = () => {},
  ...rest
}) => (
  <Picker
    {...rest}
    style={style}
    onValueChange={(itemValue, itemIndex) =>
      onValueChange(itemValue, itemIndex - 1)
    }
  >
    <Picker.Item label={placeholder} value="" />
    {data.map(({ value, label }) => (
      <Picker.Item key={uuid()} label={label} value={value} />
    ))}
  </Picker>
);

export default SelectInput;
