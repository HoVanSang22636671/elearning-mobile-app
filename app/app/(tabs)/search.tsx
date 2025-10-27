import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import SectionHeader from '../../components/SectionHeader';

// Đây là màn hình Search. Bạn sẽ code 2 màn hình
// (Course Searching & Course Listing - Search Results) tại đây
// hoặc điều hướng từ đây.

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Bạn có thể dùng lại SectionHeader ở đây */}
                <SectionHeader title="Search" />
                <Text style={styles.text}>Màn hình Tìm kiếm (Search Screen)</Text>
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
        paddingTop: 40,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    }
});
