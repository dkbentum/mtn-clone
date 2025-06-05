import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ShopScreen() {
  const quickLinks = [
    "Airtime",
    "Broadband",
    "Caller Tunez",
    "Business Hub",
    "DJ",
    "Data",
    "Just4U",
    "Rewards",
    "Mashup",
    "Call Abroad",
    "SME Plus",
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-yellow-500 pt-14 pb-4 px-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold">Shop</Text>
          <Ionicons name="search" size={24} color="black" />
        </View>

        {/* Hero Banner */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="font-bold text-lg mb-1">
                Buy data, pay with MoMo and enjoy 50% 4G bonus
              </Text>
              <Text className="text-gray-600 mb-4">Only on myMTN app</Text>
              <TouchableOpacity className="bg-yellow-500 rounded-full py-2 px-4 self-start">
                <Text className="font-bold">Click here</Text>
              </TouchableOpacity>
            </View>
            <View className="w-20 h-20 bg-gray-200 rounded-lg items-center justify-center">
              <Text className="font-bold">MTN</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4 pt-4">
        {/* What Do You Need Section */}
        <View className="mb-6">
          <Text className="text-lg font-bold mb-4">What do you need?</Text>
          <View className="flex-row flex-wrap  gap-2">
            {quickLinks.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[22%] items-center mb-4"
              >
                <View className="w-16 h-16 bg-mtn-darkGray rounded-full items-center justify-center shadow-sm mb-2">
                  <Ionicons name="cube" size={24} color="white" />
                </View>
                <Text className="text-center text-xs">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Get Broadband Section */}
        <View className="mb-20">
          <Text className="text-lg font-bold mb-4">Get Broadband</Text>
          <View className="bg-white rounded-lg p-4 h-32">
            <Text className="font-bold mb-2">
              Get Fibre broadband for your home!
            </Text>
            <Text className="text-gray-600">
              High-speed internet for your family
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
