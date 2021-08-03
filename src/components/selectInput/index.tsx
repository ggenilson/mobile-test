import React, { FC } from "react";
import { SelectInputType } from "./types";
import { Picker } from "@react-native-community/picker";
// import ModalDropdown from "react-native-modal-dropdown";
// import {Picker}  from '@react-native-picker/picker';

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

const SelectInput: FC<SelectInputType> = ({
  data,
  style,
  placeholder,
  selectedValue,
  onValueChange = () => {},
  ...rest
}) => (
  <Picker
    {...rest}
    selectedValue={selectedValue}
    style={style}
    onValueChange={(itemValue, itemIndex) =>
      onValueChange(itemValue, itemIndex - 1)
    }
  >
    <Picker.Item label={placeholder} value="" />
    {data?.map(({ value, label }, index) => (
      <Picker.Item key={`${label}-${index}`} label={label} value={value} />
    ))}
  </Picker>
);

export default SelectInput;
