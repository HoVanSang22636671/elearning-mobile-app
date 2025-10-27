import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa kiểu dữ liệu cho Giảng viên
interface Teacher {
    id: string;
    name: string;
    avatarUrl: string;
    rating: number;
    reviews: number;
}

interface TeacherCardProps {
    teacher: Teacher;
    onPress?: () => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onPress }) => (
    <TouchableOpacity style={styles.teacherCardContainer} onPress={onPress}>
        <Image source={{ uri: teacher.avatarUrl }} style={styles.teacherAvatar} />
        <Text style={styles.teacherName}>{teacher.name}</Text>
        <View style={styles.teacherRatingContainer}>
            <Ionicons name="star" size={14} color="#FFC107" />
            <Text style={styles.teacherRating}>{teacher.rating} ({teacher.reviews})</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    teacherCardContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginRight: 16,
        width: 140,
    },
    teacherAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    teacherName: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    teacherRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    teacherRating: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 4,
    }
});

export default TeacherCard;
