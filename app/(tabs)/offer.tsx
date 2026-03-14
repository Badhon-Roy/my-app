import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Image } from 'expo-image';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { FeatureSection } from '@/components/FeatureSection';

const { width } = Dimensions.get('window');

const lightningDeals = [
  {
    id: 'ld1',
    name: 'Premium Headphones',
    price: '$149',
    oldPrice: '$299',
    discount: '-50%',
    sold: 85,
    left: 4,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ld2',
    name: 'Smart Watch Elite',
    price: '$199',
    oldPrice: '$399',
    discount: '-50%',
    sold: 92,
    left: 3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ld3',
    name: 'Wireless Mini Speaker',
    price: '$45',
    oldPrice: '$99',
    discount: '-55%',
    sold: 67,
    left: 8,
    image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ld4',
    name: 'Ergonomic Keyboard',
    price: '$75',
    oldPrice: '$150',
    discount: '-50%',
    sold: 25,
    left: 12,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&auto=format&fit=crop',
  },
];

export default function OfferScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#00316F]">
      <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="bg-[#00316F] px-8 pt-10 pb-16">
          {/* Badge */}
          <View className="flex-row items-center bg-[#1A4B85] self-start px-4 py-2 rounded-full mb-8 mt-8">
            <IconSymbol name="tag" size={14} color="#FFD700" />
            <Text className="text-white text-[10px] font-bold uppercase tracking-[2px] ml-2">Exclusive Member Deals</Text>
          </View>

          <View className="flex-row items-end">
            <View className="flex-[1.2]">
              <Text className="text-white text-[30px] font-bold">
                Small Prices, {"\n"}
                <Text className="text-[#00A1FF]">Big Happiness</Text>
              </Text>
              
              <Text className="text-white/50 text-[15px] font-bold leading-6 mt-2 mb-8 max-w-[320px]">
                Discover unmissable deals on top brands. From tech essentials to lifestyle favorites, we've reduced everything.
              </Text>

              <View className="flex-row items-center">
                <TouchableOpacity className="bg-[#FAF12E] px-8 py-4 rounded-lg shadow-2xl shadow-yellow-500/40 active:opacity-90">
                  <Text className="text-slate-900 font-semibold text-sm">Shop All Offers</Text>
                </TouchableOpacity>

                <View className="bg-[#1A4B85]/50 px-5 py-4 rounded-lg border border-white/10 ml-4 items-center justify-center min-w-[100px]">
                  <Text className="text-white font-semibold text-sm tracking-widest">04:24:36</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Lightning Deals Section */}
        <View className="pt-12 px-6 pb-20 bg-white rounded-t-[40px] -mt-8 mx-2">
          <View className="flex-row justify-between items-end mb-10">
            <View className="flex-row items-center">
              <View className="bg-red-50 p-3 rounded-2xl mr-4 shadow-sm">
                <IconSymbol name="tag" size={24} color="#FF4B4B" />
              </View>
              <View>
                <Text className="text-slate-900 text-2xl font-black tracking-tight">Lightning Deals</Text>
                <Text className="text-slate-400 text-xs font-bold mt-0.5">Updated every hour. Fastest fingers first!</Text>
              </View>
            </View>
            <View className="flex-row items-center mr-2">
               <View className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
               <Text className="text-slate-400 text-[10px] font-black uppercase">3.4k Live</Text>
            </View>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {lightningDeals.map((item) => (
              <View key={item.id} className="w-[48%] mb-10">
                <View className="bg-slate-50 rounded-[28px] overflow-hidden mb-5 relative shadow-sm border border-slate-100">
                   <View className="absolute top-3 left-3 bg-[#FF4B4B] px-2.5 py-1.5 rounded-xl z-10 shadow-lg">
                      <Text className="text-white font-black text-[10px]">{item.discount}</Text>
                   </View>
                   <Image source={item.image} className="w-full h-48" contentFit="cover" />
                </View>

                <Text className="text-slate-900 font-black text-sm mb-2 px-1" numberOfLines={1}>{item.name}</Text>
                
                <View className="flex-row items-center gap-2 mb-4 px-1">
                  <Text className="text-slate-900 font-black text-xl">{item.price}</Text>
                  <Text className="text-slate-300 text-xs font-bold line-through">{item.oldPrice}</Text>
                </View>

                <View className="flex-row justify-between items-center mb-2 px-1">
                   <Text className="text-slate-400 text-[9px] font-black uppercase">Sold: {item.sold}%</Text>
                   <Text className="text-[#FF4B4B] text-[9px] font-black uppercase">Only {item.left} Left</Text>
                </View>
                
                {/* Progress Bar */}
                <View className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-8 mx-1">
                   <View style={{ width: `${item.sold}%` }} className="h-full bg-[#00A1FF]" />
                </View>

                <TouchableOpacity className="flex-row items-center justify-center border-2 border-slate-100 py-3.5 rounded-lg bg-[#00A1FF] shadow-sm">
                   <IconSymbol name="cart.fill" size={16} color="#ffffff" />
                   <Text className="text-white font-semibold text-[12px] ml-2">Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Promo Codes & Notification Section */}
        <View className="px-6 pb-20 pt-10 border-t border-slate-50 bg-[#FBFBFC]">
          <View className="flex-row items-center mb-10">
            <View className="bg-[#00316F] p-2 rounded-lg mr-3">
               <IconSymbol name="tag.fill" size={16} color="white" />
            </View>
            <Text className="text-[#00316F] text-xl font-black">Active Promo Codes</Text>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-6">
            {/* Promo Code Cards */}
            {[
              { title: '20% OFF Site-wide', sub: 'On orders over $100', code: 'MAREEDO20' },
              { title: 'FREE Shipping', sub: 'On orders over $0', code: 'FIRSTBUY' },
              { title: '$50 OFF Electronics', sub: 'On orders over $500', code: 'TECHSAVVY' },
            ].map((promo, idx) => (
              <View key={idx} className="w-full bg-white border border-dashed border-slate-200 rounded-2xl p-6 shadow-sm">
                <Text className="text-slate-300 text-[9px] font-black uppercase tracking-wider mb-1">Limited Offer</Text>
                <Text className="text-[#00316F] font-black text-lg mb-1">{promo.title}</Text>
                <Text className="text-slate-400 text-xs font-semibold mb-6">{promo.sub}</Text>
                
                <View className="flex-row items-center bg-slate-50 rounded-xl px-4 py-3.5 border border-slate-100">
                  <Text className="flex-1 text-[#00316F] font-black tracking-widest text-sm">{promo.code}</Text>
                  <TouchableOpacity className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm active:bg-slate-50">
                    <IconSymbol name="doc.on.doc" size={16} color="#00A1FF" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            {/* Notification Box */}
            <View className="w-full bg-[#002654] rounded p-10 mt-10 relative overflow-hidden">
                {/* Abstract Flash Icon Background */}
                <View className="absolute right-[-20] bottom-[-20] opacity-10">
                  <IconSymbol name="tag.fill" size={200} color="white" />
                </View>

                <Text className="text-white text-3xl font-black leading-9 tracking-tight mb-4">
                  Never Miss{"\n"}A Flash Sale
                </Text>

                <Text className="text-white/50 text-sm font-bold leading-5 mb-10">
                  Get real-time alerts on your phone when new offers go live.
                </Text>

                <View className="bg-white/10 rounded-2xl px-6 py-5 border border-white/20 mb-6">
                   <Text className="text-white/30 font-bold text-sm">name@email.com</Text>
                </View>

                <TouchableOpacity className="bg-[#FAF12E] py-5 rounded-2xl items-center justify-center shadow-xl shadow-yellow-500/20 active:opacity-90">
                  <Text className="text-slate-900 font-black text-base uppercase tracking-wider">Notify Me</Text>
                </TouchableOpacity>

                <Text className="text-white/20 text-[10px] font-bold text-center mt-8">
                  By subscribing you agree to our Terms & Privacy Policy.
                </Text>
            </View>
          </View>
        <FeatureSection/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

