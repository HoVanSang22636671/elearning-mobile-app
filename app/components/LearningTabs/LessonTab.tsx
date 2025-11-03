import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

// --- DỮ LIỆU GIẢ ---
const MOCK_SECTIONS = [
    {
        title: 'I - Introduction',
        lessons: [
            { id: 'l1', title: 'Amet adipisicing consectetur', duration: '01:23 mins', isDone: true },
            { id: 'l2', title: 'Culpa incididunt enim id adi', duration: '01:23 mins', isDone: false },
        ],
    },
    {
        title: 'II - Plan for your UX Research',
        lessons: [
            { id: 'l3', title: 'Exercitation elit incididunt esse', duration: '01:23 mins', isDone: false },
            { id: 'l4', title: 'Duis esse ipsum laboru', duration: '01:23 mins', isDone: false },
            { id: 'l5', title: 'Labore minim reprehenderit', duration: '01:23 mins', isDone: false },
        ],
    },
    {
        title: 'III - Conduct UX research',
        lessons: [],
    },
    {
        title: 'IV - Articulate findings',
        lessons: [],
    },
];
// --- Hết dữ liệu giả ---

// Component Section (để quản lý việc xổ ra/đóng lại)
const CourseSection = ({ title, lessons }: { title: string, lessons: any[] }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <View style={styles.sectionContainer}>
            {/* Header của Section (bấm để đóng/mở) */}
            <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => setIsExpanded(!isExpanded)}
            >
                <Text style={styles.sectionTitle}>{title}</Text>
                <Ionicons
                    name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'}
                    size={20}
                    color="#555"
                />
            </TouchableOpacity>

            {/* Danh sách bài học (chỉ hiển thị khi isExpanded = true) */}
            {isExpanded && (
                <View style={styles.lessonsContainer}>
                    {lessons.map((lesson, index) => (
                        <TouchableOpacity key={lesson.id} style={styles.lessonItem}>
                            <Text style={styles.lessonNumber}>
                                {/* Định dạng số thứ tự, ví dụ: 01, 02 */}
                                {(index + 1).toString().padStart(2, '0')}
                            </Text>
                            <View style={styles.lessonInfo}>
                                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                            </View>
                            {/* Icon Play hoặc Check (đã hoàn thành) */}
                            <Ionicons
                                name={lesson.isDone ? 'checkmark-circle' : 'play-circle-outline'}
                                size={24}
                                color={lesson.isDone ? '#00A89C' : '#888'}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

// Component chính
export default function LearningLessonsTab() {
    return (
        <ScrollView style={styles.container}>
            {MOCK_SECTIONS.map((section) => (
                <CourseSection
                    key={section.title}
                    title={section.title}
                    lessons={section.lessons}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // Section
    sectionContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fafafa',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    // Lessons
    lessonsContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10, // Thêm padding dưới cho bài học cuối
    },
    lessonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    lessonNumber: {
        fontSize: 14,
        color: '#888',
        width: 30, // Cho không gian để căn chỉnh
    },
    lessonInfo: {
        flex: 1,
        paddingHorizontal: 10,
    },
    lessonTitle: {
        fontSize: 15,
        color: '#444',
        marginBottom: 4,
    },
    lessonDuration: {
        fontSize: 12,
        color: '#999',
    },
});

