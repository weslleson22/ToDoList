
import {StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName:{
      color:'#FDFCFE',
      fontSize: 24,
      fontWeight:  'bold',
      marginTop: 28
    },
    eventDate:{
      color: '#6B6B6B'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize:22,
        marginRight: 12,
        
        
    },
    buttonText:{
        color: "#FFF",
        fontSize: 24,
        
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:"#4EA8DE",
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
      width: "100%",
      flexDirection: 'row',
      marginTop:120,

      marginBottom: 42
    },
    listEmptyText:{
      color: '#6B6B6B',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold'
    }, 
    black: {
        backgroundColor: "#0D0D0D",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 173,
        alignItems: "center",
        justifyContent: "center"
      },
    logo: {
        resizeMode: "contain",
        width: 100, // Ajuste o tamanho conforme necessário
        height: 100, // Ajuste o tamanho conforme necessário
      },
      totalTarefas: {
        textAlign: 'center',
        fontSize: 16,
        color: '#1E6F9F',
        marginBottom: 10,
        fontWeight: 'bold'
      },
      tarefaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        // Outros estilos que você deseja aplicar
      }
  })