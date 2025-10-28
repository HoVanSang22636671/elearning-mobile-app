import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// --- DỮ LIỆU GIẢ ---
const MOCK_SECTIONS = [
    {
        title: 'I - Introduction',
        isOpen: true,
        lessons: [
            { id: 'l1', title: 'Adipisicing consectetur', duration: '01:23 mins', isLocked: false },
            { id: 'l2', title: 'Dolor amet occaecat', duration: '02:05 mins', isLocked: false },
        ],
    },
    {
        title: 'III - Plan for your UX Research',
        isOpen: false,
        lessons: [
            { id: 'l3', title: 'Exercitation elit', duration: '03:10 mins', isLocked: true },
            { id: 'l4', title: 'Duis esse ipsum', duration: '01:45 mins', isLocked: true },
        ],
    },
    // Thêm các section khác...
];
// --- Hết dữ liệu giả ---

// Component con
const LessonItem = ({ title, duration, isLocked, isPlaying }: { title: string, duration: string, isLocked: boolean, isPlaying: boolean }) => (
    <TouchableOpacity style={[styles.lessonItem, isPlaying && styles.lessonItemPlaying]}>
        <View style={styles.lessonNumber}>
            {isPlaying ? (
                <Ionicons name="play" size={16} color="#00A89C" />
            ) : (
                <Ionicons name="play" size={16} color="#aaa" />
            )}
        </View>
        <View style={{ flex: 1 }}>
            <Text style={[styles.lessonTitle, isPlaying && { color: '#00A89C' }]}>{title}</Text>
            <Text style={styles.lessonDuration}>{duration}</Text>
        </View>
        {isLocked && (
            <Ionicons name="lock-closed" size={20} color="#aaa" />
        )}
    </TouchableOpacity>
);

const SectionHeader = ({ title, isOpen }: { title: string, isOpen: boolean }) => (
    <TouchableOpacity style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="#555" />
    </TouchableOpacity>
);

export default function LessonsTab() {
    return (
        <ScrollView style={styles.container}>
            {MOCK_SECTIONS.map((section, index) => (
                <View key={index}>
                    <SectionHeader title={section.title} isOpen={section.isOpen} />
                    {section.isOpen && section.lessons.map((lesson, lessonIndex) => (
                        <LessonItem
                            key={lesson.id}
                            title={lesson.title}
                            duration={lesson.duration}
                            isLocked={lesson.isLocked}
                            isPlaying={lesson.id === 'l2'} // Giả lập đang phát bài 2
                        />
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    // Section
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    // Lesson Item
    lessonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    lessonItemPlaying: {
        backgroundColor: '#E0F7FA', // Màu nền xanh nhạt
    },
    lessonNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    lessonTitle: {
        fontSize: 15,
        color: '#555',
        marginBottom: 2,
    },
    lessonDuration: {
        fontSize: 12,
        color: '#aaa',
    },
});

