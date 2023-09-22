// Checkbox.js
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ selected, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    {selected ? (
      <Ionicons name="checkbox-outline" size={24} color="#000000" />
    ) : (
      <Ionicons name="square-outline" size={24} color="#000000" />
    )}
  </TouchableOpacity>
);

export default Checkbox;
