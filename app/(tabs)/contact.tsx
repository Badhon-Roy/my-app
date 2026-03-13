import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ContactScreen() {
  const contactMethods = [
    { name: 'Customer Support', detail: '1-800-APPLE', icon: 'phone', color: 'bg-blue-50', tint: '#2563EB' },
    { name: 'Email Us', detail: 'support@apple.com', icon: 'envelope', color: 'bg-purple-50', tint: '#7C3AED' },
    { name: 'Twitter', detail: '@AppleSupport', icon: 'logo.twitter', color: 'bg-sky-50', tint: '#0EA5E9' },
    { name: 'Visit Store', detail: 'Find a store near you', icon: 'mappin.and.ellipse', color: 'bg-orange-50', tint: '#EA580C' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 20, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <Text className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Support</Text>
        <Text className="text-slate-400 text-lg font-bold leading-7 mb-10">We're here to help you{"\n"}reimagine what's possible.</Text>

        <View className="mb-12">
          {contactMethods.map((method) => (
            <TouchableOpacity 
              key={method.name}
              className="bg-white p-6 rounded-[36px] flex-row items-center border border-slate-50 shadow-sm shadow-slate-100 mb-5"
            >
              <View className={`${method.color} p-5 rounded-[28px] mr-5`}>
                <IconSymbol name={method.icon as any} size={28} color={method.tint} />
              </View>
              <View className="flex-1">
                <Text className="text-slate-900 font-black text-lg mb-0.5">{method.name}</Text>
                <Text className="text-slate-400 font-bold text-sm tracking-tight">{method.detail}</Text>
              </View>
              <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center">
                 <IconSymbol name="chevron.right" size={16} color="#CBD5E1" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="bg-blue-600 rounded-[44px] p-10 items-center shadow-2xl shadow-blue-600/40 relative overflow-hidden">
          <View className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          <Text className="text-white text-3xl font-black text-center mb-4 leading-tight">Expert Advice &{"\n"}Premium Repairs</Text>
          <Text className="text-blue-100 text-center font-bold text-sm mb-8 leading-6 px-4">Schedule a session at the Genius Bar or visit an authorized service provider.</Text>
          <TouchableOpacity className="bg-white py-4 px-10 rounded-[22px] shadow-xl">
            <Text className="text-blue-600 font-black text-xs uppercase tracking-widest">Start a Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}