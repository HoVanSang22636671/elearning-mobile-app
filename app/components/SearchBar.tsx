import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Định nghĩa Props, bao gồm hàm onSearch và defaultValue
interface SearchBarProps {
    onSearch: (query: string) => void;
    defaultValue?: string; // Thêm dòng này
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, defaultValue }) => {
    // Sử dụng defaultValue để khởi tạo state
    const [query, setQuery] = React.useState(defaultValue || '');

    const handlePress = () => {
        Keyboard.dismiss(); // Ẩn bàn phím
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <View style={styles.container}>
            {/* Hộp tìm kiếm */}
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search course"
                    placeholderTextColor="#888"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handlePress}
                    returnKeyType="search"
                />
            </View>

            {/* Nút Filter */}
            <TouchableOpacity style={styles.filterButton}>
                <Ionicons name="filter" size={20} color="white" />
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
        </View>
    );
};

// ... (Styles vẫn giữ nguyên như cũ)
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 20, // Thêm padding ở đây thay vì ở màn hình
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 48,
    },
    searchIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 15,
        color: '#333',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00A89C',
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 48,
        marginLeft: 10,
    },
    filterText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 6,
    },
});

export default SearchBar;

