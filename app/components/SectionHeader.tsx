import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SectionHeaderProps {
    title: string;
    onViewMore?: () => void; // Biến `onViewMore` thành tùy chọn
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onViewMore }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>

        {/* Chỉ hiển thị "View more" nếu có truyền hàm `onViewMore` */}
        {onViewMore && (
            <TouchableOpacity onPress={onViewMore}>
                <Text style={styles.viewMoreText}>View more</Text>
            </TouchableOpacity>
        )}
    </View>
);

const styles = StyleSheet.create({
    sectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    viewMoreText: {
        fontSize: 14,
        color: '#00A89C', // Màu chủ đạo
        fontWeight: '600',
    },
});

export default SectionHeader;
