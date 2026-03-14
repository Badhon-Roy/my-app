import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/ui/icon-symbol";

const About = () => {
  const stats = [
    { label: "Founded", value: "2015", icon: "house" },
    { label: "Customers", value: "500k+", icon: "person" },
    { label: "Products", value: "10k+", icon: "cart.fill" },
    { label: "Support", value: "24/7", icon: "headphones" },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We stay ahead of the curve with the latest tech and trends.",
      icon: "laptopcomputer",
      color: "#EFF6FF",
    },
    {
      title: "Quality",
      desc: "Every product is hand-picked and tested for the best experience.",
      icon: "heart.fill",
      color: "#FFF1F2",
    },
    {
      title: "Speed",
      desc: "Our delivery network ensures you get what you need, fast.",
      icon: "truck.fill",
      color: "#ECFDF5",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F5F8FF]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="bg-[#002D72] pt-20 pb-28 px-6 items-center">
          <View className="flex-row items-center bg-[#FFFFFF20] px-4 py-1.5 rounded-full mb-6 border border-[#FFFFFF30]">
            <IconSymbol name="info.circle.fill" size={14} color="white" />
            <Text className="text-white text-[11px] font-bold ml-2">Our Story</Text>
          </View>
          <Text className="text-white text-4xl font-bold text-center mb-4 tracking-tight">
            Elevating your{"\n"}Digital Lifestyle
          </Text>
          <Text className="text-[#A5B4FC] text-[14px] text-center font-bold leading-6 px-4">
            We are more than just a marketplace. We're a team of enthusiasts dedicated to bringing you the finest technology and lifestyle products.
          </Text>
        </View>

        {/* Vision Card Section */}
        <View className="px-5 -mt-16">
          <View className="bg-white p-8 rounded-[36px] shadow-xl shadow-blue-900/10 border border-slate-50">
            <View className="flex-row items-center mb-6">
              <View className="w-12 h-1 bg-[#00A1FF] rounded-full mr-3" />
              <Text className="text-[#001D4A] text-[18px] font-bold">Our Vision</Text>
            </View>
            
            <Text className="text-slate-500 text-[15px] font-bold leading-7 mb-8">
              Since 2015, we've been on a mission to bridge the gap between innovation and accessibility. We believe that everyone deserves the best tech experiences without complexity.
            </Text>

            {/* Stats Grid */}
            <View className="flex-row flex-wrap justify-between gap-y-6">
              {stats.map((stat, idx) => (
                <View key={idx} className="w-[48%] bg-slate-50 p-5 rounded-3xl items-center border border-slate-100">
                  <View className="bg-white p-3 rounded-2xl mb-3 shadow-sm shadow-slate-200">
                    <IconSymbol name={stat.icon as any} size={20} color="#00A1FF" />
                  </View>
                  <Text className="text-[#001D4A] text-[20px] font-black mb-1">{stat.value}</Text>
                  <Text className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Core Values Section */}
        <View className="px-5 mt-10 pb-16">
          <Text className="text-[#001D4A] text-[22px] font-bold mb-8 ml-2">Our Core Values</Text>
          
          {values.map((value, idx) => (
            <View 
              key={idx} 
              className="bg-white p-6 rounded-[32px] mb-5 flex-row items-center border border-slate-100 shadow-sm shadow-slate-100"
            >
              <View 
                className="p-5 rounded-3xl mr-5" 
                style={{ backgroundColor: value.color }}
              >
                <IconSymbol name={value.icon as any} size={24} color="#00A1FF" />
              </View>
              <View className="flex-1">
                <Text className="text-[#001D4A] text-lg font-bold mb-1">{value.title}</Text>
                <Text className="text-slate-400 text-[13px] font-bold leading-5">
                  {value.desc}
                </Text>
              </View>
            </View>
          ))}

          {/* Call to Action */}
          <TouchableOpacity 
            className="bg-[#00A1FF] p-10 rounded mt-8 items-center justify-center shadow-2xl shadow-blue-400/40 relative overflow-hidden"
          >
            <View className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
            <Text className="text-white text-2xl font-black text-center mb-4 leading-tight">Join Our Journey</Text>
            <Text className="text-blue-50 text-center font-bold text-sm mb-8 px-4 leading-6">
              Experience the future of shopping with us today. Explore our latest collection.
            </Text>
            <View className="bg-white px-10 py-4 rounded-2xl shadow-xl">
              <Text className="text-[#00A1FF] font-black text-xs uppercase tracking-widest">Explore Now</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default About;