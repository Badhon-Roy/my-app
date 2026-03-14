import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { IconSymbol } from './ui/icon-symbol';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.45;

const gifts = [
  {
    id: '1',
    label: 'Kids Gift Shop',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=600&auto=format&fit=crop', // Girl with teddy bear
  },
  {
    id: '2',
    label: 'Birthday',
    image: 'https://img.freepik.com/free-vector/happy-birthday-card-with-balloons-party-cap_1017-31167.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80',
  },
  {
    id: '3',
    label: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop',
  },
];

export const GiftsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: typeof gifts[0] }) => (
    <TouchableOpacity className="mr-4">
      <View 
        style={{ width: CARD_WIDTH, height: 160 }}
        className="rounded-2xl overflow-hidden mb-3"
      >
        <Image
          source={item.image}
          className="w-full h-full"
          contentFit="cover"
        />
      </View>
      <Text className="text-[#001D4A] font-black text-xs">{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="mt-10 px-5 mb-10 relative">
      <Text className="text-2xl font-black text-[#001D4A] tracking-tight mb-6">Gifts for everyone</Text>
      
      <View className="relative">
        <FlatList
          ref={flatListRef}
          data={gifts}
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
        <View className="absolute -right-3 top-1/2 -translate-y-12 z-30">
          <TouchableOpacity 
            onPress={() => {
              let nextIndex = activeIndex + 1;
              if (nextIndex >= gifts.length) nextIndex = 0;
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
