import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();
  
  const handleEmergencyPress = () => {
    Alert.alert(
      "Emergency Assistance",
      "Are you sure you want to call emergency services?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Call & Share Info", 
          onPress: () => {
            Linking.openURL('tel:911');
            Alert.alert("Emergency contacted", "Your location and medical info have been shared with responders");
          } 
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>👋 Good Morning, Mr. Silva</Text>
            <Text style={styles.date}>📅 Today: Monday, June 16</Text>
          </View>
        </View>

        {/* Main Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.medicationButton]}
            onPress={() => {navigation.navigate('MedicationReminder')}}
          >
            <MaterialIcons name="medication" size={32} color="#4A90E2" />
            <Text style={styles.actionButtonText}>Medication Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, styles.emergencyButton]}
          >
            <Ionicons name="medkit" size={32} color="#E53E3E" />
            <Text style={styles.actionButtonText}>Emergency Contacts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.appointmentButton]}
            onPress={() => {navigation.navigate('DoctorAppointments')}}
          >
            <FontAwesome5 name="calendar-check" size={32} color="#805AD5" />
            <Text style={styles.actionButtonText}>Doctor Appointments</Text>
          </TouchableOpacity>

          {/* Voice Assistant Button */}
          <TouchableOpacity 
            style={[styles.actionButton, styles.voiceAssistantButton]}
            onPress={() => {navigation.navigate('VoiceAssistantScreen')}}
          >
            <MaterialCommunityIcons name="robot-happy" size={32} color="#38B2AC" />
            <Text style={styles.actionButtonText}>Voice Assistant</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency SOS Button */}
        <View style={styles.emergencyContainer}>
          <Text style={styles.sectionTitle}>🆘 One-Touch Emergency</Text>
          <Text style={styles.emergencySubtitle}>Press in case of emergency to contact help</Text>
          
          <TouchableOpacity 
            style={styles.sosButton}
            onPress={handleEmergencyPress}
          >
            <Text style={styles.sosButtonText}>SOS</Text>
          </TouchableOpacity>
          
          <Text style={styles.emergencyNote}>
            This will call emergency services and share your location and medical history with responders
          </Text>
        </View>

        {/* Quick Medication Overview */}
        <View style={styles.medicationOverview}>
          <Text style={styles.sectionTitle}>💊 Upcoming Medications</Text>
          
          <View style={styles.medicationItem}>
            <Text style={styles.medicationName}>Paracetamol</Text>
            <Text style={styles.medicationTime}>8:00 AM</Text>
          </View>
          
          <View style={styles.medicationItem}>
            <Text style={styles.medicationName}>Atorvastatin</Text>
            <Text style={styles.medicationTime}>12:00 PM</Text>
          </View>
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Medications →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTextContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: '#718096',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  medicationButton: {
    borderTopWidth: 4,
    borderTopColor: '#4A90E2',
  },
  emergencyButton: {
    borderTopWidth: 4,
    borderTopColor: '#E53E3E',
  },
  appointmentButton: {
    borderTopWidth: 4,
    borderTopColor: '#805AD5',
  },
  voiceAssistantButton: {
    borderTopWidth: 4,
    borderTopColor: '#38B2AC',
    shadowColor: '#38B2AC',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    textAlign: 'center',
  },
  emergencyContainer: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FED7D7',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
    textAlign: 'center',
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
    textAlign: 'center',
  },
  sosButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E53E3E',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    shadowColor: '#E53E3E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  sosButtonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  emergencyNote: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
    marginTop: 8,
  },
  medicationOverview: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  medicationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  medicationName: {
    fontSize: 16,
    color: '#2D3748',
  },
  medicationTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A90E2',
  },
  viewAllButton: {
    paddingTop: 12,
    alignItems: 'flex-end',
  },
  viewAllText: {
    color: '#4A90E2',
    fontWeight: '500',
  },
});

export default HomeScreen;