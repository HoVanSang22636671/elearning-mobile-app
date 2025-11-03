import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import 3 component tab con
import LearningLessonsTab from '../../../components/LearningTabs/LessonTab';
import LearningProjectsTab from '../../../components/LearningTabs/ProjectTab';
import LearningQATab from '../../../components/LearningTabs/Q&ATab';

// Khởi tạo Top Tab Navigator
const TopTab = createMaterialTopTabNavigator();

// Dữ liệu giả cho khóa học
const MOCK_LEARNING_COURSE = {
    id: 'c1',
    title: 'UX Foundation: Introduction to User Experience Design',
    videoUrl: 'https://placehold.co/600x400/000000/ffffff?text=Video+Player', // Placeholder video
    likes: 231,
    shares: 16,
};

// Màu sắc
const ACTIVE_COLOR = '#000';
const INACTIVE_COLOR = '#888';
const INDICATOR_COLOR = '#00A89C'; // Màu xanh teal

export default function LearningScreen() {
    const { id } = useGlobalSearchParams(); // Lấy id của khóa học từ URL
    const router = useRouter();

    // Tạm thời dùng dữ liệu giả, sau này bạn sẽ fetch dữ liệu bằng `id`
    const course = MOCK_LEARNING_COURSE;

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            {/* Header tùy chỉnh */}
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>{course.title}</Text>
                <TouchableOpacity style={styles.headerButton}>
                    <Ionicons name="bookmark-outline" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerButton}>
                    <Ionicons name="ellipsis-vertical" size={22} color="black" />
                </TouchableOpacity>
            </View>

            {/* Video Player (Placeholder) */}
            <View style={styles.videoPlayer}>
                <Image source={{ uri: course.videoUrl }} style={styles.videoImage} />
                <TouchableOpacity style={styles.playButton}>
                    <Ionicons name="play-circle" size={60} color="rgba(255, 255, 255, 0.8)" />
                </TouchableOpacity>
            </View>

            {/* Thông tin khóa học (Likes, Shares) */}
            <View style={styles.infoContainer}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.statsContainer}>
                    <Ionicons name="heart" size={20} color="#FF6B6B" />
                    <Text style={styles.statsText}>{course.likes} Like</Text>
                    <Ionicons name="share-social" size={20} color="#00A89C" style={{ marginLeft: 16 }} />
                    <Text style={styles.statsText}>{course.shares} Share</Text>
                </View>
            </View>

            {/* Top Tab Navigator */}
            <TopTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: ACTIVE_COLOR,
                    tabBarInactiveTintColor: INACTIVE_COLOR,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: '600',
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: INDICATOR_COLOR,
                        height: 3,
                    },
                    tabBarPressColor: '#f0f0f0', // Màu khi bấm
                }}
            >
                <TopTab.Screen name="Lessons" component={LearningLessonsTab} />
                <TopTab.Screen name="Projects" component={LearningProjectsTab} />
                <TopTab.Screen name="Q&A" component={LearningQATab} />
            </TopTab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerButton: {
        padding: 6,
    },
    headerTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    // Video
    videoPlayer: {
        width: '100%',
        height: 220, // Chiều cao video
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    playButton: {
        // Nút play (nếu cần)
    },
    // Info
    infoContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#555',
    },
});

