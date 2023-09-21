import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
const LogoImg = require('../../assets/Logo.png');
import {styles} from "./styles"
import { Ionicons } from '@expo/vector-icons';
export function Home() {
    return (
       
        <View style={styles.container}>
        <View style={styles.black}>
        <Image source={LogoImg} style={styles.logo}  />
        </View>
        

        <View style={styles.form}>
        <TextInput style={styles.input}/>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="md-add-circle-outline" size={24} color="#FFF" />
            
        </TouchableOpacity>
       
        </View>
        </View>
        
                 
   
    );
}

