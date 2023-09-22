import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, Image, ScrollView } from "react-native";
const LogoImg = require('../../assets/Logo.png');
const Clipboard = require('../../assets/Clipboard.png')
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { Tarefas } from "../../components/Tarefas";
export function Home() {
    const [tarefas, setTarefas]=useState<string[]>([]);
    const [tarefasName, setTarefasName]=useState("");
    function handleTarefasAdd() {
        if(tarefas.includes(tarefasName)){
          return Alert.alert("Tarefa existe!","Já existe uma tarefa com esse nome")
        }
        setTarefas(prevState => [...prevState, tarefasName]);
        setTarefasName("");
        
      }
      
  
    function handleTarefasRemove(name: string) {
      return Alert.alert("Remover", `Remover Tarefa ${name}?`,[
      {
        text: "Sim",
        onPress:()=>setTarefas(prevState=>prevState.filter(participants=>participants!==name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
      console.log(`removendo ${name}`);
  
  
  
    }
   
    return (
        <View style={styles.container}>
        <View style={styles.black}>
        <Image source={LogoImg} style={styles.logo}  />
        </View>
          <View style={styles.form}>
          
            <TextInput
              style={styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#6B6B6B"
              onChangeText={setTarefasName}
              value={tarefasName}
            />
            <TouchableOpacity style={styles.button} onPress={handleTarefasAdd}>
              <Ionicons name="md-add-circle-outline" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
      
          <Text style={styles.totalTarefas}>Criadas: {tarefas.length}</Text>
      
          <FlatList
            data={tarefas}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Tarefas key={item} name={item} onRemove={() => handleTarefasRemove(item)} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                <Text style={{ color: '#333333', textAlign: 'center' }}>
                  _________________________________________________________
                </Text>
                {'\n'}
                {'\n'}
                <Image source={Clipboard} />
                {'\n'}
                {'\n'}
                {'\n'}
                Você ainda não tem Tarefas Cadastradas
                <Text style={{ fontWeight: 'normal' }}>
                  {'\n'}
                  Crie Tarefas e organize seus itens a fazer
                </Text>
              </Text>
            )}
          />
        </View>
      );
}

