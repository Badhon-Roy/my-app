import { Image } from "expo-image";
import React, { useState, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.65;
const CARD_HEIGHT = 200;

const brands = [
  {
    id: "1",
    name: "Dyson",
    description: "Our mission is simple: we solve problems",
    bgImage:
      "https://img.freepik.com/free-photo/young-woman-with-rechargeable-vacuum-cleaner-cleaning-home_1303-27170.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Dyson-logo.png",
  },
  {
    id: "2",
    name: "Elho",
    description: "Give room to nature",
    bgImage:
      "https://img.freepik.com/free-photo/diverse-people-thinking-planning-marketing-brand-concept_53876-64952.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80",
    logo: "https://logo.clearbit.com/elho.com",
  },
  {
    id: "3",
    name: "Linksys",
    description: "Connect and stay connected",
    bgImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Linksys_logo.svg/1200px-Linksys_logo.svg.png",
  },
  {
    id: "4",
    name: "Google Pixel",
    description: "Discover Google Pixel",
    bgImage:
      "https://img.freepik.com/free-photo/bucharest-romania-july-30th-2024-young-man-clicks-facebook-page-bookmark_482257-116836.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
];

export const BrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: (typeof brands)[0] }) => (
    <View
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      className="mr-4 rounded-3xl overflow-hidden relative"
    >
      {/* Background Image */}
      <Image
        source={item.bgImage}
        className="w-full h-full"
        contentFit="cover"
      />

      {/* Glassmorphic Overlay */}
      <View className="absolute bottom-4 left-4 right-4 flex-row items-center h-14">
        {/* Logo box */}
        <View className="bg-white w-14 h-14 rounded-2xl items-center justify-center p-2 shadow-sm">
          <Image
            source={item.logo}
            className="w-full h-full"
            contentFit="contain"
          />
        </View>

        {/* Text box */}
        <View className="flex-1 ml-2 bg-white/70 h-14 rounded-2xl px-3 justify-center border border-white/20">
          <Text
            className="text-slate-900 font-black text-[12px]"
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text
            className="text-slate-600 text-[9px] font-bold"
            numberOfLines={1}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="mt-10 px-5 mb-10 relative">
      <Text className="text-2xl font-black text-[#001D4A] tracking-tight mb-6">
        More of our brands
      </Text>

      <View className="relative">
        <FlatList
          ref={flatListRef}
          data={brands}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingRight: 40 }}
          getItemLayout={(_, index) => ({
            length: CARD_WIDTH + 16,
            offset: (CARD_WIDTH + 16) * index,
            index,
          })}
        />

        {/* Navigation Arrow - Vertically Centered relative to cards */}
        <View className="absolute -right-3 top-1/2 -translate-y-8 z-30">
          <TouchableOpacity 
            onPress={() => {
              let nextIndex = activeIndex + 1;
              if (nextIndex >= brands.length) nextIndex = 0;
              flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
              setActiveIndex(nextIndex);
            }}
            className="bg-white w-10 h-10 rounded-full items-center justify-center shadow-lg border border-slate-100 active:opacity-80"
          >
            <IconSymbol name="chevron.right" size={20} color="#00A1FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
