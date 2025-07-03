import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export default function ListScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/808devlogo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">&copy;2025 K4CP3RR0</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">If you have problems please write to us</ThemedText>
        <ThemedText type="subtitle">Email: <ExternalLink href="mailto:kacperrolinux@gmail.com" style={styles.link}>kacperrolinux@gmail.com</ExternalLink></ThemedText>
        <ThemedText type="subtitle">GitHub: <ExternalLink href="https://github.com/k4cp3rr0" style={styles.link}>k4cp3rr0</ExternalLink> </ThemedText>
        <ThemedText type="subtitle">And if you like it get us a review on Play Store it helps us a lot.</ThemedText>
        <ExternalLink
          href="https://play.google.com/store/apps/details?id=com.instagram.android"
          style={styles.link}>
          Play Store</ExternalLink>

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
    height: 200,
    width: 300,
    bottom: 5,
    left: 20,
    position: 'absolute',
  },
    link: {
    lineHeight: 30,
    fontSize: 20,
    color: '#0a7ff4',
  },
});
