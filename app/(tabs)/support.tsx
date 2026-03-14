import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/ui/icon-symbol";

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    problem: "",
  });

  const InputField = ({ 
    label, 
    placeholder, 
    icon, 
    value, 
    onChangeText, 
    containerStyle = "" 
  }: any) => (
    <View className={`mb-5 ${containerStyle}`}>
      <Text className="text-[#001D4A] text-[13px] font-bold mb-2">{label}</Text>
      <View className="flex-row items-center bg-[#F8FAFF] border border-[#E9EFFD] rounded-xl px-4 py-3.5">
        <IconSymbol name={icon} size={18} color="#94A3B8" />
        <TextInput
          placeholder={placeholder}
          className="flex-1 ml-3 text-slate-700 text-[14px] font-medium"
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView className="flex-1 bg-[#F5F8FF]" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="bg-[#002D72] pt-24 pb-24 px-6 items-center ">
          <View className="flex-row items-center bg-[#FFFFFF20] px-4 py-1.5 rounded-full mb-6 border border-[#FFFFFF30]">
            <IconSymbol name="headphones" size={14} color="white" />
            <Text className="text-white text-[11px] font-bold ml-2">Customer Support</Text>
          </View>
          <Text className="text-white text-3xl font-bold text-center mb-4 tracking-tight">
            How can we help you today?
          </Text>
          <Text className="text-[#A5B4FC] text-[13px] text-center font-bold leading-5 px-4">
            Have a question or facing an issue? Fill out the form below and our team will get back to you within 24 hours.
          </Text>
        </View>

        {/* Content Section */}
        <View className="px-5 -mt-12 pb-10">
          
          {/* Contact Information Card */}
          <View className="mb-6">
            <View className="bg-white p-6 rounded-[32px] shadow-xl shadow-blue-900/10">
              <View>
                <Text className="text-[#001D4A] text-[18px] font-bold mb-1">Contact Information</Text>
                <Text className="text-slate-400 text-[12px] font-bold mb-8">Use the information below to reach us directly.</Text>

                {/* Contact Items */}
                {[
                  { icon: 'envelope', label: 'EMAIL US', value: 'support@mareedo.com', color: '#E0F2FE' },
                  { icon: 'phone', label: 'CALL US', value: '+1 (555) 123-4567', color: '#EFF6FF' },
                  { icon: 'mappin.and.ellipse', label: 'OUR OFFICE', value: '123 Digital Square, Tech City\nState 54321, USA', color: '#ECFDF5' },
                ].map((item, idx) => (
                  <View key={idx} className="flex-row items-start mb-8">
                    <View className="p-3.5 rounded-2xl mr-4" style={{ backgroundColor: item.color }}>
                      <IconSymbol name={item.icon as any} size={20} color="#00A1FF" />
                    </View>
                    <View className="flex-1 pt-1">
                      <Text className="text-slate-400 text-[9px] font-bold tracking-widest mb-1">{item.label}</Text>
                      <Text className="text-[#001D4A] text-[12px] font-bold leading-5">{item.value}</Text>
                    </View>
                  </View>
                ))}
              </View>

              {/* Working Hours Card */}
              <View className="bg-[#EBF5FF] p-5 rounded-[24px] mt-2">
                <View className="flex-row items-center mb-2">
                  <IconSymbol name="house" size={16} color="#00A1FF" />
                  <Text className="text-[#00A1FF] text-[13px] font-bold ml-2">Working Hours</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-[#1E40AF] text-[12px] font-bold">Monday - Friday: 9am - 6pm</Text>
                  <Text className="text-[#1E40AF] text-[12px] font-bold">Weekend: Closed</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Support Form */}
          <View className="w-full">
            <View className="bg-white p-8 rounded-[32px] shadow-xl shadow-blue-900/10">
              
              <View className="flex-col gap-0">
                <InputField 
                  label="First Name" 
                  placeholder="Enter your first name" 
                  icon="person" 
                  value={formData.firstName}
                  onChangeText={(t: string) => setFormData({...formData, firstName: t})}
                />
                <InputField 
                  label="Last Name" 
                  placeholder="Enter your last name" 
                  icon="person"
                  value={formData.lastName}
                  onChangeText={(t: string) => setFormData({...formData, lastName: t})}
                />
              </View>

              <View className="flex-col gap-0">
                <InputField 
                  label="Email Address" 
                  placeholder="example@mail.com" 
                  icon="envelope" 
                  value={formData.email}
                  onChangeText={(t: string) => setFormData({...formData, email: t})}
                />
                <InputField 
                  label="Phone Number" 
                  placeholder="+1 (000) 000-0000" 
                  icon="phone" 
                  value={formData.phone}
                  onChangeText={(t: string) => setFormData({...formData, phone: t})}
                />
              </View>

              {/* Subject Dropdown (Simulated) */}
              <View className="mb-5">
                <Text className="text-[#001D4A] text-[13px] font-bold mb-2">Subject / Concern</Text>
                <TouchableOpacity className="flex-row items-center justify-between bg-[#F8FAFF] border border-[#E9EFFD] rounded-xl px-4 py-4">
                  <Text className="text-slate-400 text-[14px] font-medium">Select a topic</Text>
                  <IconSymbol name="chevron.right" size={16} color="#94A3B8" style={{ transform: [{ rotate: '90deg' }] }} />
                </TouchableOpacity>
              </View>

              {/* Problem Textarea */}
              <View className="mb-8">
                <Text className="text-[#001D4A] text-[13px] font-bold mb-2">Share your problem</Text>
                <View className="flex-row items-start bg-[#F8FAFF] border border-[#E9EFFD] rounded-xl px-4 py-4 h-32">
                  <IconSymbol name="paperplane.fill" size={18} color="#94A3B8" style={{ marginTop: 2 }} />
                  <TextInput
                    placeholder="Write your message here in detail..."
                    className="flex-1 ml-3 text-slate-700 text-[14px] font-medium text-top"
                    placeholderTextColor="#94A3B8"
                    multiline
                    numberOfLines={4}
                    value={formData.problem}
                    onChangeText={(t: string) => setFormData({...formData, problem: t})}
                  />
                </View>
              </View>

              {/* Submit Button */}
              <View className="items-end">
                <TouchableOpacity className="bg-[#00A1FF] flex-row items-center px-8 py-4 rounded-xl shadow-lg shadow-blue-400/30">
                  <Text className="text-white text-[14px] font-bold mr-3">Send Message</Text>
                  <IconSymbol name="paperplane.fill" size={16} color="white" />
                </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Support;