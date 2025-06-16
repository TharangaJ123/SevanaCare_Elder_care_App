import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const DoctorAppointments = () => {
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'June 20, 2023',
      time: '10:00 AM',
      location: 'City Medical Center',
      image: require('../assets/doctor1.jpeg'),
      canBook: true
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: 'June 22, 2023',
      time: '2:30 PM',
      location: 'Skin Health Clinic',
      image: require('../assets/doctor2.jpg'),
      canBook: false
    }
  ];

  const handleBookAppointment = (doctorId) => {
    // Booking logic would go here
    console.log(`Booking appointment with doctor ${doctorId}`);
  };

  const handleRequestTransport = (appointmentId) => {
    // Transport request logic would go here
    console.log(`Requesting transport for appointment ${appointmentId}`);
  };

  const handleAddToCalendar = (appointment) => {
    // Calendar integration logic would go here
    console.log(`Adding to calendar: ${appointment.date} at ${appointment.time}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>👩‍⚕️ Upcoming Appointments</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle" size={28} color="#4A90E2" />
            <Text style={styles.addButtonText}>New Appointment</Text>
          </TouchableOpacity>
        </View>

        {/* Appointments List */}
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={appointment.image} style={styles.doctorImage} />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{appointment.doctor}</Text>
                <Text style={styles.specialty}>{appointment.specialty}</Text>
              </View>
              <TouchableOpacity 
                style={styles.calendarButton}
                onPress={() => handleAddToCalendar(appointment)}
              >
                <MaterialIcons name="event" size={24} color="#4A90E2" />
              </TouchableOpacity>
            </View>

            <View style={styles.appointmentDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="calendar" size={18} color="#718096" />
                <Text style={styles.detailText}>{appointment.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="time" size={18} color="#718096" />
                <Text style={styles.detailText}>{appointment.time}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="location" size={18} color="#718096" />
                <Text style={styles.detailText}>{appointment.location}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              {appointment.canBook && (
                <TouchableOpacity 
                  style={[styles.actionButton, styles.bookButton]}
                  onPress={() => handleBookAppointment(appointment.id)}
                >
                  <Text style={styles.buttonText}>Book Follow-up</Text>
                </TouchableOpacity>
              )}
              
              <TouchableOpacity 
                style={[styles.actionButton, styles.transportButton]}
                onPress={() => handleRequestTransport(appointment.id)}
              >
                <FontAwesome name="car" size={16} color="white" />
                <Text style={styles.buttonText}> Request Transport</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Empty State */}
        {appointments.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="calendar" size={48} color="#CBD5E0" />
            <Text style={styles.emptyStateText}>No upcoming appointments</Text>
            <Text style={styles.emptyStateSubtext}>Schedule your next visit with your doctor</Text>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Find a Doctor</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
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
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D3748',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    marginLeft: 4,
    color: '#4A90E2',
    fontWeight: '500',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  specialty: {
    fontSize: 14,
    color: '#718096',
  },
  calendarButton: {
    padding: 8,
  },
  appointmentDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4A5568',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bookButton: {
    backgroundColor: '#EDF2F7',
    marginRight: 8,
  },
  transportButton: {
    backgroundColor: '#4299E1',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
    marginBottom: 24,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DoctorAppointments;