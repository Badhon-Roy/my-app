import { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import { IconSymbol } from "./ui/icon-symbol";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.42;

export interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  autoSlide?: boolean;
}

export const ProductSection = ({ title, products, autoSlide = false }: ProductSectionProps) => {
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= products.length) nextIndex = 0;
      
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSlide, activeIndex, products.length]);

  const renderItem = ({ item }: { item: Product }) => {
    const isWishlisted = !!wishlisted[item.id];

    return (
      <View
        style={{ width: CARD_WIDTH }}
        className="bg-white rounded-lg p-3 mr-4 border border-slate-100 shadow-sm shadow-slate-200 relative"
      >
        {/* Discount Badge */}
        <View className="absolute top-0 left-0 bg-[#FF6B6B] px-3 py-1.5 rounded-br-2xl rounded-tl-2xl z-20">
          <Text className="text-white text-[11px] font-black">
            {item.discount}
          </Text>
        </View>

        {/* Wishlist Button */}
        <TouchableOpacity
          onPress={() => toggleWishlist(item.id)}
          className="absolute top-3 right-3 z-20 shadow-sm p-2 rounded-full border border-slate-50 bg-[#FFFFFF99]"
        >
          <IconSymbol
            name={isWishlisted ? "heart.fill" : "heart"}
            size={16}
            color="#FF6B6B"
          />
        </TouchableOpacity>

        {/* Product Image */}
        <View className="h-40 items-center justify-center mb-4 mt-2">
          <Image source={item.image} className="w-full h-40" contentFit="contain" />
        </View>

        {/* Product Info */}
        <Text
          className="text-[13px] font-bold text-slate-900 mb-3 h-10"
          numberOfLines={2}
        >
          {item.name}
        </Text>

        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-[#00A1FF] font-black text-base">
              {item.price}
            </Text>
            <Text className="text-slate-300 text-[11px] line-through font-bold">
              {item.oldPrice}
            </Text>
          </View>
          <TouchableOpacity className="bg-[#00A1FF] flex-row items-center px-4 py-2.5 rounded-lg">
            <IconSymbol name="cart.fill" size={14} color="white" />
            <Text className="text-white text-[12px] font-black ml-1.5">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="mt-10 px-5 relative">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-black text-[#001D4A] tracking-tight">
          {title}
        </Text>
      </View>

      <View className="relative">
        <FlatList
          ref={flatListRef}
          data={products}
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
               if (nextIndex >= products.length) nextIndex = 0;
               flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
               setActiveIndex(nextIndex);
            }}
            className="bg-white w-10 h-10 rounded-full items-center justify-center shadow-lg border border-slate-100"
          >
            <IconSymbol name="chevron.right" size={20} color="#00A1FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
