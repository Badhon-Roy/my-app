import { BannerCarousel } from "@/components/BannerCarousel";
import { BrandsSection } from "@/components/BrandsSection";
import { GiftsSection } from "@/components/GiftsSection";
import { FeatureSection } from "@/components/FeatureSection";
import { ProductSection, Product } from "@/components/ProductSection";
import { PromotionBanner } from "@/components/PromotionBanner";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useRouter } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const topDeals: Product[] = [
  {
    id: 'td1',
    name: 'Le Chic T-shirt NOXNU C508-54 30 - Size 128',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'td2',
    name: 'Galaxy M33 (4GB | 64 GB)',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop', // Blue phone
  },
  {
    id: 'td3',
    name: 'Foster Farms Takeout Crispy Classic',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=400&auto=format&fit=crop', // Green/bag item
  },
  {
    id: 'td4',
    name: 'INFONS Folding Hair Chair for Babies',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400&auto=format&fit=crop', // Baby high chair
  },
  {
    id: 'td5',
    name: 'Organic Cage Grade A Large Eggs',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://img.freepik.com/premium-photo/high-angle-view-eggs-nest_1599079-1081.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80',
  },
];

const topPicks: Product[] = [
  {
    id: 'tp1',
    name: 'Organic Coconut Milk Premium',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=400&auto=format&fit=crop', 
  },
  {
    id: 'tp2',
    name: 'Assorted Exotic Fruit Basket',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'tp3',
    name: 'Smart Watch Series X Pro',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', 
  },
  {
    id: 'tp4',
    name: 'Narzo 5G High Performance Phone',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'tp5',
    name: 'Premium Wireless Headphones Pink',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', 
  },
];

const newInProducts: Product[] = [
  {
    id: 'ni1',
    name: 'Sony WH-1000XM5 Headphones',
    price: '$348.00',
    oldPrice: '$399.99',
    discount: '12%',
    image: 'https://img.freepik.com/free-photo/wireless-earphones-smartphone-cup-coffee_140725-8933.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 'ni2',
    name: 'Nintendo Switch OLED Model',
    price: '$349.99',
    oldPrice: '$399.00',
    discount: '10%',
    image: 'https://img.freepik.com/premium-photo/blue-black-game-controller-with-black-box-that-says-sony-it_1248904-232.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80',
  },
    {
    id: 'ni3',
    name: 'Premium Wireless Headphones Pink',
    price: '$23.85',
    oldPrice: '$25.00',
    discount: '8%',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', 
  },
];

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Modern Auto-Slide Banner */}
        <View className="px-5">
          <BannerCarousel />
        </View>

   

        {/* Categories Section */}
        <View className="mt-8 px-5">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-xl font-semibold text-slate-900 tracking-tight">
              Categories
            </Text>
            <TouchableOpacity onPress={() => router.push("/categories")}>
              <Text className="text-blue-600 font-bold">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row pb-2"
          >
            {["Phones", "Laptops", "Watches", "Audio", "Gaming"].map(
              (cat, idx) => (
                <TouchableOpacity
                  key={cat}
                  className={`items-center mr-4 px-6 py-3.5 rounded-lg border ${idx === 0 ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30" : "bg-white border-slate-100 shadow-sm"}`}
                >
                  <Text
                    className={`font-black tracking-tight ${idx === 0 ? "text-white" : "text-slate-600"}`}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>

        {/* Top Deals Section */}
        <ProductSection 
          title="Top deals" 
          products={topDeals} 
          autoSlide={true}
        />

        {/* Our Top Picks Section */}
        <ProductSection 
          title="Our Top Picks" 
          products={topPicks} 
          autoSlide={true}
        />

        {/* Black Friday Promo Banner */}
        <PromotionBanner />

        {/* New in Section */}
        <ProductSection 
          title="New in" 
          products={newInProducts} 
          autoSlide={true}
        />

        {/* Brands Section */}
        <BrandsSection />

        {/* Gifts Section */}
        <GiftsSection />

     {/* Feature Highlights Section (Trust Signals) */}
        <FeatureSection />

      </ScrollView>
    </SafeAreaView>
  );
}
