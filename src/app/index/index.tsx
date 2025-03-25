import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { styles } from './style'  

export default function Index(){
    const MENU = [
        {
            id: 1,
            name: "Bolo de formigueiro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            price: 26.90,
            image: require("@/assets/images/bolo-formigueiro-brigadeiro.jpg")
        },
        {
            id: 2,
            name: "Pão de canela",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            price: 14.50,
            image: require("@/assets/images/paodecanela.jpg")
        },
        {
            id: 3,
            name: "Torta Especial de Maçã",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            price: 12.85,
            image: require("@/assets/images/tortademaca.jpg")          
        }
    ]



    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/padaria-frente.jpg")}></Image>
            </View>
            <Text style={styles.restauranteName}>donella</Text>
            <Text style={styles.subtitle}>Canela no aroma, doçura no paladar</Text>
        
        <View style={styles.tabs}>
            {["Preferidos", "Pães Artesanais", "Doces", "Confeitaria Gourmet"].map((tab) => (
                <TouchableOpacity>
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <ScrollView style={styles.menuList}>
        {
            MENU.map((item) => (
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                    <Image source={item.image} style={styles.itemImage}/>
                </TouchableOpacity>
            ))
        }
        </ScrollView>
        </View>
    )
}

