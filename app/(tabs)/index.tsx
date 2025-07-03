import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/jdm-logo.png')}
          style={styles.jdmLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">You can find here info about well known Japanese Domestic Market cars but about 1 of 1 versions too.</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Checkout list of all cars or search it with filters in search option. </ThemedText>
          <ThemedText type='subtitle'>Below you can find list of updates which cars are added</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Updates:</ThemedText>
        <ThemedText>1. Added Toyota Supra MK4</ThemedText>
        <ThemedText>2. Added Nissan Skyline GT-R R34</ThemedText>
        <ThemedText>3. Added Honda NSX Type R</ThemedText>
        <ThemedText>4. Added Mazda RX-7 FD3S</ThemedText>
        <ThemedText>5. Added Mitsubishi Lancer Evolution VI</ThemedText>
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
  jdmLogo: {
    height: 178,
    width: 300,
    bottom: 5,
    left: 60,
    position: 'absolute',
    alignContent: 'center',
  },
});
