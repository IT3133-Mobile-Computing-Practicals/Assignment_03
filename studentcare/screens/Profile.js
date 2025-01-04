import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { students } from '../database/StudentDb'; // Ensure this file exists and exports an array of students

const ProfileTab = () => {
  // Check if `students` exists and has data
  if (!students || students.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No student data found!</Text>
      </View>
    );
  }

  // Assuming we load the first student for demonstration
  const student = students[0];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      nestedScrollEnabled={true} // Ensures proper scrolling in nested ScrollView
    >
      {/* Profile Picture */}
      <Image source={student.profile_pic} style={styles.profilePic} />

      {/* Name */}
      <Text style={styles.name}>{student.name}</Text>

      {/* Age and Gender */}
      <View style={styles.row}>
        <Text style={styles.text}>Age: {student.age}</Text>
        <Text style={styles.text}> | Gender: {student.gender}</Text>
      </View>

      {/* Contact Information */}
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <Text style={styles.text}>Email: {student.email}</Text>
      <Text style={styles.text}>Phone: {student.phone}</Text>
      <Text style={styles.text}>Address: {student.address}</Text>

      {/* Biological Information */}
      <Text style={styles.sectionTitle}>Biological Information</Text>
      <Text style={styles.text}>Gender: {student.gender}</Text>
      <Text style={styles.text}>Age: {student.age}</Text>
      <Text style={styles.text}>Blood Group: {student.blood_group}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures content takes enough space for scrolling
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProfileTab;
