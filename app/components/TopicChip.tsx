import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// Xóa bỏ useRouter, component này không cần biết về điều hướng
// import { useRouter } from 'expo-router'; 

interface TopicChipProps {
    title: string;
    onPress: () => void; // THÊM prop này
}

const TopicChip: React.FC<TopicChipProps> = ({ title, onPress }) => {
    // const router = useRouter(); // Xóa bỏ

    const handlePress = () => {
        // router.push(`/search-results?q=${title}`); // XÓA BỎ DÒNG SAI NÀY
        if (onPress) {
            onPress(); // Gọi hàm onPress được truyền từ ngoài vào
        }
    };

    return (
        <TouchableOpacity style={styles.chip} onPress={handlePress}>
            <Text style={styles.chipText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chip: {
        backgroundColor: 'white',
        borderColor: '#00A89C', // Viền màu xanh teal
        borderWidth: 1.5,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 10,
        marginBottom: 10,
    },
    chipText: {
        color: '#00A89C',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default TopicChip;

