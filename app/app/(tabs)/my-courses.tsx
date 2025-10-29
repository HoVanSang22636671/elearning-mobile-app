import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyCoursesScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const courses = [
    {
      id: 1,
      title: "UX Foundation",
      time: "2 hrs 25 mins",
      progress: 30,
      image: { uri: "https://cdn-icons-png.flaticon.com/512/2857/2857392.png" },
    },
    {
      id: 2,
      title: "Creative Art Design",
      time: "3 hrs 25 mins",
      progress: 70,
      image: { uri: "https://cdn-icons-png.flaticon.com/512/2985/2985150.png" },
    },
    {
      id: 3,
      title: "Palettes for Your App",
      time: "4 hrs 50 mins",
      progress: 100,
      image: { uri: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png" },
    },
    {
      id: 4,
      title: "Typography in UI Design",
      time: "4 hrs 50 mins",
      progress: 50,
      image: { uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>My Courses</Text>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerText}>Courses that boost your career!</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Check Now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {["All", "On Going", "Completed"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              {selectedTab === tab && <View style={styles.activeTabLine} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Course List */}
        <View style={styles.courseList}>
          {courses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Image source={course.image} style={styles.courseImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseTime}>{course.time}</Text>
                <Text style={styles.courseProgressText}>
                  {course.progress}% Complete
                </Text>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[styles.progressBar, { width: `${course.progress}%` }]}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  banner: {
    backgroundColor: "#8854D0",
    borderRadius: 12,
    margin: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  bannerButton: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: "#8854D0",
    fontWeight: "600",
  },
  bannerImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginLeft: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 6,
  },
  tabText: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "700",
  },
  activeTabLine: {
    height: 2,
    backgroundColor: "#00BFFF",
    marginTop: 4,
    borderRadius: 2,
  },
  courseList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  courseTime: {
    fontSize: 13,
    color: "gray",
    marginTop: 2,
  },
  courseProgressText: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  progressBarContainer: {
    width: "100%",
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    marginTop: 4,
  },
  progressBar: {
    height: 5,
    backgroundColor: "#00BFFF",
    borderRadius: 3,
  },
});
