import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';

// Import các component chúng ta cần
import SearchBar from '../../components/SearchBar';
import TopicChip from '../../components/TopicChip';
import SectionHeader from '../../components/SectionHeader';
import CourseCard, { Course } from '../../components/CourseCard'; // Tái sử dụng từ Home

// --- DỮ LIỆU GIẢ ---
const MOCK_TOPICS = [
    'Java', 'SQL', 'Javascript', 'Python', 'Digital marketing', 'Photoshop', 'Watercolor',
];

const MOCK_CATEGORIES_LIST = [
    { id: '1', title: 'Business', icon: 'briefcase', color: '#0288D1' },
    { id: '2', title: 'Design', icon: 'color-palette', color: '#7B1FA2' },
    { id: '3', title: 'Code', icon: 'code-slash', color: '#E64A19' },
    { id: '4.7', title: 'Movie', icon: 'videocam', color: '#D32F2F' },
    { id: '5', title: 'Language', icon: 'language', color: '#FFB300' },
];

// Dùng lại data từ Home cho "Recommended"
const MOCK_COURSES: Course[] = [
    {
        id: 'c3',
        title: 'Website Design',
        author: 'Sara Weise',
        rating: 4.8,
        reviews: 857,
        lessons: 9,
        imageUrl: 'https://placehold.co/280x150/c2ff7c/black?text=Web+Design',
        isBestseller: true,
    },
    {
        id: 'c2',
        title: 'UX Research For...',
        author: 'Ramono Wultschners',
        rating: 4.7,
        reviews: 1782,
        lessons: 12,
        imageUrl: 'https://placehold.co/280x150/ffc2c2/black?text=UX+Research',
    },
];
// --- Hết dữ liệu giả ---


// Component Category Row (dùng nội bộ trong file này)
const CategoryRow = ({ title, icon, color }: { title: string, icon: any, color: string }) => {
    return (
        <TouchableOpacity style={styles.categoryRow}>
            <View style={[styles.categoryIconContainer, { backgroundColor: color + '20' }]}>
                <Ionicons name={icon} size={24} color={color} />
            </View>
            <Text style={styles.categoryTitle}>{title}</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#aaa" />
        </TouchableOpacity>
    );
};


export default function SearchScreen() {
    const router = useRouter();

    // Hàm xử lý khi người dùng tìm kiếm
    const handleSearch = (query: string) => {
        // Điều hướng đến trang kết quả (màn hình tiếp theo)
        // và truyền tham số `q` (query)
        router.push(`/search-results?q=${query}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Thanh tìm kiếm */}
                <View style={styles.paddingContainer}>
                    <SearchBar onSearch={handleSearch} />
                </View>

                {/* Hot topics */}
                <SectionHeader title="Hot topics" />
                <View style={styles.topicsContainer}>
                    {MOCK_TOPICS.map((topic) => (
                        <TopicChip key={topic} title={topic} />
                    ))}
                </View>

                {/* Categories */}
                <SectionHeader title="Categories" onViewMore={() => console.log('View Categories')} />
                <View style={styles.paddingContainer}>
                    {MOCK_CATEGORIES_LIST.map((cat) => (
                        <CategoryRow
                            key={cat.id}
                            title={cat.title}
                            icon={cat.icon}
                            color={cat.color}
                        />
                    ))}
                </View>

                {/* Recommended for you */}
                <SectionHeader title="Recommended for you" onViewMore={() => console.log('View Recommended')} />
                <FlatList
                    data={MOCK_COURSES}
                    renderItem={({ item }) => (
                        <Link href={`/course/${item.id}`} asChild>
                            <CourseCard course={item} width={280} />
                        </Link>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 10 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        paddingBottom: 40,
    },
    paddingContainer: {
        paddingHorizontal: 20,
        paddingTop: 20, // Thêm padding top cho an toàn
    },
    topicsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Tự động xuống hàng
        paddingHorizontal: 20,
        marginTop: 16,
        marginBottom: 10,
    },
    // Styles cho CategoryRow (component nội bộ)
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fdfdfd',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    categoryIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    categoryTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});