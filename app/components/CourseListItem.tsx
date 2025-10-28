import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa lại Course type (tương tự như Home)
export interface Course {
    id: string;
    title: string;
    author: string;
    rating: number;
    reviews: number;
    price?: string;
    lessons: number;
    imageUrl: string;
    isBestseller?: boolean;
}

interface CourseListItemProps {
    course: Course;
}

// Component hiển thị sao (tái sử dụng logic)
const StarRating = ({ rating }: { rating: number }) => (
    <View style={styles.starContainer}>
        <Ionicons name="star" size={14} color="#FFC107" />
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    </View>
);

const CourseListItem: React.FC<CourseListItemProps> = ({ course }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: course.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                {course.isBestseller && (
                    <View style={styles.bestsellerBadge}>
                        <Text style={styles.bestsellerText}>Best-seller</Text>
                    </View>
                )}
                <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
                <Text style={styles.author}>{course.author}</Text>
                <View style={styles.statsContainer}>
                    <StarRating rating={course.rating} />
                    <Text style={styles.reviews}>({course.reviews})</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.lessons}>{course.lessons} lessons</Text>
                </View>
                {course.price && <Text style={styles.price}>${course.price}</Text>}
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
                <Ionicons name="bookmark-outline" size={24} color="#555" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        // Shadow cho iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Shadow cho Android
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    author: {
        fontSize: 13,
        color: '#777',
        marginBottom: 6,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFBEA',
        borderRadius: 4,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#EAA000',
        marginLeft: 4,
    },
    reviews: {
        fontSize: 12,
        color: '#777',
        marginLeft: 5,
    },
    dot: {
        fontSize: 12,
        color: '#777',
        marginHorizontal: 5,
    },
    lessons: {
        fontSize: 12,
        color: '#777',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00A89C',
    },
    bestsellerBadge: {
        position: 'absolute',
        top: -22, // Điều chỉnh để nó nằm trên cùng
        left: -115,
        backgroundColor: '#00A89C',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    bestsellerText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
    bookmarkButton: {
        padding: 5,
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default CourseListItem;
