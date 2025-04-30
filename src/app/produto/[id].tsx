import { 
    Text, 
    View, 
    Image, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity,
    SafeAreaView 
  } from "react-native";
  import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ProductType } from "../home/page";
  
  export default function ProductDetails() {
    const { id } = useLocalSearchParams()
    const[produto, setProduto] = useState<ProductType>()

    function fetchProduct(){
      fetch(`http://localhost:8080/produtos/${id}`)
      .then((res) => res.json())
      .then(data => setProduto(data))
    }

    useEffect(() => {
      fetchProduct()
    }, [])
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              source={produto?.imgUrl} 
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>
  
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{produto?.name}</Text>
            <Text style={styles.productDescription}>{produto?.description}</Text>
          </View>

          <View style={styles.priceContainer}>
              <Text style={styles.price}>R$ {produto?.price.toFixed(2)}</Text>
          </View>
  
          <View style={styles.footer}>
            
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f2f2ea',
    },
    container: {
      paddingBottom: 30,
    },
    header: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      padding: 8,
    },
    imageContainer: {
      height: 300,
      width: '100%',
    },
    productImage: {
      width: '100%',
      height: '100%',
    },
    metaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 16,
    },
    infoContainer: {
      padding: 16,
    },
    productName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    productDescription: {
      fontSize: 16,
      color: '#666',
      lineHeight: 24,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#EEE',
      marginTop: 16,
    },
    priceContainer: {
      flex: 1,
      marginLeft: 20,
    },
    price: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#6b824d',
    },
    addButton: {
      width: '60%',
      backgroundColor: '#6b824d',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 18,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 220,
    },
    addButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });