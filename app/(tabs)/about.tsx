import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="bg-slate-900 px-8 py-20 items-center relative overflow-hidden">
            <View className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full" />
            <Text className="text-blue-400 font-black tracking-[4px] uppercase text-[10px] mb-4">Our Vision</Text>
            <Text className="text-white text-5xl font-black text-center leading-[56px] tracking-tighter">Crafting the{"\n"}Future.</Text>
        </View>

        <View className="px-8 -mt-10">
            <View className="bg-white rounded-[56px] p-10 shadow-2xl shadow-slate-200 border border-slate-50">
                <Text className="text-slate-800 text-xl font-bold leading-8 mb-8">
                    We believe that technology should be a seamless extension of humanity—accessible, powerful, and undeniably beautiful.
                </Text>
                
                <View className="h-[2px] bg-slate-50 w-full mb-10" />

                <Text className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Core Values</Text>
                
                <View>
                    {[
                        { title: 'Innovation', desc: 'Pushing boundaries of what is possible.', color: 'text-blue-600' },
                        { title: 'Quality', desc: 'Obsessing over every pixel and line of code.', color: 'text-purple-600' },
                        { title: 'Privacy', desc: 'Your data belongs to you, and no one else.', color: 'text-emerald-600' },
                    ].map((val) => (
                        <View key={val.title} className="mb-10">
                            <Text className={`font-black text-[11px] uppercase tracking-widest mb-1 ${val.color}`}>{val.title}</Text>
                            <Text className="text-slate-500 font-bold leading-7 text-[15px]">{val.desc}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>

        <View className="p-16 items-center">
            <Text className="text-slate-100 font-black tracking-tighter text-9xl">2026</Text>
            <View className="bg-slate-900 px-6 py-2 rounded-full -mt-10 border-4 border-white shadow-xl">
                 <Text className="text-white font-black text-[10px] uppercase tracking-widest">Future Ready</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}