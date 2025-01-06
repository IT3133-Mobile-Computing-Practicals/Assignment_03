import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { subjects, marks, courses } from '../database/StudentDb'; // Ensure this file exists and exports subjects and marks

const { width } = Dimensions.get('window');

const SubjectTab = ({ route }) => {
  const { userId } = route.params; // Get userId from route params

  const course = courses.find(course => course.id === userId);

  // Get the subjects and marks associated with the userId
  const userMarks = marks.filter(mark => mark.student_id === userId);
  const userSubjects = userMarks.map(mark => {
    const subject = subjects.find(subject => subject.id === mark.subject_id);
    return subject ? { ...subject, marks: mark.marks } : null;
  }).filter(subject => subject !== null);

  // Calculate subject count and average marks
  const subjectCount = userSubjects.length;
  const averageMarks = (userSubjects.reduce((sum, subject) => sum + subject.marks, 0) / subjectCount).toFixed(2);

  // Handle case where no subjects are found
  if (subjectCount === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No subjects found for this student!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Course Name and Summary */}
      <Text style={styles.courseName}>{course.name}</Text>
      <View style={styles.row}>
        <Text style={styles.text}>({subjectCount}) Subjects</Text>
        <Text style={styles.text}> | Average: {averageMarks}</Text>
      </View>

      {/* Marks Information */}
      <Text style={styles.sectionTitle}>Mark Information</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Subject Name</Text>
        <Text style={styles.tableHeaderText}>Marks</Text>
      </View>
      {userSubjects.map((subject, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{subject.name}</Text>
          <Text style={styles.tableCell}>{subject.marks}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  courseName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
    fontSize: 20,
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableCell: {
    fontSize: 16,
    width: width * 0.4,
  },
});

export default SubjectTab;
