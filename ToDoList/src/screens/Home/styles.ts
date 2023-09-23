
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
      color: '#333333'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#333333',
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
      color: '#808080',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      alignItems: "center" 
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
        textAlign: 'left',
        fontSize: 14,
        color: '#1E6F9F',
        marginBottom: 10,
        fontWeight: 'bold'
      },
      totalTarefas2: {
        textAlign: 'left',
        fontSize: 14,
        
        color: '#5E60CE',
        marginBottom: 10,
        fontWeight: 'bold'
      },
      tarefaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        // Outros estilos que você deseja aplicar
      },
      
      circleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      circle: {
        width: 25, // Ajuste o tamanho do círculo conforme necessário
        height: 19, // Ajuste o tamanho do círculo conforme necessário
        borderRadius: 20, // Metade da largura/altura para fazer um círculo
        backgroundColor: '#333333', // Cor do círculo
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginBottom:9// Espaçamento entre o texto e o círculo
      },
      
      circleNumber: {
        color: '#FFF', // Cor do número dentro do círculo
        fontSize:14, // Tamanho da fonte do número
        fontWeight: 'bold', // Peso da fonte
      },
      listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:10
        // Adicione qualquer outro estilo necessário aqui
      },
      
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      paddingHorizontal: 20,
  },
  
  totalSection: {
      alignItems: 'center',
      flexDirection: 'row'
  },
  form2: {
    flexDirection: 'row', // Coloca os elementos na mesma linha
    justifyContent: 'space-between', // Distribui o espaço entre os elementos
    alignItems: 'center', // Alinha os elementos verticalmente
    marginBottom: 10,
    paddingHorizontal: 20,
  },totalTarefasCount: {
    color: 'red', // ou a cor desejada
    fontWeight: 'bold', // ou outros estilos que você desejar
  },
  
  
      
      
      
  })