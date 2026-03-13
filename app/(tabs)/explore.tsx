import { Image } from 'expo-image';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Search Header */}
      <View className="px-5 pt-3 pb-6 border-b border-slate-50">
        <Text className="text-4xl font-black text-slate-900 tracking-tighter mb-5">Discover</Text>
        <View className="flex-row items-center bg-slate-100 rounded-3xl px-5 py-4">
          <IconSymbol name="magnifyingglass" size={20} color="#64748B" />
          <TextInput 
            placeholder="Search brands, products..." 
            className="flex-1 ml-3 text-slate-800 font-bold text-base" 
            placeholderTextColor="#94A3B8"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }} className="pt-6">
        
        {/* Special Offer Banner */}
        <View className="px-5 mb-10">
          <View className="bg-slate-900 rounded-[40px] p-8 relative overflow-hidden shadow-2xl shadow-slate-900/30">
            <View className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full" />
            
            <View className="flex-row items-center z-10">
              <View className="flex-1">
                <View className="bg-blue-600 self-start px-3 py-1 rounded-xl mb-4">
                  <Text className="text-white text-[9px] font-black uppercase tracking-widest">Limited Time</Text>
                </View>
                <Text className="text-white text-3xl font-black mb-1 leading-tight">iPhone 16 Pro</Text>
                <Text className="text-white/50 text-sm font-semibold mb-6">Titanium finish. Reimagined.</Text>
                <TouchableOpacity className="bg-white py-3.5 px-6 rounded-2xl self-start shadow-lg">
                  <Text className="text-slate-900 font-black text-xs uppercase tracking-wider">View Details</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-1 items-end">
                <Image
                  source={require('@/assets/images/iphone-banner.png')}
                  className="w-36 h-36"
                  contentFit="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Explore by Category */}
        <View className="px-5">
          <Text className="text-xl font-black text-slate-900 mb-6 tracking-tight">Explore Categories</Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              { name: 'Smartphones', icon: 'iphone', color: 'bg-blue-50', iconColor: '#2563EB' },
              { name: 'Computers', icon: 'laptopcomputer', color: 'bg-purple-50', iconColor: '#7C3AED' },
              { name: 'Accessories', icon: 'headphones', color: 'bg-orange-50', iconColor: '#EA580C' },
              { name: 'Tablets', icon: 'ipad', color: 'bg-green-50', iconColor: '#16A34A' },
              { name: 'Gaming', icon: 'gamecontroller', color: 'bg-rose-50', iconColor: '#E11D48' },
              { name: 'Smart Home', icon: 'house', color: 'bg-cyan-50', iconColor: '#0891B2' },
            ].map((cat) => (
              <TouchableOpacity 
                key={cat.name} 
                className="w-[48%] mb-5"
                onPress={() => router.push('/categories')}
              >
                <View className={`${cat.color} p-8 rounded-[40px] items-center border border-white shadow-sm shadow-slate-100`}>
                  <View className="bg-white p-4 rounded-3xl shadow-sm mb-4">
                    <IconSymbol name={cat.icon as any} size={32} color={cat.iconColor} />
                  </View>
                  <Text className="font-extrabold text-slate-800 text-sm">{cat.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Brands Scroll */}
        <View className="mt-6 mb-10 px-5">
           <Text className="text-xl font-black text-slate-900 mb-6 tracking-tight">Trending Brands</Text>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {['Apple', 'Samsung', 'Sony', 'Google', 'Microsoft'].map(brand => (
                <View key={brand} className="mr-8 items-center">
                  <View className="w-16 h-16 bg-slate-50 rounded-full border border-slate-100 items-center justify-center mb-2">
                    <Text className="text-[10px] font-black text-slate-300">LOGO</Text>
                  </View>
                  <Text className="text-slate-600 font-black text-xs">{brand}</Text>
                </View>
              ))}
           </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
