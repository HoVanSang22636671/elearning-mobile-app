import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function UXFoundationScreen() {
  const [activeTab, setActiveTab] = useState<"LESSONS" | "PROJECTS" | "Q&A">("LESSONS");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 50, marginHorizontal: 16 }}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 8 }}>UX Foundation</Text>
        <Feather name="bookmark" size={22} color="black" style={{ marginLeft: "auto" }} />
      </View>

      {/* Course Preview */}
      <Image
        source={{ uri: "https://picsum.photos/400/250" }}
        style={{ width: "100%", height: 200, borderRadius: 12, marginTop: 16 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          UX Foundation: Introduction to User Experience Design
        </Text>

        <View style={{ flexDirection: "row", marginTop: 8, alignItems: "center" }}>
          <Ionicons name="heart-outline" size={20} color="gray" />
          <Text style={{ marginLeft: 4, color: "gray" }}>231 Like</Text>
          <Ionicons name="share-outline" size={20} color="gray" style={{ marginLeft: 16 }} />
          <Text style={{ marginLeft: 4, color: "gray" }}>16 Share</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderColor: "#eee" }}>
        {["LESSONS", "PROJECTS", "Q&A"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as any)}>
            <Text
              style={{
                paddingVertical: 12,
                fontWeight: activeTab === tab ? "700" : "500",
                color: activeTab === tab ? "#00BFFF" : "#666",
                borderBottomWidth: activeTab === tab ? 2 : 0,
                borderBottomColor: "#00BFFF",
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {activeTab === "LESSONS" && <LessonsTab />}
      {activeTab === "PROJECTS" && <ProjectsTab />}
      {activeTab === "Q&A" && <QATab />}
    </ScrollView>
  );
}

/* ---------------- LESSONS ---------------- */
const lessons = [
  { id: "01", title: "Amet adipisicing consectetur", duration: "01:23 mins", section: "I - Introduction", done: true },
  { id: "02", title: "Culpa est incididunt enim id adi", duration: "01:23 mins", section: "I - Introduction", active: true },
  { id: "03", title: "Exercitation elit incididunt esse", duration: "01:23 mins", section: "II - Plan for UX Research" },
  { id: "04", title: "Duis esse ipsum laboris", duration: "01:23 mins", section: "II - Plan for UX Research" },
  { id: "05", title: "Labore minim reprehenderit pariatur", duration: "01:23 mins", section: "II - Plan for UX Research" },
];

const LessonsTab = () => (
  <View style={{ padding: 16 }}>
    {lessons.map((item, idx) => (
      <View key={idx} style={{ marginVertical: 6 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: item.active ? "#E6F7FF" : "transparent",
            borderRadius: 8,
            padding: 10,
            borderWidth: item.active ? 1 : 0,
            borderColor: "#00BFFF",
          }}
        >
          <Text style={{ width: 30, color: "#666" }}>{item.id}</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "600", color: "#333" }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>{item.duration}</Text>
          </View>
          {item.done ? (
            <Ionicons name="checkmark" size={18} color="#00BFFF" />
          ) : (
            <Ionicons name="play-outline" size={18} color="#00BFFF" />
          )}
        </View>
      </View>
    ))}
  </View>
);

/* ---------------- PROJECTS ---------------- */
const ProjectsTab = () => (
  <View style={{ padding: 16 }}>
    <Text style={{ fontWeight: "600", fontSize: 16 }}>Upload your project</Text>

    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#00BFFF",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 12,
      }}
    >
      <Ionicons name="cloud-upload-outline" size={28} color="#00BFFF" />
      <Text style={{ color: "#00BFFF", marginTop: 6 }}>Upload your project here</Text>
    </TouchableOpacity>

    <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 24 }}>12 Student Projects</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[
        { title: "Wireframe", author: "Ramono" },
        { title: "Personal", author: "Thomas" },
        { title: "Wireflow", author: "Jenny" },
      ]}
      renderItem={({ item }) => (
        <View style={{ marginRight: 12, marginTop: 12 }}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 120, height: 100, borderRadius: 8 }}
          />
          <Text style={{ fontWeight: "600", marginTop: 4 }}>{item.title}</Text>
          <Text style={{ color: "gray", fontSize: 12 }}>{item.author}</Text>
        </View>
      )}
    />

    <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 24 }}>Project Description</Text>
    <Text style={{ color: "#555", marginTop: 6 }}>
      Culpa aliquip commodo incididunt nostrud aliqua ut adipisicing officia. Laborum consequat ea reprehenderit voluptate voluptate...
    </Text>

    <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 24 }}>Resources (2)</Text>
    {[
      { name: "Document 1.txt", size: "612 Kb" },
      { name: "Document 2.pdf", size: "35 Mb" },
    ].map((res, i) => (
      <View
        key={i}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          padding: 12,
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        <View>
          <Text>{res.name}</Text>
          <Text style={{ color: "gray", fontSize: 12 }}>{res.size}</Text>
        </View>
        <Ionicons name="download-outline" size={22} color="#00BFFF" />
      </View>
    ))}
  </View>
);

/* ---------------- Q&A ---------------- */
const QATab = () => (
  <View style={{ padding: 16 }}>
    {[1, 2, 3].map((_, idx) => (
      <View
        key={idx}
        style={{
          backgroundColor: "#fafafa",
          borderRadius: 10,
          padding: 12,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontWeight: "600" }}>User {idx + 1}</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>A day ago</Text>
          </View>
        </View>
        <Text style={{ marginTop: 8, color: "#333" }}>
          Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Ionicons name="heart-outline" size={18} color="gray" />
          <Text style={{ marginLeft: 4, color: "gray" }}>23</Text>
          <Ionicons name="chatbubble-outline" size={18} color="gray" style={{ marginLeft: 16 }} />
          <Text style={{ marginLeft: 4, color: "gray" }}>5 Comment</Text>
        </View>
      </View>
    ))}

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#eee",
        paddingTop: 12,
        marginTop: 12,
      }}
    >
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/45.jpg" }}
        style={{ width: 35, height: 35, borderRadius: 18 }}
      />
      <TextInput
        placeholder="Write a Q&A..."
        style={{
          flex: 1,
          backgroundColor: "#f3f3f3",
          marginLeft: 10,
          borderRadius: 20,
          paddingHorizontal: 14,
          paddingVertical: 8,
        }}
      />
      <Ionicons name="send" size={20} color="#00BFFF" style={{ marginLeft: 8 }} />
    </View>
  </View>
);
