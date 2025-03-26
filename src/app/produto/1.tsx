import { Text, View, Image } from "react-native";

export default function Produto() {

    type ProdutoType = {
        name: string;
        description: string;
        price: number;
        image: {uri: string};  
    };

    const produto: ProdutoType = {
        name: "Torta Especial de Maçã",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        price: 12.85,
        image: { uri: "@/assets/images/tortademaca.jpg"}
    };

    return (
        <View>
            <Text>Detalhes do produto</Text>
            <Text>{produto.name}</Text>
            <Text>{produto.description}</Text>
            <Text>{produto.price}</Text>
            <Image source={produto.image} style={styles.}/>
        </View>
    )
}