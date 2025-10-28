import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Link } from 'expo-router';
// Import các component tái sử dụng.
// Chúng ta dùng `../` để đi lùi ra khỏi thư mục 'TeacherProfileTabs'
import SectionHeader from '../SectionHeader';
import CourseCard, { Course } from '../CourseCard';

// --- DỮ LIỆU GIẢ ---
const MOCK_UI_COURSES: Course[] = [
    {
        id: 'c1',
        title: 'UX Foundation',
        author: 'Sara Weise',
        rating: 4.5,
        reviews: 1233,
        lessons: 12,
        price: 51,
        imageUrl: 'https://placehold.co/280x150/e0e0e0/black?text=UX+Foundation',
    },
    {
        id: 'c4',
        title: 'Mobile App Design',
        author: 'Sara Weise',
        rating: 4.3,
        reviews: 980,
        lessons: 10,
        price: 59,
        imageUrl: 'https://placehold.co/280x150/c2e2ff/black?text=Mobile+App',
    },
];

const MOCK_GRAPHIC_COURSES: Course[] = [
    {
        id: 'c5',
        title: 'Digital Poster',
        author: 'Sara Weise',
        rating: 4.6,
        reviews: 740,
        lessons: 12,
        price: 59,
        imageUrl: 'https://placehold.co/280x150/ffc2f9/black?text=Poster',
    },
    {
        id: 'c6',
        title: 'Patterns Design',
        author: 'Sara Weise',
        rating: 4.4,
        reviews: 610,
        lessons: 8,
        price: 59,
        imageUrl: 'https://placehold.co/280x150/fff5c2/black?text=Patterns',
    },
];
// --- Hết dữ liệu giả ---

export default function TeacherCoursesTab() {
    return (
        <ScrollView style={styles.container}>
            {/* Mục UI/UX Design */}
            <SectionHeader title="UI/UX Design" chip="Top-rated" onViewMore={() => { }} />
            <FlatList
                data={MOCK_UI_COURSES}
                renderItem={({ item }) => (
                    // Khi bấm vào card, điều hướng đến trang chi tiết khóa học
                    <Link href={`/course/${item.id}`} asChild>
                        <CourseCard course={item} width={280} />
                    </Link>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />

            {/* Mục Graphic Design */}
            <SectionHeader title="Graphic Design" onViewMore={() => { }} />
            <FlatList
                data={MOCK_GRAPHIC_COURSES}
                renderItem={({ item }) => (
                    <Link href={`/course/${item.id}`} asChild>
                        <CourseCard course={item} width={280} />
                    </Link>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContent: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
});

