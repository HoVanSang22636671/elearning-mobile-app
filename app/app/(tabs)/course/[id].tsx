import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// *** THÊM "Stack" VÀO ĐÂY ***
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import 3 component Tab
import OverviewTab from '../../../components/CourseDetailTabs/OverviewTab';
import LessonsTab from '../../../components/CourseDetailTabs/LessonsTab';
import ReviewTab from '../../../components/CourseDetailTabs/ReviewTab';

// Khởi tạo Top Tab Navigator
const TopTab = createMaterialTopTabNavigator();

// --- DỮ LIỆU GIẢ ---
// (Trong dự án thật, bạn sẽ dùng `id` để fetch (tải) dữ liệu này từ API/Firebase)
const MOCK_COURSE_DETAILS = {
    id: 'c1',
    title: 'UX Foundation: Introduction to User Experience Design',
    imageUrl: 'https://placehold.co/600x300/6A45DE/FFFFFF?text=UX+Introduction',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
    price: 59.00,
    originalPrice: 73.75,
};
// --- Hết dữ liệu giả ---

// Component Header tùy chỉnh
const CourseDetailHeader = () => {
    const router = useRouter();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Course details</Text>
            <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="bookmark-outline" size={22} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

// Component Banner (Video)
const CourseVideoBanner = () => (
    <View style={styles.videoBanner}>
        <Image
            source={{ uri: MOCK_COURSE_DETAILS.imageUrl }}
            style={styles.bannerImage}
        />
        <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play-circle" size={60} color="white" />
        </TouchableOpacity>
    </View>
);

// Component Tiêu đề (dưới Banner)
const CourseTitleInfo = () => (
    <View style={styles.titleInfoContainer}>
        <Text style={styles.courseTitle}>{MOCK_COURSE_DETAILS.title}</Text>
        <View style={styles.statsContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.statsText}>{MOCK_COURSE_DETAILS.rating} ({MOCK_COURSE_DETAILS.reviews})</Text>
            <Ionicons name="document-text-outline" size={16} color="#888" style={{ marginLeft: 16 }} />
            <Text style={styles.statsText}>{MOCK_COURSE_DETAILS.lessons} lessons</Text>
        </View>
    </View>
);

// Component Footer (Thanh "Add to cart")
const CourseDetailFooter = () => (
    <View style={styles.footerContainer}>
        <View>
            <Text style={styles.priceText}>${MOCK_COURSE_DETAILS.price}</Text>
            <Text style={styles.originalPriceText}>
                80% Disc. ${MOCK_COURSE_DETAILS.originalPrice}
            </Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
            <Ionicons name="cart-outline" size={20} color="white" />
            <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
    </View>
);

// --- Màn hình chính ---
export default function CourseDetailScreen() {
    const { id } = useLocalSearchParams(); // Lấy 'id' từ đường dẫn
    const insets = useSafeAreaInsets(); // Lấy vùng an toàn

    return (
        <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>

            {/* --- DÒNG CODE NÀY ĐỂ ẨN HEADER MẶC ĐỊNH --- */}
            <Stack.Screen options={{ headerShown: false }} />

            {/* 1. Header tùy chỉnh */}
            <CourseDetailHeader />

            {/* 2. Banner Video & Tiêu đề (Không nằm trong Tab) */}
            <CourseVideoBanner />
            <CourseTitleInfo />

            {/* 3. Top Tab Navigator */}
            <TopTab.Navigator
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
                        elevation: 0, // Bỏ shadow (Android)
                        shadowOpacity: 0, // Bỏ shadow (iOS)
                    },
                }}
            >
                <TopTab.Screen name="Overview" component={OverviewTab} />
                <TopTab.Screen name="Lessons" component={LessonsTab} />
                <TopTab.Screen name="Review" component={ReviewTab} />
            </TopTab.Navigator>

            {/* 4. Footer "Add to cart" (Không nằm trong Tab) */}
            <CourseDetailFooter />
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
    // Video Banner
    videoBanner: {
        width: '100%',
        height: 210,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    playButton: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
    },
    // Title Info
    titleInfoContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 28,
        color: '#333',
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    statsText: {
        fontSize: 14,
        color: '#555',
        marginLeft: 4,
    },
    // Footer
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    priceText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
    },
    originalPriceText: {
        fontSize: 13,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    addToCartButton: {
        flexDirection: 'row',
        backgroundColor: '#00A89C',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    addToCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});

