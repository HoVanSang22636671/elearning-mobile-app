import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

// --- DỮ LIỆU GIẢ ---
const MOCK_TEACHER = {
    id: 't1',
    name: 'Sara Weise',
    title: 'UI/UX Designer',
    avatarUrl: 'https://placehold.co/60x60/d4ffc2/black?text=SW',
};
const MOCK_BENEFITS = [
    { icon: 'videocam', text: '14 hours on-demand video' },
    { icon: 'language', text: 'Native teacher' },
    { icon: 'document-text', text: '100% free document' },
    { icon: 'infinite', text: 'Full lifetime access' },
    { icon: 'ribbon', text: 'Certificate of complete' },
    { icon: 'shield-checkmark', text: '24/7 support' },
];
// --- Hết dữ liệu giả ---

// Component con
const BenefitItem = ({ icon, text }: { icon: any, text: string }) => (
    <View style={styles.benefitItem}>
        <Ionicons name={icon} size={22} color="#00A89C" style={styles.benefitIcon} />
        <Text style={styles.benefitText}>{text}</Text>
    </View>
);

export default function OverviewTab() {
    return (
        <ScrollView style={styles.container}>
            {/* Teacher Info */}
            <View style={styles.teacherContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Image source={{ uri: MOCK_TEACHER.avatarUrl }} style={styles.avatar} />
                    <View>
                        <Text style={styles.teacherName}>{MOCK_TEACHER.name}</Text>
                        <Text style={styles.teacherTitle}>{MOCK_TEACHER.title}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
            </View>

            {/* --- PHẦN MỚI ĐƯỢC THÊM --- */}
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
                Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui, risus. Purus massa velit iaculis tincidunt tortor, risus, scelerisque risus...
                <Text style={styles.seeMore}> See more</Text>
            </Text>
            {/* --- HẾT PHẦN MỚI --- */}


            {/* Benefits */}
            <Text style={styles.sectionTitle}>Benefits</Text>
            <View style={styles.benefitsContainer}>
                {MOCK_BENEFITS.map((item, index) => (
                    <BenefitItem key={index} icon={item.icon as any} text={item.text} />
                ))}
            </View>

            {/* TODO: Similar courses (Sẽ cần CourseCard component) */}
            <Text style={styles.sectionTitle}>Similar courses</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    // Teacher
    teacherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    teacherName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    teacherTitle: {
        fontSize: 13,
        color: '#888',
    },
    followButton: {
        backgroundColor: '#E0F7FA',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    followText: {
        color: '#00A89C',
        fontWeight: '600',
    },
    // Description (Style mới)
    description: {
        fontSize: 14.5,
        color: '#555',
        lineHeight: 22,
        marginBottom: 20,
    },
    seeMore: {
        color: '#00A89C',
        fontWeight: '600',
    },
    // Benefits
    sectionTitle: { // Style này dùng chung cho "Description" và "Benefits"
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
    },
    benefitsContainer: {
        marginBottom: 20,
    },
    benefitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    benefitIcon: {
        width: 30,
    },
    benefitText: {
        fontSize: 14.5,
        color: '#555',
        flex: 1,
    },
});

