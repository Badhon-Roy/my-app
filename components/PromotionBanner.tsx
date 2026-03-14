import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const PromotionBanner = () => {
  return (
    <View className="px-5 mt-10 mb-2">
      <View 
        className="w-full h-52 rounded overflow-hidden relative flex-row items-center bg-[#001D4A] px-8"
      >
        {/* Abstract Background Shapes */}
        <View 
          className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#00A1FF] opacity-20" 
        />
        <View 
          className="absolute -left-10 bottom-[-30] w-32 h-32 rounded-full bg-[#00A1FF] opacity-10" 
        />
        
        {/* Left Section: Typography */}
        <View className="flex-[2] justify-center z-10">
          <View className="flex-row items-center mb-1">
             <View className="h-[2px] w-6 bg-[#00A1FF] mr-2" />
             <Text className="text-[#00A1FF] text-[10px] font-black uppercase tracking-[3px]">Member Exclusive</Text>
          </View>
          <Text className="text-white text-[32px] font-black tracking-tighter leading-8">
            Black{"\n"}Friday Deals
          </Text>
        </View>

        {/* Right Section: CTA & Badge */}
        <View className="flex-1 items-end justify-center z-10">
          {/* Large Stylized Badge */}
          <View className="bg-white/10 px-4 py-2 rounded border border-white/20 mb-4 items-center">
            <Text className="text-white font-black text-[22px] tracking-tighter">29% <Text className="text-[14px]">OFF</Text></Text>
          </View>

          <TouchableOpacity className="bg-[#00A1FF] px-6 py-3 rounded shadow-xl shadow-blue-500/40 active:opacity-90 w-32 mt-14">
            <Text className="text-white font-black text-[13px] tracking-tight">Shop Now</Text>
          </TouchableOpacity>
        </View>

        {/* Decorative Grid Pattern (SVG-like) */}
        <View className="absolute right-0 opacity-10">
           <View className="flex-row">
             {[...Array(5)].map((_, i) => (
               <View key={i} className="w-8 h-32 border-r border-[#00A1FF]" />
             ))}
           </View>
        </View>
      </View>
    </View>
  );
};
