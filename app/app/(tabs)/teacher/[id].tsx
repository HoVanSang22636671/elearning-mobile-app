import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
// *** THÊM "Stack" VÀO ĐÂY ***
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// --- ĐƯỜNG DẪN ĐÃ ĐƯỢC SỬA ---
import TeacherCoursesTab from '../../../components/TeacherProfileTabs/TeacherCoursesTab';
import TeacherOverviewTab from '../../../components/TeacherProfileTabs/TeacherOverviewTab';
import TeacherReviewTab from '../../../components/TeacherProfileTabs/TeacherReviewTab';
// --- HẾT PHẦN SỬA ---

// Khởi tạo Top Tab Navigator
const TopTab = createMaterialTopTabNavigator();

// --- DỮ LIỆU GIẢ ---
const MOCK_TEACHER_DETAILS = {
    id: 't1',
    name: 'Sara Weise',
    title: 'UI/UX Designer',
    avatarUrl: 'https://placehold.co/100x100/d4ffc2/black?text=SW',
    coverImageUrl: 'https://placehold.co/600x200/e0e0e0/b0b0b0?text=Cover+Image',
    location: 'New York - 09:30 AM',
    stats: {
        students: 1234,
        courses: 12,
        reviews: 850,
    }
};
// --- Hết dữ liệu giả ---

// Component Header tùy chỉnh
const TeacherProfileHeader = () => {
    const router = useRouter();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Teacher's profile</Text>
            <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

// Component Info Card (Avatar, Tên, Stats)
const TeacherInfoCard = () => {
    return (
        <View style={styles.infoCardContainer}>
            {/* Cover Image */}
            <Image
                source={{ uri: MOCK_TEACHER_DETAILS.coverImageUrl }}
                style={styles.coverImage}
            />
            {/* Avatar (nằm đè lên) */}
            <Image
                source={{ uri: MOCK_TEACHER_DETAILS.avatarUrl }}
                style={styles.avatar}
            />

            {/* Teacher Name & Title */}
            <View style={styles.nameContainer}>
                <Text style={styles.teacherName}>{MOCK_TEACHER_DETAILS.name}</Text>
                <View style={styles.teacherBadge}>
                    <Text style={styles.teacherBadgeText}>Teacher</Text>
                </View>
            </View>
            <Text style={styles.teacherTitle}>{MOCK_TEACHER_DETAILS.title}</Text>
            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#888" />
                <Text style={styles.locationText}>{MOCK_TEACHER_DETAILS.location}</Text>
            </View>

            {/* Stats (Students, Courses, Reviews) */}
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{MOCK_TEACHER_DETAILS.stats.students}</Text>
                    <Text style={styles.statLabel}>Students</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{MOCK_TEACHER_DETAILS.stats.courses}</Text>
                    <Text style={styles.statLabel}>Courses</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{MOCK_TEACHER_DETAILS.stats.reviews}</Text>
                    <Text style={styles.statLabel}>Reviews</Text>
                </View>
            </View>
        </View>
    );
};


// --- Màn hình chính ---
export default function TeacherProfileScreen() {
    const { id } = useLocalSearchParams(); // Lấy 'id' từ đường dẫn
    const insets = useSafeAreaInsets(); // Lấy vùng an toàn

    return (
        <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>

            {/* Ẩn header mặc định (giống màn hình Course Details) */}
            <Stack.Screen options={{ headerShown: false }} />

            {/* 1. Header tùy chỉnh */}
            <TeacherProfileHeader />

            {/* Sử dụng ScrollView cho phần thông tin
        nhưng TopTab.Navigator cần phải ở ngoài ScrollView
        Chúng ta sẽ dùng `ListHeaderComponent` của TopTab nếu cần
        Hoặc đơn giản là để Tab Navigator chiếm phần còn lại
      */}

            {/* 2. Thông tin Giảng viên */}
            <TeacherInfoCard />

            {/* 3. Top Tab Navigator */}
            <TopTab.Navigator
                initialRouteName="Courses" // Tab Courses hiển thị đầu tiên
                screenOptions={{
                    tabBarActiveTintColor: '#00A89C', // Màu xanh Teal
                    tabBarInactiveTintColor: '#888',
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: '600',
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#00A89C',
                        height: 3,
                    },
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f0f0f0',
                    },
                }}
            >
                <TopTab.Screen name="Overview" component={TeacherOverviewTab} />
                <TopTab.Screen name="Courses" component={TeacherCoursesTab} />
                <TopTab.Screen name="Review" component={TeacherReviewTab} />
            </TopTab.Navigator>

        </SafeAreaView>
    );
}

// --- STYLES ---
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // Header
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
    headerButton: {
        padding: 6,
    },
    // Info Card
    infoCardContainer: {
        alignItems: 'center', // Căn giữa mọi thứ
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    coverImage: {
        width: '100%',
        height: 100,
        backgroundColor: '#eee',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: -40, // Đẩy avatar lên trên
        borderWidth: 4,
        borderColor: '#fff',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    teacherName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
    },
    teacherBadge: {
        backgroundColor: '#00A89C',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 8,
    },
    teacherBadgeText: {
        color: 'white',
        fontSize: 11,
        fontWeight: '600',
    },
    teacherTitle: {
        fontSize: 15,
        color: '#555',
        marginTop: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    locationText: {
        fontSize: 13,
        color: '#888',
        marginLeft: 4,
    },
    // Stats Row
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 16,
        marginTop: 16,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    statLabel: {
        fontSize: 13,
        color: '#888',
        marginTop: 4,
    },
});

