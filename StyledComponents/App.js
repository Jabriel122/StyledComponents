import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Container, ContainerCount, ContainerIncDec } from './src/components/Container/Container';
import { ButtonCounterAdd, ButtonCounterLess } from './src/components/Button/Button';
import { TextButton, TextCount } from './src/components/Text/Text';
import { ImagemLogo } from './src/components/Image/Image';
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
    setCount(count + 2 * 5 - 5 / 8 + (count - 2))
  }

  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])
  return (
    <Container>
      <ImagemLogo source={require('./src/assets/RelogioRomano-menor.png')} />
      <TextCount> {count} </TextCount>
      <ContainerCount>
        <ContainerIncDec>
          <ButtonCounterAdd onPress={increment}>
            <TextButton>
              Incrementar
            </TextButton>
          </ButtonCounterAdd>
          <ButtonCounterLess onPress={decriment}>
            <TextButton >
              Decrementar
            </TextButton>
          </ButtonCounterLess>
        </ContainerIncDec>

        <ButtonCounterAdd onPress={mutply}>
          <TextButton >
            Multiplicar
          </TextButton>
        </ButtonCounterAdd>
        <ButtonCounterAdd onPress={zerar}>
          <TextButton>
            Zerar
          </TextButton>
        </ButtonCounterAdd>
        <ButtonCounterAdd onPress={calculoEsquisito}>
          <TextButton>
            ???
          </TextButton>
        </ButtonCounterAdd>
      </ContainerCount>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  textCount: {
    fontSize: 50,
    color: '#EBE9EE'
  },
  textButton: {
    color: '#EBE9EE'
  }
});