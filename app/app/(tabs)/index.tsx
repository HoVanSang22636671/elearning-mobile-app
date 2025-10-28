import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'; // Dùng Link của Expo Router để điều hướng

// Import các component tái sử dụng TỪ FILE RIÊNG
import CategoryCard from '../../components/CategoryCard';
import CourseCard, { Course } from '../../components/CourseCard';
import SectionHeader from '../../components/SectionHeader';
import CourseInspireCard from '../../components/CourseInspireCard';
import TeacherCard from '../../components/TeacherCard';

// --- DỮ LIỆU GIẢ (MOCK DATA) ---
// (Giữ nguyên như cũ)
const MOCK_CATEGORIES = [
  { id: '1', title: 'Business', icon: 'briefcase-outline', color: '#0288D1' },
  { id: '2', title: 'Design', icon: 'color-palette-outline', color: '#7B1FA2' },
  { id: '3', title: 'Code', icon: 'code-slash-outline', color: '#E64A19' },
  { id: '4.7', title: 'Writing', icon: 'create-outline', color: '#303F9F' },
  { id: '5', title: 'Movie', icon: 'videocam-outline', color: '#D32F2F' },
  { id: '6', title: 'Language', icon: 'language-outline', color: '#FFB300' },
];

const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'PHP in One Click',
    author: 'Ramono Wultschners',
    rating: 4.5,
    reviews: 1233,
    lessons: 18,
    imageUrl: 'https://placehold.co/280x150/7c99ff/white?text=PHP',
  },
  {
    id: 'c2',
    title: 'Python for Beginners',
    author: 'Ramono Wultschners',
    rating: 4.7,
    reviews: 1287,
    lessons: 12,
    imageUrl: 'https://placehold.co/280x150/ffe57c/black?text=Python',
  },
  {
    id: 'c3',
    title: 'Website Design',
    author: 'Sara Weise',
    rating: 4.8,
    reviews: 857,
    lessons: 9,
    imageUrl: 'https://placehold.co/280x150/c2ff7c/black?text=Web+Design',
    isBestseller: true,
  },
];

const MOCK_INSPIRE_COURSES = MOCK_COURSES.map(c => ({ ...c }));
const MOCK_TEACHERS = [
  { id: 't1', name: 'Christian Hayes', avatarUrl: 'https://placehold.co/100x100/E0F7FA/333?text=CH', rating: 4.8, reviews: 1733 },
  { id: 't2', name: 'Dennis Sweeney', avatarUrl: 'https://placehold.co/100x100/FFF9C4/333?text=DS', rating: 4.7, reviews: 1204 },
  { id: 't3', name: 'Sara Weise', avatarUrl: 'https://placehold.co/100x100/F8BBD0/333?text=SW', rating: 4.9, reviews: 2019 },
];
// --- (Hết dữ liệu giả) ---


// --- MÀN HÌNH HOME CHÍNH ---
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#00A89C" />

      {/* Header tùy chỉnh */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerHello}>Hello, Rosie!</Text>
          <Text style={styles.headerSubtitle}>What do you want to learn today?</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Ionicons name="notifications-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* === BANNER KHUYẾN MÃI (ĐÃ CẬP NHẬT) === */}
        <View style={styles.bannerContainer}>
          {/* Cột bên trái: Text và Button */}
          <View style={styles.bannerLeft}>
            <Text style={styles.bannerTitle}>PROJECT MANAGEMENT</Text>
            <Text style={styles.bannerSubtitle}>20% OFF</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>JOIN NOW</Text>
            </TouchableOpacity>
          </View>

          {/* Cột bên phải: Hình ảnh */}
          <View style={styles.bannerRight}>
            <Image
              source={{ uri: 'https://placehold.co/120x150/FFFFFF/CCCCCC?text=Person' }}
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* === HẾT BANNER === */}


        {/* Mục 1: Categories */}
        <SectionHeader title="Categories" onViewMore={() => console.log('View more Categories')} />
        <View style={styles.categoriesContainer}>
          {MOCK_CATEGORIES.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              iconName={item.icon as any}
              color={item.color}
            />
          ))}
        </View>

        {/* Mục 2: Popular courses */}
        <SectionHeader title="Popular courses" onViewMore={() => console.log('View more Popular')} />
        <FlatList
          data={MOCK_COURSES}
          renderItem={({ item }) => (
            <Link href={`/course/${item.id}`} asChild>
              <CourseCard course={item} />
            </Link>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10 }}
        />

        {/* Mục 3: Recommended for you */}
        <SectionHeader title="Recommended for you" onViewMore={() => console.log('View more Recommended')} />
        <FlatList
          data={[...MOCK_COURSES].reverse()} // Dùng lại data cho demo
          renderItem={({ item }) => (
            <Link href={`/course/${item.id}`} asChild>
              <CourseCard course={item} width={220} />
            </Link>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10 }}
        />

        {/* Mục 4: Course that inspires */}
        <SectionHeader title="Course that inspires" onViewMore={() => console.log('View more Inspires')} />
        <View style={{ paddingHorizontal: 20 }}>
          {MOCK_INSPIRE_COURSES.map(item => (
            <Link href={`/course/${item.id}`} asChild key={item.id}>
              <CourseInspireCard course={item} />
            </Link>
          ))}
        </View>

        {/* Mục 5: Top teachers */}
        <SectionHeader title="Top teachers" onViewMore={() => console.log('View more Teachers')} />
        <FlatList
          data={MOCK_TEACHERS}
          renderItem={({ item }) => (
            <Link href={`/teacher/${item.id}`} asChild>
              <TouchableOpacity>
                <TeacherCard teacher={item} />
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10 }}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLESHEET (ĐÃ CẬP NHẬT) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#00A89C', // Màu xanh teal
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerHello: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  scrollContainer: {
    paddingBottom: 40,
  },

  // === STYLES CHO BANNER MỚI ===
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#7B1FA2', // Màu tím từ thiết kế
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden', // Đảm bảo hình ảnh không tràn ra ngoài
    alignItems: 'center', // Căn giữa các item theo chiều dọc
  },
  bannerLeft: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 24,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    opacity: 0.8,
  },
  bannerSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
    marginBottom: 16,
  },
  joinButton: {
    backgroundColor: '#00A89C', // Màu xanh teal cho nút
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start', // Chỉ chiếm độ rộng của text
  },
  joinButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerRight: {
    justifyContent: 'flex-end',
  },
  bannerImage: {
    width: 120, // Chiều rộng của hình
    height: 150, // Chiều cao của hình
    marginTop: 10, // Đẩy hình xuống 1 chút
  },
  // === HẾT STYLES CHO BANNER MỚI ===

  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

