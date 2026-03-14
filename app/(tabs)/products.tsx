import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useRouter } from "expo-router";

interface ProductDetail {
  id: string;
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
  stock: string;
  description: string;
  specs: string[];
}

const productsData: ProductDetail[] = [
  {
    id: "1",
    brand: "Sonos",
    name: "Samsung Galaxy S25 Ultra 5G - 256GB - Titanium Silver Blue + 1 year extra warranty",
    price: "$238.85",
    oldPrice: "$245.8",
    discount: "8%",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop",
    rating: 4,
    reviews: 1356,
    stock: "In stock",
    description: "The Samsung Galaxy S25 Ultra is the flagship of the new S25 series. The...",
    specs: ["2025", "Screen size: 6.9 in", "256 GB storage", "Camera: 200 Megapixel", "SDRAM: 12 GB", "Android 15"],
  },
  {
    id: "2",
    brand: "Adam's House",
    name: "Samsung Galaxy S25 Ultra 5G - 256GB - Titanium Silver Blue + 1 year extra warranty",
    price: "$238.85",
    oldPrice: "$245.8",
    discount: "8%",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
    rating: 4,
    reviews: 1356,
    stock: "In stock",
    description: "The Samsung Galaxy S25 Ultra is the flagship of the new S25 series. The...",
    specs: ["2025", "Screen size: 6.9 in", "256 GB storage", "Camera: 200 Megapixel", "SDRAM: 12 GB", "Android 15"],
  },
  {
    id: "3",
    brand: "Store man",
    name: "Samsung Galaxy S25 Ultra 5G - 256GB - Titanium Silver Blue + 1 year extra warranty",
    price: "$238.85",
    oldPrice: "$245.8",
    discount: "8%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    rating: 4,
    reviews: 1356,
    stock: "In stock",
    description: "The Samsung Galaxy S25 Ultra is the flagship of the new S25 series. The...",
    specs: ["2025", "Screen size: 6.9 in", "256 GB storage", "Camera: 200 Megapixel", "SDRAM: 12 GB", "Android 15"],
  },
  {
      id: "4",
      brand: "Apple",
      name: "iPhone 15 Pro Max - 1TB - Natural Titanium",
      price: "$1199.00",
      oldPrice: "$1299.00",
      discount: "7%",
      image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=400&auto=format&fit=crop",
      rating: 5,
      reviews: 2450,
      stock: "In stock",
      description: "Experience the ultimate performance with the A17 Pro chip and advanced camera system.",
      specs: ["2024", "Screen size: 6.7 in", "1 TB storage", "Camera: 48 Megapixel", "Titanium Design", "iOS 17"],
  },
  {
      id: "5",
      brand: "Sony",
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: "$348.00",
      oldPrice: "$399.00",
      discount: "13%",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
      rating: 5,
      reviews: 890,
      stock: "Limited stock",
      description: "Industry leading noise canceling with two processors controlling 8 microphones.",
      specs: ["30h Battery", "Noise Canceling", "Bluetooth 5.2", "Built-in Alexa", "Touch Sensor"],
  },
  {
      id: "6",
      brand: "Nintendo",
      name: "Nintendo Switch OLED Model - White",
      price: "$349.99",
      oldPrice: "$399.00",
      discount: "12%",
      image: "https://img.freepik.com/premium-photo/blue-black-game-controller-with-black-box-that-says-sony-it_1248904-232.jpg?uid=R191150260&ga=GA1.1.766574978.1765429508&semt=ais_hybrid&w=740&q=80",
      rating: 4,
      reviews: 5400,
      stock: "In stock",
      description: "Enjoy your favorite games anytime, anywhere with a vibrant OLED screen.",
      specs: ["7-inch OLED", "64 GB", "Enhanced Audio", "Wide Stand"],
  },
  {
      id: "7",
      brand: "Samsung",
      name: "Samsung Galaxy Watch 6 Classic - 43mm",
      price: "$299.00",
      oldPrice: "$349.00",
      discount: "14%",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
      rating: 4,
      reviews: 420,
      stock: "In stock",
      description: "The classic look you love, with our most advanced health tracking yet.",
      specs: ["Bezel Control", "Sleep Coaching", "BIA Sensor", "LTE Support"],
  }
];

const Products = () => {
  const router = useRouter();
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }: { item: ProductDetail }) => {
    const isWishlisted = !!wishlisted[item.id];

    return (
      <View className="flex-row bg-white p-4 mb-4 mx-5 rounded border border-slate-100 shadow-sm shadow-slate-200">
        {/* Left Side: Image & Badge */}
        <View className="w-32 mr-4">
          <View className="relative bg-slate-50 rounded-xl overflow-hidden h-32 items-center justify-center">
            {/* Discount Badge */}
            <View className="absolute top-0 left-0 bg-[#FF6B6B] px-2 py-1 rounded-br-lg z-20">
              <Text className="text-white text-[10px] font-black">{item.discount}</Text>
            </View>
            
            {/* Wishlist Button */}
            <TouchableOpacity
              onPress={() => toggleWishlist(item.id)}
              className="absolute top-2 right-2 z-20 bg-white shadow-sm p-1.5 rounded-full"
            >
              <IconSymbol
                name={isWishlisted ? "heart.fill" : "heart"}
                size={14}
                color="#FF6B6B"
              />
            </TouchableOpacity>

            <Image
              source={item.image}
              className="w-28 h-28"
              contentFit="contain"
            />
          </View>
        </View>

        {/* Right Side: Details */}
        <View className="flex-1">
          <Text className="text-slate-400 text-[11px] font-medium mb-1">
            {item.brand}
          </Text>
          <Text className="text-slate-900 text-sm font-bold mb-2 leading-tight" numberOfLines={2}>
            {item.name}
          </Text>

          {/* Specs */}
          <View className="flex-row flex-wrap items-center mb-2">
            {item.specs.map((spec, index) => (
              <React.Fragment key={index}>
                <Text className="text-slate-400 text-[10px]">{spec}</Text>
                {index < item.specs.length - 1 && (
                  <Text className="text-slate-300 text-[10px] mx-1">•</Text>
                )}
              </React.Fragment>
            ))}
          </View>

          {/* Rating */}
          <View className="flex-row items-center mb-2">
            <View className="flex-row mr-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <IconSymbol
                  key={s}
                  name={s <= item.rating ? "star.fill" : "star"}
                  size={12}
                  color={s <= item.rating ? "#FFD700" : "#E2E8F0"}
                />
              ))}
            </View>
            <Text className="text-slate-400 text-[10px]">({item.reviews})</Text>
            
            <View className="ml-2 border border-green-100 bg-green-50 px-2 py-0.5 rounded">
              <Text className="text-green-600 text-[9px] font-bold">{item.stock}</Text>
            </View>
          </View>

          {/* Description Snippet */}
          <Text className="text-slate-500 text-[11px] mb-3" numberOfLines={1}>
            {item.description}
          </Text>

          {/* Price and Actions */}
          <View className="flex-col justify-between">
            <View className="flex-row items-center justify-start gap-3 mb-1">
              <Text className="text-[#00A1FF] font-black text-xl leading-tight">
                {item.price}
              </Text>
              <Text className="text-slate-300 text-[13px] line-through font-bold">
                {item.oldPrice}
              </Text>
            </View>
            

            <View className="flex-row items-center gap-4">
               <TouchableOpacity className="flex-row items-center">
                <IconSymbol name="chevron.left.forwardslash.chevron.right" size={12} color="#94A3B8" />
                <Text className="text-slate-400 text-[11px] font-black ml-1.5">Add Compare</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-[#00A1FF] flex-row items-center px-5 py-2 rounded shadow-md border border-[#00A1FF]">
                <IconSymbol name="cart.fill" size={14} color="white" />
                <Text className="text-white text-[12px] font-black ml-2">Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="px-5 pt-3 pb-4 flex-row items-center gap-3 bg-white shadow-sm shadow-slate-200">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
           <IconSymbol name="chevron.right" size={24} color="#1E293B" style={{ transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
        
        <View className="flex-1 flex-row items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
          <IconSymbol name="magnifyingglass" size={18} color="#64748B" />
          <TextInput
            placeholder="Search products..."
            className="flex-1 ml-2 text-slate-700 font-medium"
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        <TouchableOpacity className="bg-slate-50 border border-slate-100 p-3 rounded-2xl">
          <IconSymbol name="bell" size={20} color="#1E293B" />
        </TouchableOpacity>
      </View>

      {/* Main List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5 py-4">
            <Text className="text-xl font-black text-[#001D4A] tracking-tight">
              Our Products
            </Text>
            <Text className="text-slate-400 text-xs font-medium">
              Found {filteredProducts.length} items for you
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View className="items-center justify-center pt-20">
            <Text className="text-slate-400 font-bold">No products found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Products;