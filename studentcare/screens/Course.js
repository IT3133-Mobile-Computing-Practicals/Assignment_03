import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { courses } from '../database/StudentDb'; // Ensure this file exists and exports an array of courses

import Footer from '../components/Footer';
const { width, height } = Dimensions.get('window');

const CourseTab = ({ route }) => {
  const { userId } = route.params; // Get userId from route params

  // Find the course associated with the userId (assuming course_id links to courses)
  const course = courses.find(course => course.id === userId);

  // Handle case where course is not found
  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Course not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Course Name */}
      <Image
        source={require('../assets/uovlogo.png')}
        style={styles.logo}
        resizeMode="contain" // Ensure the image fits within the screen while maintaining aspect ratio
      />
      <Text style={styles.courseName}>{course.name}</Text>

      {/* Code and Department */}
      <View style={styles.row}>
        <Text style={styles.text}>Code: {course.course_code}</Text>
        <Text style={styles.text}> | Dept: {course.department}</Text>
      </View>

      {/* Course Information */}
      <Text style={styles.sectionTitle}>Course Information</Text>
      <Text style={styles.text}>Code: {course.course_code}</Text>
      <Text style={styles.text}>Department: {course.department}</Text>
      <Text style={styles.text}>Duration: {course.duration}</Text>
      <Text style={styles.text}>Description: {course.description}</Text>

     
          <Footer/>
      

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
  logo: {
    width: width * 0.8,  
    height: height * 0.25, 
    marginBottom: 20,
  },
});

export default CourseTab;
