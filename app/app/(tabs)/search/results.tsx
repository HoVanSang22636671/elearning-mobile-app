import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter, Link } from 'expo-router';
// THAY ĐỔI ĐƯỜNG DẪN:
import SearchBar from '../../../components/SearchBar';
import CourseListItem, { Course } from '../../../components/CourseListItem';

// ... (Dữ liệu giả MOCK_SEARCH_RESULTS giữ nguyên) ...
const MOCK_SEARCH_RESULTS: Course[] = [
    {
        id: 'c4',
        title: 'UX Foundation',
        author: 'Sara Weise',
        rating: 4.5,
        reviews: 1233,
        price: '51',
        lessons: 13,
        imageUrl: 'https://placehold.co/100x100/e0c2ff/black?text=UX',
        isBestseller: true,
    },
    {
        id: 'c5',
        title: 'Design Basics',
        author: 'Kelly Hamilton',
        rating: 4.5,
        reviews: 1233,
        price: '89',
        lessons: 12,
        imageUrl: 'https://placehold.co/100x100/c2ffc2/black?text=Design',
    },
    {
        id: 'c6',
        title: 'Digital Sketching',
        author: 'Ramono Wultschners',
        rating: 4.5,
        reviews: 1233,
        price: '59',
        lessons: 8,
        imageUrl: 'https://placehold.co/100x100/ffc2c2/black?text=Sketch',
    },
    {
        id: 'c7',
        title: 'Digital Portrait',
        author: 'Ramono Wultschners',
        rating: 4.5,
        reviews: 1233,
        price: '67',
        lessons: 11,
        imageUrl: 'https://placehold.co/100x100/c2c9ff/black?text=Portrait',
    },
];
// --- Hết dữ liệu giả ---

export default function SearchResultsScreen() {
    const router = useRouter();
    const { q } = useLocalSearchParams<{ q: string }>();

    const handleSearch = (newQuery: string) => {
        // THAY ĐỔI QUAN TRỌNG:
        // Thay thế (replace) màn hình hiện tại thay vì đẩy (push)
        router.replace(`./results?q=${newQuery}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* <Stack.Screen> ĐÃ BỊ XÓA (vì _layout.tsx quản lý) */}

            {/* Thanh tìm kiếm */}
            <SearchBar onSearch={handleSearch} defaultValue={q} />

            {/* Hiển thị số kết quả */}
            <Text style={styles.resultsCount}>
                {MOCK_SEARCH_RESULTS.length} Results for "{q}"
            </Text>

            {/* Danh sách kết quả */}
            <FlatList
                data={MOCK_SEARCH_RESULTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link href={`/course/${item.id}`} asChild>
                        <TouchableOpacity>
                            <CourseListItem course={item} />
                        </TouchableOpacity>
                    </Link>
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    );
}

// ... (Styles giữ nguyên) ...
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    resultsCount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
});
