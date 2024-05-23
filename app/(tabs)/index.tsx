import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre o que é essa pagína?</ThemedText>
        <ThemedText>
          Essa pagína é um simulado do professor Grazziane que tem como objetivo verificar as habilidades adiquiridas nas aulas,
          mostrando que o aluno possui a capacidade de programar um aplicativo na qual possa acessar a camera do celular e acessar fotos na galeria.
          Veja mais a seguir:
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Camera</ThemedText>
        <ThemedText>
          Ao clicar na área da camera você tera que inicialmente dar a permição da camera, logo após da-lá, 
          a camera ira aparecer inicialmente na traseira, e havera um botão para trocar a camera para a frontal.
          Pode ir alternando livremente e ver tudo pela aplicativo.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Galeria</ThemedText>
        <ThemedText>
         Ao clicar na área da galeria, você terá de dar permissão para que o aplicativo acesse suas fotos.
         Após dado a permissão começara a aparecer suas fotos na qual você possui na galeria, você podera visualizar livremente.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
