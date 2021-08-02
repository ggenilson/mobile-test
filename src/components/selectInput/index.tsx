import React, { FC } from 'react';
import { Picker } from '@react-native-community/picker';
import { SelectInputType } from './types';

const SelectInput: FC<SelectInputType> = ({
  data,
  style,
  placeholder,
  onValueChange = () => {},
  ...rest
}) => {
  return (
    <Picker
      {...rest}
      style={style}
      onValueChange={(itemValue, itemIndex) =>
        onValueChange(itemValue, itemIndex - 1)
      }
    >
      <Picker.Item label={placeholder} value="" />
      {data.map(({ value, label }, index) => (
        <Picker.Item
          key={`select-input-${index}`}
          label={label}
          value={value}
        />
      ))}
    </Picker>
  );
};

export default SelectInput;
