import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

// --- DỮ LIỆU GIẢ ---
const MOCK_QUESTIONS = [
    {
        id: 'q1',
        author: 'Jane Barry',
        time: 'A day ago',
        text: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur.',
        likes: 23,
        comments: 5,
        avatar: 'https://placehold.co/40x40/FFC0CB/black?text=JB'
    },
    {
        id: 'q2',
        author: 'Thomas',
        time: 'A day ago',
        text: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur.',
        likes: 23,
        comments: 5,
        avatar: 'https://placehold.co/40x40/ADD8E6/black?text=T'
    },
    {
        id: 'q3',
        author: 'Jenny Barry',
        time: 'A day ago',
        text: 'Deserunt minim incididunt cillum nostrud do voluptate excepteur.',
        likes: 23,
        comments: 5,
        avatar: 'https://placehold.co/40x40/E6E6FA/black?text=JB'
    },
];
// --- Hết dữ liệu giả ---

// Component con cho mỗi câu hỏi
const QAItem = ({ item }: { item: typeof MOCK_QUESTIONS[0] }) => (
    <View style={styles.qaItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.qaContent}>
            <View style={styles.qaHeader}>
                <Text style={styles.authorName}>{item.author}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.qaText}>{item.text}</Text>
            <View style={styles.qaFooter}>
                <Ionicons name="heart-outline" size={20} color="#555" />
                <Text style={styles.footerText}>{item.likes}</Text>
                <Ionicons name="chatbubble-outline" size={20} color="#555" style={{ marginLeft: 16 }} />
                <Text style={styles.footerText}>{item.comments} Comment</Text>
            </View>
        </View>
    </View>
);

export default function LearningQATab() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {MOCK_QUESTIONS.map((item) => (
                    <QAItem key={item.id} item={item} />
                ))}
            </ScrollView>

            {/* Thanh Input ở dưới cùng */}
            <View style={styles.inputContainer}>
                <Image
                    source={{ uri: 'https://placehold.co/40x40/c2ffc2/black?text=U' }}
                    style={styles.avatar}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Write a Q&A..."
                    placeholderTextColor="#888"
                />
                {/* Có thể thêm các icon emoji/gửi ở đây */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flex: 1,
    },
    qaItem: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    qaContent: {
        flex: 1,
    },
    qaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    authorName: {
        fontSize: 15,
        fontWeight: '600',
    },
    time: {
        fontSize: 13,
        color: '#888',
    },
    qaText: {
        fontSize: 14.5,
        color: '#444',
        lineHeight: 20,
        marginBottom: 12,
    },
    qaFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 13,
        color: '#555',
        marginLeft: 6,
    },
    // Input ở dưới
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 15,
    },
});

