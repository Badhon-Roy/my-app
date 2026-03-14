import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

const features = [
  {
    icon: 'tag',
    title: 'Best prices & offers',
    subtitle: 'Orders $50 or more',
    iconColor: '#34D399', // Emerald/Green
  },
  {
    icon: 'truck.fill',
    title: 'Free delivery',
    subtitle: '24/7 amazing services',
    iconColor: '#FBBF24', // Amber/Yellow
  },
  {
    icon: 'gift.fill',
    title: 'Great daily deal',
    subtitle: 'When you sign up',
    iconColor: '#F59E0B', // Orange/Amber
  },
  {
    icon: 'arrow.triangle.2.circlepath',
    title: 'Easy returns',
    subtitle: 'Within 30 days',
    iconColor: '#10B981', // Emerald
  },
];

export const FeatureSection = () => {
  return (
    <View className="mt-8">
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        className="flex-row"
      >
        {features.map((feature, idx) => (
          <View 
            key={idx}
            className="flex-row items-center bg-[#0D2A4A] px-5 py-4 rounded-xl mr-3"
            style={{ width: 230 }} // Fixed width for consistent horizontal scrolling items
          >
            <View className="mr-4">
               <IconSymbol name={feature.icon as any} size={28} color={feature.iconColor} />
            </View>
            <View>
              <Text className="text-white font-black text-[13px]">{feature.title}</Text>
              <Text className="text-white/60 text-[11px] font-medium mt-0.5">{feature.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
