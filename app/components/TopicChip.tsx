import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface TopicChipProps {
    title: string;
}

const TopicChip: React.FC<TopicChipProps> = ({ title }) => {
    const router = useRouter();

    // Khi bấm vào chip, cũng sẽ tìm kiếm
    const handlePress = () => {
        router.push(`/search-results?q=${title}`);
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
