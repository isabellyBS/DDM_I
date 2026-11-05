import { View, Text, FlatList, StyleSheet } from 'react-native';
//import { useState } from 'react';

import styles from './Estilo';
// import { /*realizarCalculo*/Home } from './Funcoe';


export default function Home({ navigation }) {

    const usuarios = [
        { id: 1, nome: 'A Princesa e o Queijo Quente'},
        { id: 2, nome: 'Turma da Mônica'},
        { id: 3, nome: 'Memórias de Martha'},
        { id: 4, nome: 'Revolução dos Bichos'},
        { id: 5, nome: 'Radio Silêncio'},
        { id: 6, nome: 'Os Lusíadas'},
        { id: 7, nome: 'Os sete Maridos de Evelyn Hugo'},
        { id: 8, nome: 'Iracema'},
        { id: 9, nome: 'Scott Pilgrim'},
        { id: 10, nome: 'O Jardim Secreto'},
        { id: 11, nome: 'Conectadas'},
        { id: 12, nome: 'Lua de Larvas'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>Lista de livros:</Text>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nome}>{item.nome}</Text>
                    </View>
                )}
            />
        </View>
    );
}

// export default function Home() {
//     const [numero1, setNumero1] = useState('');
//     const [numero2, setNumero2] = useState('');
//     const [operacao, setOperacao] = useState('+');
//     const [resultado, setResultado] = useState('');

//     return (
//         <View style={styles.container}>

//             <Text style={styles.titulo}>
//                 Calculadora
//             </Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder="Digite o primeiro número"
//                 keyboardType="numeric"
//                 value={numero1}
//                 onChangeText={setNumero1}
//             />

//             <TextInput
//                 style={styles.input}
//                 placeholder="Digite o segundo número"
//                 keyboardType="numeric"
//                 value={numero2}
//                 onChangeText={setNumero2}
//             />  

//             <View style={styles.operacoes}>

//                 <TouchableOpacity
//                     style={styles.botao}
//                     onPress={() => setOperacao('+')}
//                 >
//                     <Text style={styles.textoBotao}>+</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.botao}
//                     onPress={() => setOperacao('-')}
//                 >
                    
//                     <Text style={styles.textoBotao}>-</Text>
//                 </TouchableOpacity>
// <TouchableOpacity
// style={styles.botao}
// onPress={() => setOperacao('*')}
// >
// <Text style={styles.textoBotao}>×</Text>
// </TouchableOpacity>
// <TouchableOpacity
// style={styles.botao}
// onPress={() => setOperacao('/')}
// >
// <Text style={styles.textoBotao}>÷</Text>
// </TouchableOpacity>
// </View>
// <Text style={styles.operacaoSelecionada}>
// Operação: {operacao}
// </Text>
// <TouchableOpacity
// style={styles.botaoCalcular}
// onPress={() =>
// realizarCalculo(
// numero1,
// numero2,
// operacao,
// setResultado
// )
// }
// >
// <Text style={styles.textoCalcular}>
// Calcular
// </Text>
// </TouchableOpacity>
// <Text style={styles.resultado}>
// Resultado: {resultado}
// </Text>

// </View>
// );
// }