import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MedicationReminder from './components/MedicationReminder';
import HomeScreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorAppointments from './components/DoctorAppointment';
import VoiceAssistantScreen from './components/VoiceAssistantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen 
          name="MedicationReminder" 
          component={MedicationReminder} 
          options={{ title: 'Medication Reminder' }} 
        />
        <Stack.Screen 
          name="DoctorAppointments" 
          component={DoctorAppointments} 
          options={{ title: 'Doctor Appointments' }} 
        />
        <Stack.Screen 
          name="VoiceAssistantScreen" 
          component={VoiceAssistantScreen} 
          options={{ title: 'Voice Assistant Screen' }} 
        />
      </Stack.Navigator>
      <StatusBar style="auto" />  

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
