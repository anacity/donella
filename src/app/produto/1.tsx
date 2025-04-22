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
  
  export default function ProductDetails() {
    type ProductType = {
      name: string;
      description: string;
      price: number;
      image: { uri: string }
    };
  
    const product: ProductType = {
      name: "Torta Especial de Maçã",
      description: "Deliciosa torta de maçã feita com ingredientes selecionados. Massa crocante, recheio suave e sabor inigualável. Perfeita para acompanhar um café ou servir como sobremesa em ocasiões especiais.",
      price: 12.85,
      image: require('@/assets/images/tortademaca.jpg')
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          
          {/* <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
          </View> */}
  
          <View style={styles.imageContainer}>
            <Image 
              source={product.image} 
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>
  
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>

          <View style={styles.priceContainer}>
              <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
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