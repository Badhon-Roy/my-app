import { Image } from 'expo-image';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import { BannerCarousel } from '@/components/BannerCarousel';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header / Search Bar */}
      <View className="px-5 pt-3 pb-4 flex-row items-center gap-3">
        <View className="flex-1 flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm shadow-slate-200">
          <IconSymbol name="magnifyingglass" size={18} color="#64748B" />
          <TextInput 
            placeholder="Search products..." 
            className="flex-1 ml-2 text-slate-700 font-medium" 
            placeholderTextColor="#94A3B8"
          />
        </View>
        <TouchableOpacity className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm shadow-slate-200">
          <IconSymbol name="bell" size={20} color="#1E293B" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Modern Auto-Slide Banner */}
        <View className="px-5">
          <BannerCarousel />
        </View>

        {/* Categories Section */}
        <View className="mt-8 px-5">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-xl font-semibold text-slate-900 tracking-tight">Categories</Text>
            <TouchableOpacity onPress={() => router.push('/categories')}>
                <Text className="text-blue-600 font-bold">See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row pb-2">
            {['Phones', 'Laptops', 'Watches', 'Audio', 'Gaming'].map((cat, idx) => (
              <TouchableOpacity 
                key={cat} 
                className={`items-center mr-4 px-6 py-3.5 rounded-lg border ${idx === 0 ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30' : 'bg-white border-slate-100 shadow-sm'}`}
              >
                <Text className={`font-black tracking-tight ${idx === 0 ? 'text-white' : 'text-slate-600'}`}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="mt-9 px-5">
          <Text className="text-xl font-black text-slate-900 tracking-tight mb-5">Featured Today</Text>
          <View className="flex-row flex-wrap justify-between -mx-2">
            {[
              { id: 1, name: 'AirPods Pro 2', price: '$249', img: '🎧' },
              { id: 2, name: 'Apple Watch Ultra', price: '$799', img: '⌚' },
              { id: 3, name: 'MacBook Air M3', price: '$1299', img: '💻' },
              { id: 4, name: 'iPad Pro', price: '$999', img: '📱' },
            ].map((prod) => (
              <View key={prod.id} className="w-1/2 px-2 mb-4">
                <View className="bg-white p-5 rounded-[32px] items-center border border-slate-50 shadow-sm shadow-slate-200">
                  <View className="w-24 h-24 bg-slate-50 rounded-3xl items-center justify-center mb-4">
                    <Text className="text-4xl">{prod.img}</Text>
                  </View>
                  <Text className="text-slate-900 font-black text-[13px] text-center mb-1" numberOfLines={1}>{prod.name}</Text>
                  <Text className="text-blue-600 font-black text-base">{prod.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
