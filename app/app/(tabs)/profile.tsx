import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen() {
  const savedCourses = [
    {
      id: 1,
      title: "Product Design",
      teacher: "Dennis Sweeney",
      price: "$190",
      rating: 4.5,
      lessons: 12,
      image: { uri: "https://cdn.dribbble.com/users/108183/screenshots/16068991/media/7b2d7b9a595ae054ab3b1a6df6488a88.png" },
    },
    {
      id: 2,
      title: "Website Design",
      teacher: "Ramono Wultschner",
      price: "$59",
      rating: 4.5,
      lessons: 12,
      image: { uri: "https://cdn.dribbble.com/userupload/5084039/file/original-441e8d2989c79f6b15635b8916d54129.png" },
    },
    {
      id: 3,
      title: "Mobile UI Design",
      teacher: "Ramono Wultschner",
      price: "$320",
      rating: 4.5,
      lessons: 12,
      image: { uri: "https://cdn.dribbble.com/users/285475/screenshots/16836731/media/ce2dcad0c6bb3a3fbbf574b55c2a2e5f.png" },
    },
    {
      id: 4,
      title: "Digital Portrait",
      teacher: "Ramono Wultschner",
      price: "$67",
      rating: 4.5,
      lessons: 12,
      image: { uri: "https://cdn.dribbble.com/users/44577/screenshots/17104135/media/9fa5e0897d8f843c468a9d97932b8b7c.png" },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.header}>User's profile</Text>

        {/* Cover + Avatar */}
        <View style={styles.coverContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60",
            }}
            style={styles.avatar}
          />
        </View>

        {/* User info */}
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Martha Rosie</Text>
          <Text style={styles.job}>UX/UI Designer</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Save</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>On Going</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>98</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        {/* Saved Courses */}
        <Text style={styles.sectionTitle}>Saved courses</Text>

        {savedCourses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image source={course.image} style={styles.courseImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseTeacher}>{course.teacher}</Text>
              <Text style={styles.coursePrice}>{course.price}</Text>
              <View style={styles.courseMeta}>
                <Text style={styles.courseMetaText}>⭐ {course.rating}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.courseMetaText}>
                  {course.lessons} lessons
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.bookmark}>🔖</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  coverContainer: {
    width: "100%",
    height: 140,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    bottom: -40,
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  job: {
    color: "gray",
    fontSize: 14,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
  },
  statLabel: {
    color: "gray",
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  courseImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  courseTeacher: {
    color: "gray",
    fontSize: 13,
    marginTop: 2,
  },
  coursePrice: {
    color: "#00BFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 3,
  },
  courseMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  courseMetaText: {
    color: "gray",
    fontSize: 12,
  },
  dot: {
    marginHorizontal: 5,
    color: "gray",
  },
  bookmark: {
    fontSize: 20,
    color: "#00BFFF",
  },
});
