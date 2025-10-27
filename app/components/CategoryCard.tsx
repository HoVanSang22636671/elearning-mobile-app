import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CategoryCardProps {
    title: string;
    iconName: keyof typeof Ionicons.glyphMap;
    color: string;
    onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, iconName, color, onPress }) => {
    return (
        // TouchableOpacity giờ là thẻ card màu trắng
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* View chứa icon với màu nền */}
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <Ionicons name={iconName} size={24} color="white" />
            </View>
            {/* Text nằm bên phải */}
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%', // Vẫn giữ 2 cột
        backgroundColor: 'white', // Nền card là màu trắng
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row', // Thay đổi quan trọng: xếp item theo chiều ngang
        alignItems: 'center', // Căn giữa icon và text theo chiều dọc
        marginBottom: 16,
        // Thêm một chút bóng (shadow) cho giống thiết kế
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    iconContainer: {
        width: 48, // Kích thước icon container
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12, // Khoảng cách giữa icon và text
    },
    cardText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        flex: 1, // Đảm bảo text không bị tràn nếu quá dài
    },
});

export default CategoryCard;

