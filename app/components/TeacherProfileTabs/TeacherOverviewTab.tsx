import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeacherOverviewTab() {
    // Nội dung tab này không có trong thiết kế,
    // chúng ta sẽ để placeholder (giữ chỗ)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Sara Weise</Text>
            <Text style={styles.description}>
                Detailed biography, work experience, and teaching philosophy of the teacher will be displayed here.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        color: '#555',
    },
});

