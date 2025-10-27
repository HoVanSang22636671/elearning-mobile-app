import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function MyCoursesScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>Màn hình Khóa học của tôi</Text>
                <Text style={styles.subtext}>(Phần của Người 2)</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtext: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8,
    }
});
