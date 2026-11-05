export default function Home({ navigation }) {

    const usuarios = [
        { id: 1, nome: 'João'},
        { id: 2, nome: 'Maria'},
        { id: 3, nome: 'Pedro'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>Lista de usuários:</Text>

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

export function realizarCalculo( numero1, numero2, operacao, setResultado) {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

switch (operacao) {
    case '+':
        setResultado(n1 + n2);
        break;

    case '-':
        setResultado(n1 - n2);
        break;

    case '*':
        setResultado(n1 * n2);
        break;

    case '/':
        setResultado(n1 / n2);
        break;

    default:
        setResultado('Operaçãoinválida');
    }
}