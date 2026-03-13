import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';

const categories = [
  { name: 'Phones', icon: 'iphone', color: 'bg-blue-50', accent: '#2563EB', count: '124 Products' },
  { name: 'Laptops', icon: 'laptopcomputer', color: 'bg-purple-50', accent: '#7C3AED', count: '86 Products' },
  { name: 'Audio', icon: 'headphones', color: 'bg-orange-50', accent: '#EA580C', count: '92 Products' },
  { name: 'Tablets', icon: 'ipad', color: 'bg-green-50', accent: '#16A34A', count: '45 Products' },
  { name: 'Gaming', icon: 'gamecontroller', color: 'bg-rose-50', accent: '#E11D48', count: '67 Products' },
  { name: 'Home', icon: 'house', color: 'bg-cyan-50', accent: '#0891B2', count: '38 Products' },
  { name: 'Watches', icon: '⌚', isEmoji: true, color: 'bg-slate-50', accent: '#334155', count: '54 Products' },
  { name: 'More', icon: 'chevron.right', color: 'bg-zinc-50', accent: '#000', count: 'Explore' },
];

export default function CategoriesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Premium Header */}
      <View className="px-6 py-5 flex-row items-center justify-between border-b border-slate-50">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="w-12 h-12 rounded-2xl bg-slate-50 items-center justify-center border border-slate-100"
        >
          <IconSymbol name="chevron.right" size={20} color="#0F172A" style={{ transform: [{ rotate: '180deg'}] }} />
        </TouchableOpacity>
        <Text className="text-xl font-black text-slate-900 tracking-tight">All Categories</Text>
        <TouchableOpacity className="w-12 h-12 rounded-2xl bg-white items-center justify-center border border-slate-100 shadow-sm">
          <IconSymbol name="magnifyingglass" size={20} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1 px-5 pt-6" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className="flex-row flex-wrap justify-between">
          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat.name} 
              className="w-[48%] mb-6"
              activeOpacity={0.8}
            >
              <View className={`${cat.color} p-6 rounded-[48px] items-center border border-white shadow-xl shadow-slate-200/50`}>
                <View className="w-20 h-20 bg-white rounded-[32px] items-center justify-center shadow-sm mb-5">
                  {cat.isEmoji ? (
                    <Text className="text-4xl">{cat.icon}</Text>
                  ) : (
                    <IconSymbol name={cat.icon as any} size={36} color={cat.accent} />
                  )}
                </View>
                <Text className="text-slate-900 font-black text-base mb-1">{cat.name}</Text>
                <Text className="text-slate-400 font-bold text-[10px] uppercase tracking-tighter">{cat.count}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Stats Bar */}
      <View className="bg-slate-900 mx-5 mb-8 p-6 rounded-[32px] flex-row justify-between items-center shadow-2xl shadow-slate-900/40">
        <View>
            <Text className="text-white font-black text-lg">5,000+</Text>
            <Text className="text-white/40 font-bold text-[10px] uppercase">Verified Brands</Text>
        </View>
        <View className="h-10 w-[1px] bg-white/10" />
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-2xl shadow-lg shadow-blue-600/30">
            <Text className="text-white font-black text-xs uppercase tracking-widest">Shop All</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
