import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import * as Speech from 'expo-speech';
import { useEffect, useState, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function VoiceAssistantScreen() {
  const [isActive, setIsActive] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [responseText, setResponseText] = useState('Tap the mic to speak');

  // Pulse animation
  useEffect(() => {
    if (isActive) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isActive]);

  const handlePress = () => {
    setIsActive(true);
    setResponseText('Listening...');
    
    const thingToSay = 'Hi Tharanga, how are you doing today?';
    
    Speech.speak(thingToSay, {
      onStart: () => {
        setResponseText('Assistant is speaking...');
      },
      onDone: () => {
        setIsActive(false);
        setResponseText('Tap the mic to speak again');
      },
      onError: () => {
        setIsActive(false);
        setResponseText('Error occurred. Try again.');
      },
      rate: 0.9,
      pitch: 1.1,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Assistant</Text>
      
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>{responseText}</Text>
      </View>
      
      <Animated.View style={[styles.circle, { transform: [{ scale: pulseAnim }] }]}>
        <TouchableOpacity 
          style={[styles.micButton, isActive && styles.activeButton]}
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <MaterialIcons 
            name={isActive ? "mic" : "mic-none"} 
            size={36} 
            color={isActive ? "#FFFFFF" : "#5E5CE6"} 
          />
        </TouchableOpacity>
      </Animated.View>
      
      <View style={styles.waveContainer}>
        {[...Array(5)].map((_, i) => (
          <Animated.View
            key={i}
            style={[
              styles.waveBar,
              isActive && {
                height: Math.random() * 30 + 10,
                backgroundColor: '#5E5CE6',
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 48,
    fontFamily: 'System',
  },
  responseContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
    width: '100%',
    minHeight: 80,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  responseText: {
    fontSize: 18,
    color: '#3A3A3C',
    textAlign: 'center',
    fontWeight: '500',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(94, 92, 230, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5E5CE6',
    shadowColor: '#5E5CE6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  activeButton: {
    backgroundColor: '#5E5CE6',
    borderColor: '#5E5CE6',
  },
  waveContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50,
    justifyContent: 'center',
  },
  waveBar: {
    width: 6,
    height: 5,
    backgroundColor: '#E5E5EA',
    marginHorizontal: 4,
    borderRadius: 3,
  },
});