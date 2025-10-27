import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa kiểu dữ liệu cho khóa học (phiên bản rút gọn)
interface InspireCourse {
    id: string;
    title: string;
    author: string;
    lessons: number;
    imageUrl: string;
}

interface CourseInspireCardProps {
    course: InspireCourse;
    onPress?: () => void;
}

const CourseInspireCard: React.FC<CourseInspireCardProps> = ({ course, onPress }) => (
    <TouchableOpacity style={styles.inspireCardContainer} onPress={onPress}>
        {/* Ảnh */}
        <Image source={{ uri: course.imageUrl }} style={styles.inspireCardImage} />

        {/* Thông tin */}
        <View style={styles.inspireCardInfo}>
            <Text style={styles.inspireCardTitle} numberOfLines={1}>{course.title}</Text>
            <Text style={styles.inspireCardAuthor}>{course.author}</Text>
            <Text style={styles.inspireCardLessons}>{course.lessons} lessons</Text>
        </View>

        {/* Bookmark */}
        <TouchableOpacity style={styles.inspireBookmark}>
            <Ionicons name="bookmark-outline" size={20} color="#555" />
        </TouchableOpacity>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    inspireCardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        alignItems: 'center',
    },
    inspireCardImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    inspireCardInfo: {
        flex: 1,
        marginLeft: 12,
    },
    inspireCardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    inspireCardAuthor: {
        fontSize: 12,
        color: 'gray',
        marginTop: 2,
    },
    inspireCardLessons: {
        fontSize: 12,
        color: 'gray',
        marginTop: 2,
    },
    inspireBookmark: {
        marginLeft: 10,
    },
});

export default CourseInspireCard;
