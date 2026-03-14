import { Image } from "expo-image";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CAROUSEL_WIDTH = width - 40; // Horizontal padding total 40

const banners = [
  {
    id: "1",
    title: "iPhone 16 pro Max",
    subtitle: "Exclusive Deals",
    description: "Save up to 29% Today",
    image: require("@/assets/images/iphone-banner.png"),
    bgColor: "#001D4A",
    accentColor: "#00A3FF",
    badge: "29% OFF",
  },
  {
    id: "2",
    title: "MacBook Air M3",
    subtitle: "New Arrival",
    description: "The thinnest laptop ever.",
    image: require("@/assets/images/macbook-m3.png"),
    bgColor: "#0F172A",
    accentColor: "#7C3AED",
    badge: "NEW",
  },
  {
    id: "3",
    title: "iPad Pro 2026",
    subtitle: "Latest Model",
    description: "Powerful, sleek, and versatile for all your creative needs.",
    image: require("@/assets/images/iphone-banner.png"),
    bgColor: "#1E293B",
    accentColor: "#14B8A6",
    badge: "HOT",
  },
];

export const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= banners.length) nextIndex = 0;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollOffset / CAROUSEL_WIDTH);
    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  const renderItem = ({ item }: { item: (typeof banners)[0] }) => (
    <View style={{ width: CAROUSEL_WIDTH }} className="px-1">
      <View
        style={{ backgroundColor: item.bgColor }}
        className="relative rounded-[10px] h-[220px] overflow-hidden p-7"
      >
        {/* Decorative Circle */}
        <View
          style={{ backgroundColor: item.accentColor }}
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
        />

        <View className="flex-row items-center h-full z-10">
          {/* Content */}
          <View className="flex-[1.4] justify-center">
            <Text className="text-white/60 text-[10px] font-black tracking-[3px] uppercase mb-1">
              {item.subtitle}
            </Text>
            <Text className="text-white text-3xl font-black leading-[36px] mb-2 tracking-tight w-[90%]">
              {item.title}
            </Text>
            <Text className="text-white/80 text-sm font-bold mb-6 line-clamp-2 w-[80%]">
              {item.description}
            </Text>

            <TouchableOpacity
              style={{ backgroundColor: item.accentColor }}
              className="py-3.5 px-7 rounded-2xl self-start shadow-xl"
            >
              <Text className="text-white font-black text-[11px] tracking-widest uppercase">
                Explore
              </Text>
            </TouchableOpacity>
          </View>

          {/* Image */}
          <View className="flex-1 items-end justify-center relative">
            <Image
              source={item.image}
              className="w-40 h-40 rounded"
              contentFit="contain"
            />
            {item.badge && (
              <View
                style={{ transform: [{ rotate: "-10deg" }] }}
                className="absolute top-0 -left-6 bg-red-600 px-3 py-1.5 rounded-xl border-2 border-slate-900 shadow-lg"
              >
                <Text className="text-white font-black text-[10px]">
                  {item.badge}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="mt-4">
      <FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={(item) => item.id}
        snapToAlignment="center"
        decelerationRate="fast"
      />

      {/* Pagination dots */}
      <View className="flex-row justify-center mt-6 gap-2">
        {banners.map((_, index) => (
          <View
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-blue-600" : "w-1.5 bg-slate-300"}`}
          />
        ))}
      </View>
    </View>
  );
};
