// import { Text, View, Image, StyleSheet } from "react-native";

// export default function Produto() {
//     type ProdutoType = {
//         name: string;
//         description: string;
//         price: number;
//         image: { uri: string };  
//     };

//     const produto: ProdutoType = {
//         name: "Torta Especial de Maçã",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//         price: 12.85,
//         image: require('@/assets/images/tortademaca.jpg')
//     };

//     return (
//         <View style={styles.container}>
//             <Image 
//                 source={produto.image} 
//                 style={styles.image}
//                 resizeMode="contain"
//             />
//             <Text style={styles.title}>{produto.name}</Text>
//             <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
//             <Text style={styles.about}>Sobre</Text>
//             <Text style={styles.description}>{produto.description}</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     about: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 8,
//     },
//     description: {
//         fontSize: 14,
//         marginBottom: 8,
//         color: '#666',
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'green',
//         marginBottom: 16,
//     },
//     image: {
//         width: '100%',
//         height: '45%',
//     },
// });

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
      image: { uri: string };
      rating: number;
      category: string;
    };
  
    const product: ProductType = {
      name: "Torta Especial de Maçã",
      description: "Deliciosa torta de maçã feita com ingredientes selecionados. Massa crocante, recheio suave e sabor inigualável. Perfeita para acompanhar um café ou servir como sobremesa em ocasiões especiais.",
      price: 12.85,
      image: require('@/assets/images/tortademaca.jpg'),
      rating: 4.8,
      category: "Sobremesas"
    };
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Ionicons
            key={i}
            name={i <= Math.floor(product.rating) ? "star" : "star-outline"}
            size={20}
            color={i <= product.rating ? "#FFD700" : "#C4C4C4"}
          />
        );
      }
      return <View style={styles.starContainer}>{stars}</View>;
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header com botão de voltar */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
          </View>
  
          {/* Imagem do produto */}
          <View style={styles.imageContainer}>
            <Image 
              source={product.image} 
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>
  
          {/* Categoria e avaliação */}
          <View style={styles.metaContainer}>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.ratingContainer}>
              {renderStars()}
              <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            </View>
          </View>
  
          {/* Nome e descrição do produto */}
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
  
          {/* Preço e botão de ação */}
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Preço</Text>
              <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
            </View>
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
      backgroundColor: '#FFF',
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
      paddingHorizontal: 16,
    },
    productImage: {
      width: '100%',
      height: '100%',
      borderRadius: 12,
    },
    metaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 16,
    },
    category: {
      fontSize: 14,
      color: '#666',
      backgroundColor: '#e4e5e8',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    starContainer: {
      flexDirection: 'row',
      marginRight: 4,
    },
    ratingText: {
      fontSize: 14,
      color: '#666',
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
    },
    priceLabel: {
      fontSize: 14,
      color: '#666',
    },
    price: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#6b824d',
    },
    addButton: {
      backgroundColor: '#6b824d',
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 16,
    },
    addButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });