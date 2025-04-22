import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CadastrarScreen(){
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Criar Conta</Text>
    
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} />
    
          <Text style={styles.label}>CPF:</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
    
          <Text style={styles.label}>Data de Nascimento:</Text>
          <TextInput style={styles.input} placeholder="dd/mm/aaaa" />
    
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
    
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry />
    
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
    
          <Text style={styles.footer}>donella</Text>
        </View>
      );


}