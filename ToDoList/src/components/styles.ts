import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor:"#333333",
        borderRadius: 5,
        flexDirection: 'row',
        alignItemse:  'center',
        marginBottom: 10,
        
    },
    name:{
        flex:1,
        fontSize: 16,
        color: "#FFF",
        
        marginTop: 16
        
    },
    buttonText:{
        color: "#FFF",
        fontSize: 24,
        
    },
    button:{
        width: 56,
        height: 56,
        marginRight: 4,
        borderRadius: 5,
     
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginRight: 10, // Espaçamento entre o ícone e o nome
      },
      
      selectedName: {
        textDecorationLine: 'line-through',
        color: 'red', // Adicione qualquer estilo adicional desejado para o texto tachado
      },
      concluida: {
        textDecorationLine: 'line-through',
        color: 'green', // Ou outra cor de sua escolha
        // Outros estilos para tarefas concluídas
      },
      concluidaButton: {
        // Estilos específicos do botão de marcar como concluído
      },
      listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // Adicione qualquer outro estilo necessário aqui
      },
      checkBox:{
        width: 56,
        height: 56,
        marginRight: 4,
        borderRadius: 5,
     
        alignItems: 'center',
        justifyContent: 'center'
      },
      
      
      
    

});