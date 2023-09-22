import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
 type Props={
    name:string;
    onRemove:() => void

    }
 
export function Tarefas({name, onRemove}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
        
        <TouchableOpacity style={styles.button} 
       
        onPress={onRemove}>
          
          <AntDesign name="delete" size={24} color="#808080" />
        </TouchableOpacity>

        </View>

    )
}