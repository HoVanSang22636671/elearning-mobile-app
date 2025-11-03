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
import { Link } from "expo-router"; // 1. IMPORT LINK

export default function MyCoursesScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  // 2. SỬA LẠI ID ĐỂ DÙNG LÀM ĐƯỜNG DẪN (string thay vì number)
  const courses = [
    {
      id: 'ux-foundation', // ID dạng chuỗi
      title: "UX Foundation",
      time: "2 hrs 25 mins",
      progress: 30,
      image: { uri: "https://placehold.co/120x120/D4FFC2/black?text=UX" }, // Dùng placeholder
    },
    {
      id: 'creative-art',
      title: "Creative Art Design",
      time: "3 hrs 25 mins",
      progress: 70,
      image: { uri: "https://placehold.co/120x120/C2FFEC/black?text=Art" },
    },
    {
      id: 'palettes-app',
      title: "Palettes for Your App",
      time: "4 hrs 50 mins",
      progress: 100,
      image: { uri: "https://placehold.co/120x120/FFC2C2/black?text=Palette" },
    },
    {
      id: 'typography-design',
      title: "Typography in UI Design",
      time: "4 hrs 50 mins",
      progress: 50,
      image: { uri: "https://placehold.co/120x120/C2D2FF/black?text=Text" },
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
            source={{ uri: "https://placehold.co/90x90/C2C2FF/black?text=Person" }} // Dùng placeholder
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
            // 3. BỌC BẰNG LINK VÀ TOUCHABLEOPACITY
            <Link key={course.id} href={`/learning/${course.id}`} asChild>
              <TouchableOpacity style={styles.courseCard}>
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
              </TouchableOpacity>
            </Link>
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
    marginBottom: 10,
  },
  banner: {
    backgroundColor: "#8854D0", // Màu tím
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    flex: 1, // Đảm bảo text ngắt dòng
  },
  bannerButton: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: "#8854D0", // Màu tím
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
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 8,
  },
  activeTabText: {
    color: "#00A89C", // Màu xanh
    fontWeight: "700",
  },
  activeTabLine: {
    height: 3,
    backgroundColor: "#00A89C", // Màu xanh
    marginTop: -3,
    borderRadius: 2,
  },
  courseList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 10,
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
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f0f0f0' // Màu nền cho placeholder
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
    overflow: 'hidden', // Thêm cái này
  },
  progressBar: {
    height: 5,
    backgroundColor: "#00A89C", // Màu xanh
    borderRadius: 3,
  },
});

