import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function LoginScreen(){
    function handleLogin(){
        router.replace("/home/page")
    }
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
    
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
    
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry />
    
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
    
          <Text style={styles.registerText}>
            É novo por aqui?{' '}
            <Link href={"./cadastrar/page"} style={styles.link}> Crie uma conta</Link>
          </Text>
    
          <Text style={styles.footer}>donella</Text>
        </View>
      );
    
}