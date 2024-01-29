import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
export default function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decriment = () => {
    setCount(count - 1)
  }

  const mutply = () => {
    setCount(count * 2)
  }
  const zerar = () => {
    setCount(count * 0)
  }

  const calculoEsquisito = () => {
    setCount(count + 2 * 5 - 5 / 8 + (count -2))
  }

  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])
  return (
    <View style={styles.container}>
      <Text style={styles.textCount}> {count}</Text>
      <View style={styles.containerCount}>
        <TouchableOpacity style={styles.ButtonCounter} onPress={increment}>
          <Text style={styles.textButton} >
            Incrementar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonCounter} onPress={decriment}>
          <Text style={styles.textButton} >
            Decrementar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonCounter} onPress={mutply}>
          <Text style={styles.textButton} >
            Multiplicar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonCounter} onPress={zerar}>
          <Text style={styles.textButton}>
            Zerar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonCounter} onPress={calculoEsquisito}>
          <Text style={styles.textButton}>
            ???
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonCounter: {
    borderColor: '#9EBBF0',
    backgroundColor: '#A1C3ED',
    borderWidth: 2,
    width: 'auto',
    padding: 5,
    margin: 10,
    borderRadius: 10
  },
  containerCount:{
    margin: 5,
    borderColor: '#A1C3ED',
    backgroundColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%',
    borderRadius: 10
  },
  textCount:{
    fontSize: 50,
    color: '#EBE9EE'
  },
  textButton:{
    color: '#EBE9EE'
  }
});