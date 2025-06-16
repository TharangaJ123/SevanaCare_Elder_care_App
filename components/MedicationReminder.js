import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MedicationReminder = () => {
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

        {/* Upcoming Medications Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🕒 Upcoming Medications</Text>
        </View>

        {/* Medication Cards */}
        <View style={styles.medicationCard}>
          <View style={styles.medicationHeader}>
            <Text style={styles.medicationName}>💊 Paracetamol</Text>
          </View>
          <Text style={styles.medicationDetails}>Dose: 500mg</Text>
          <Text style={styles.medicationDetails}>Time: 8:00 AM</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.takenButton]}>
              <Text style={styles.buttonText}>✓ Taken</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.skipButton]}>
              <Text style={styles.buttonText}>⏭ Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.medicationCard}>
          <View style={styles.medicationHeader}>
            <Text style={styles.medicationName}>💊 Atorvastatin</Text>
          </View>
          <Text style={styles.medicationDetails}>Dose: 10mg</Text>
          <Text style={styles.medicationDetails}>Time: 12:00 PM</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.takenButton]}>
              <Text style={styles.buttonText}>✓ Taken</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.skipButton]}>
              <Text style={styles.buttonText}>⏭ Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.medicationCard}>
          <View style={styles.medicationHeader}>
            <Text style={styles.medicationName}>💊 Metformin</Text>
          </View>
          <Text style={styles.medicationDetails}>Dose: 1000mg</Text>
          <Text style={styles.medicationDetails}>Time: 8:00 PM</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.takenButton]}>
              <Text style={styles.buttonText}>✓ Taken</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.skipButton]}>
              <Text style={styles.buttonText}>⏭ Skip</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Compliance Section */}
        <View style={styles.complianceContainer}>
          <Text style={styles.sectionTitle}>📈 Weekly Compliance Summary</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '71%' }]} />
          </View>
          <Text style={styles.complianceText}>5/7 Days Followed</Text>
        </View>

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="calendar" size={20} color="#4A90E2" />
            <Text style={styles.footerButtonText}>View Full Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Ionicons name="add-circle" size={20} color="#4A90E2" />
            <Text style={styles.footerButtonText}>Add New Reminder</Text>
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
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  medicationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  medicationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  medicationDetails: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  takenButton: {
    backgroundColor: '#48BB78',
  },
  skipButton: {
    backgroundColor: '#E53E3E',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  complianceContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
  complianceText: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#EDF2F7',
  },
  footerButtonText: {
    marginLeft: 8,
    color: '#4A90E2',
    fontWeight: '500',
  },
});

export default MedicationReminder;