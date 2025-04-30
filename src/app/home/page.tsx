import { Image, Text, TouchableOpacity, View, ScrollView, ImageSourcePropType } from 'react-native'
import { styles } from './style'  
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'


export type ProductType = {
    id: number,
    name: string,
    price: number,
    description: string,
    ingredientes: string,
    imgUrl: ImageSourcePropType
}

export default function Index(){
    const [produtos, setProdutos] = useState<ProductType[]>()

    function fetchProducts(){
        fetch("http://localhost:8080/produtos/")
        .then((res) => res.json())
        .then(data => setProdutos(data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/padaria-frente.jpg")}></Image>
            </View>
            <Text style={styles.restauranteName}>donella</Text>
            <Text style={styles.subtitle}>Canela no aroma, doçura no paladar</Text>
        
        <View style={styles.tabs}>
            {["Preferidos", "Pães Artesanais", "Doces", "Confeitaria Gourmet"].map((tab) => (
                <TouchableOpacity key={tab}>
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <ScrollView style={styles.menuList}>
        {
            produtos?.map((item) => (
                <Link href={`/produto/${item.id}`} asChild key={item.id}>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                    </View>
                    <Image source={item.imgUrl} style={styles.itemImage}/>
                </TouchableOpacity>
                </Link>
            ))
        }
        </ScrollView>
        </View>
    )
}

