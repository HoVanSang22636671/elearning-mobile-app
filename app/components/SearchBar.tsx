import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Định nghĩa Props, bao gồm hàm onSearch
interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

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
                    onSubmitEditing={handlePress} // Xử lý khi bấm "Enter"
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    searchBox: {
        flex: 1, // Chiếm phần lớn không gian
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Màu nền xám nhạt
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
        backgroundColor: '#00A89C', // Màu xanh teal
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
