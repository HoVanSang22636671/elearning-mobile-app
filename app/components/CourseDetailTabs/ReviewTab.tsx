import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// --- DỮ LIỆU GIẢ ---
const MOCK_REVIEWS = [
    { id: 'r1', name: 'Jinny Oslin', date: 'A day ago', rating: 5, comment: 'Nostrud excepturi magna id est quis in aliqua consequat.', avatar: 'https://placehold.co/40x40/c2ffc2/black?text=JO' },
    { id: 'r2', name: 'Jane Barry', date: 'A day ago', rating: 4, comment: 'Exercitation enim eiusmod elit sint laborum...', avatar: 'https://placehold.co/40x40/c2cfff/black?text=JB' },
    { id: 'r3', name: 'Claire Mignard', date: '5 days ago', rating: 5, comment: 'Dolor laborum...', avatar: 'https://placehold.co/40x40/ffc2c2/black?text=CM' },
];

const MOCK_FILTERS = [
    { id: 'f1', label: 'All', active: true },
    { id: 'f2', label: '5', icon: 'star', active: false },
    { id: 'f3', label: '4', icon: 'star', active: false },
    { id: 'f4', label: '3', icon: 'star', active: false },
];
// --- Hết dữ liệu giả ---

// Component con
const StarRating = ({ rating }: { rating: number }) => (
    <View style={{ flexDirection: 'row' }}>
        {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
                key={star}
                name={star <= rating ? 'star' : 'star-outline'}
                size={16}
                color={star <= rating ? '#FFC107' : '#ccc'}
            />
        ))}
    </View>
);

const ReviewItem = ({ review }: { review: (typeof MOCK_REVIEWS)[0] }) => (
    <View style={styles.reviewItem}>
        <Image source={{ uri: review.avatar }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
            <View style={styles.reviewHeader}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <StarRating rating={review.rating} />
            </View>
            <Text style={styles.reviewDate}>{review.date}</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
    </View>
);

const FilterChip = ({ item }: { item: (typeof MOCK_FILTERS)[0] }) => (
    <TouchableOpacity style={[styles.chip, item.active && styles.chipActive]}>
        {item.icon && <Ionicons name={item.icon as any} size={14} color={item.active ? '#00A89C' : '#555'} />}
        <Text style={[styles.chipText, item.active && styles.chipTextActive]}>{item.label}</Text>
    </TouchableOpacity>
);

export default function ReviewTab() {
    return (
        <ScrollView style={styles.container}>
            {/* Header tổng quan */}
            <View style={styles.ratingHeader}>
                <Text style={styles.ratingLarge}>4.5/5</Text>
                <Text style={styles.ratingTotal}>(1233+ reviews)</Text>
            </View>

            {/* Filter Chips */}
            <FlatList
                data={MOCK_FILTERS}
                renderItem={({ item }) => <FilterChip item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.chipContainer}
            />

            {/* Danh sách Review */}
            {MOCK_REVIEWS.map((review) => (
                <ReviewItem key={review.id} review={review} />
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
    // Rating Header
    ratingHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    ratingLarge: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333',
    },
    ratingTotal: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    // Filter Chips
    chipContainer: {
        marginBottom: 20,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginRight: 10,
    },
    chipActive: {
        backgroundColor: '#E0F7FA',
        borderColor: '#00A89C',
        borderWidth: 1,
    },
    chipText: {
        fontSize: 14,
        color: '#555',
        marginLeft: 4,
    },
    chipTextActive: {
        color: '#00A89C',
        fontWeight: '600',
    },
    // Review Item
    reviewItem: {
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    reviewName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    reviewDate: {
        fontSize: 12,
        color: '#aaa',
        marginBottom: 8,
    },
    reviewComment: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});
