import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    name: string;
    onRemove: () => void;
    onToggle: (isChecked: boolean) => void;
    isChecked: boolean; // Adicionado prop para controlar o estado de isChecked
}

export function Tarefas({ name, onRemove, onToggle, isChecked }: Props) {

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                fillColor="#5E60CE"
                iconStyle={{ borderColor: "#4EA8DE" }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={isChecked}
                onPress={(isChecked: boolean) => {
                    onToggle(isChecked);
                }}
                style={{ marginLeft: 10 }}
            />
            <Text style={[styles.name, isChecked && { textDecorationLine: 'line-through' }]}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button}
                testID="add-new-task-button"
                activeOpacity={0.7}
                onPress={onRemove}>
                <AntDesign name="delete" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}
