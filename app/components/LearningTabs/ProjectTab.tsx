import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

// --- DỮ LIỆU GIẢ ---
const MOCK_PROJECTS = [
    { id: 'p1', title: 'Wireframe', author: 'Ramono Wultschners', imageUrl: 'https://placehold.co/200x120/e0e0e0/black?text=Wireframe' },
    { id: 'p2', title: 'Personal', author: 'Thomas Carlson', imageUrl: 'https://placehold.co/200x120/c2ffc2/black?text=Personal' },
    { id: 'p3', title: 'Wireframe 2', author: 'Ramono Wultschners', imageUrl: 'https://placehold.co/200x120/c2c2ff/black?text=Wireframe+2' },
];

const MOCK_RESOURCES = [
    { id: 'r1', title: 'Document 1.txt', size: '612 Kb', icon: 'document-text-outline' },
    { id: 'r2', title: 'Document 2.pdf', size: '35 Mb', icon: 'document-attach-outline' },
];
// --- Hết dữ liệu giả ---

// Component con cho card Project
const ProjectCard = ({ title, author, imageUrl }: { title: string, author: string, imageUrl: string }) => (
    <View style={styles.projectCard}>
        <Image source={{ uri: imageUrl }} style={styles.projectImage} />
        <Text style={styles.projectTitle}>{title}</Text>
        <Text style={styles.projectAuthor}>{author}</Text>
    </View>
);

// Component con cho file Resource
const ResourceItem = ({ title, size, icon }: { title: string, size: string, icon: any }) => (
    <View style={styles.resourceItem}>
        <Ionicons name={icon} size={24} color="#888" style={styles.resourceIcon} />
        <View style={styles.resourceInfo}>
            <Text style={styles.resourceTitle}>{title}</Text>
            <Text style={styles.resourceSize}>{size}</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name="download-outline" size={24} color="#00A89C" />
        </TouchableOpacity>
    </View>
);

export default function LearningProjectsTab() {
    return (
        <ScrollView style={styles.container}>
            {/* Nút Upload */}
            <TouchableOpacity style={styles.uploadButton}>
                <Ionicons name="cloud-upload-outline" size={30} color="#00A89C" />
                <Text style={styles.uploadText}>Upload your project here</Text>
            </TouchableOpacity>

            {/* Danh sách Student Projects */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>12 Student Projects</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={MOCK_PROJECTS}
                renderItem={({ item }) => (
                    <ProjectCard title={item.title} author={item.author} imageUrl={item.imageUrl} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            />

            {/* Project Description */}
            <View style={styles.paddingContainer}>
                <Text style={styles.sectionTitle}>Project Description</Text>
                <Text style={styles.description}>
                    Convalis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui, risus...
                    <Text style={styles.seeMore}> See more</Text>
                </Text>
            </View>

            {/* Resources */}
            <View style={styles.paddingContainer}>
                <Text style={styles.sectionTitle}>Resources (2)</Text>
                {MOCK_RESOURCES.map((res) => (
                    <ResourceItem key={res.id} title={res.title} size={res.size} icon={res.icon} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    paddingContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    uploadButton: {
        backgroundColor: '#F0FBFB',
        borderStyle: 'dashed',
        borderWidth: 1.5,
        borderColor: '#00A89C',
        borderRadius: 12,
        padding: 20,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadText: {
        color: '#00A89C',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#333',
    },
    viewAll: {
        fontSize: 14,
        color: '#00A89C',
        fontWeight: '500',
    },
    projectCard: {
        width: 200,
        marginRight: 16,
    },
    projectImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        marginBottom: 8,
    },
    projectTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
    projectAuthor: {
        fontSize: 13,
        color: '#888',
    },
    description: {
        fontSize: 14.5,
        color: '#555',
        lineHeight: 22,
    },
    seeMore: {
        color: '#00A89C',
        fontWeight: '600',
    },
    resourceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },
    resourceIcon: {
        marginRight: 12,
    },
    resourceInfo: {
        flex: 1,
    },
    resourceTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
    resourceSize: {
        fontSize: 13,
        color: '#888',
    },
});

