import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa kiểu dữ liệu cho một khóa học
export interface Course {
    id: string;
    title: string;
    author: string;
    rating: number;
    reviews: number;
    lessons: number;
    imageUrl: string;
    isBestseller?: boolean;
    price?: number; // <-- LỖI ĐÃ ĐƯỢC SỬA TẠI ĐÂY
}

interface CourseCardProps {
    course: Course;
    onPress?: () => void;
    width?: number; // Cho phép tùy chỉnh độ rộng cho list ngang
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onPress, width = 280 }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { width: width }]}>
            {/* Ảnh bìa */}
            <Image source={{ uri: course.imageUrl }} style={styles.thumbnail} />

            {/* Tag 'Best-seller' (nếu có) */}
            {course.isBestseller && (
                <View style={styles.bestsellerTag}>
                    <Text style={styles.bestsellerText}>Best-seller</Text>
                </View>
            )}

            {/* Icon Bookmark */}
            <TouchableOpacity style={styles.bookmarkButton}>
                <Ionicons name="bookmark-outline" size={20} color="#333" />
            </TouchableOpacity>

            {/* Thông tin khóa học */}
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
                <Text style={styles.author}>{course.author}</Text>

                {/* Đánh giá và số bài học */}
                <View style={styles.statsContainer}>
                    <Ionicons name="star" size={16} color="#FFC107" />
                    <Text style={styles.ratingText}>{course.rating}</Text>
                    <Text style={styles.reviewsText}>({course.reviews})</Text>
                    <Text style={styles.dotSeparator}>•</Text>
                    <Text style={styles.lessonsText}>{course.lessons} lessons</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginRight: 16, // Khoảng cách cho list ngang
        overflow: 'hidden', // Để bo góc ảnh
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    thumbnail: {
        width: '100%',
        height: 150, // Chiều cao cố định cho ảnh
    },
    infoContainer: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    author: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 8,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#555',
        marginLeft: 4,
    },
    reviewsText: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 4,
    },
    dotSeparator: {
        marginHorizontal: 6,
        color: 'gray',
    },
    lessonsText: {
        fontSize: 12,
        color: 'gray',
    },
    bestsellerTag: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#0288D1', // Màu xanh
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    bestsellerText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    bookmarkButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CourseCard;

