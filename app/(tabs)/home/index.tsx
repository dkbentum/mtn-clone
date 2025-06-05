import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-yellow-500 ">
      {/* Header */}
      <View className=" pt-20 pb-4 px-4">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row  items-center">
            <View className="w-10 h-10  rounded-full border-2 border-white items-center justify-center">
              <Text className="text-white text-sm font-bold">MTN</Text>
            </View>
          </View>
          <Text className="ml-3 text-white text-lg">
            <Text className="font-bold">Yo!</Text> ISAAC
          </Text>
          <Ionicons name="chatbubble-ellipses" size={24} color="white" />
        </View>
      </View>

      {/* Balances Section */}
      <ScrollView className="flex-1 rounded-tr-3xl bg-slate-50 ">
        <View className="px-4 pt-4">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row gap-3 items-center">
              <Text className="text-lg font-bold">Balances</Text>
              <Feather name="refresh-cw" size={16} color="#D97706" />
            </View>

            <TouchableOpacity className="flex-row items-center">
              <Text className="text-yellow-600 mr-1">View all →</Text>
            </TouchableOpacity>
          </View>

          {/* Balance Cards Grid */}
          <View className="flex-row flex-wrap justify-between">
            {/* Airtime Card */}
            <View className="w-[48%] bg-white rounded-lg p-4 mb-4 shadow-sm">
              <View className="flex-row items-center mb-2">
                <Ionicons name="call" size={20} color="#F59E0B" />
                <Text className="ml-2 font-medium">AIRTIME</Text>
              </View>
              <Text className="text-2xl font-bold mb-1">GHS 4.17</Text>
              <Text className="text-gray-500">BONUS:</Text>
            </View>

            {/* SMS Card */}
            <View className="w-[48%] bg-white rounded-lg p-4 mb-4 shadow-sm">
              <View className="flex-row items-center mb-2">
                <MaterialIcons name="sms" size={20} color="#F59E0B" />
                <Text className="ml-2 font-medium">SMS</Text>
              </View>
              <Text className="text-2xl font-bold mb-1">491 SMS</Text>
              <Text className="text-gray-500">BONUS:</Text>
            </View>

            {/* Data Card */}
            <View className="w-[48%] bg-white rounded-lg p-4 shadow-sm">
              <View className="flex-row items-center mb-2">
                <Ionicons name="wifi" size={20} color="#F59E0B" />
                <Text className="ml-2 font-medium">DATA</Text>
              </View>
              <Text className="text-2xl font-bold mb-1">1.51 GB</Text>
              <Text className="text-gray-500">BONUS: 0 MB</Text>
            </View>

            {/* Broadband Card */}
            <View className="w-[48%] bg-white rounded-lg p-4 shadow-sm">
              <View className="flex-row items-center mb-2">
                <Ionicons name="desktop" size={20} color="#F59E0B" />
                <Text className="ml-2 font-medium">BROADBAND</Text>
              </View>
              <Text className="text-lg font-bold mb-1">GET CONNECTED</Text>
              <Text className="text-yellow-600">CLICK HERE</Text>
            </View>
          </View>

          {/* Timestamp */}
          <Text className="text-center text-gray-500 my-4">
            Showing balances as at Jun 04 2025; 9:47:52 AM
          </Text>

          {/* Quick Access */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Quick access</Text>
              <TouchableOpacity>
                <Text className="text-yellow-600">View all →</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {["Data Bundle", "Just4U", "Mashup", "Contact us"].map((item) => (
                <TouchableOpacity
                  key={item}
                  className="w-[48%] bg-white rounded-lg p-4 mb-4 items-center shadow-sm"
                >
                  <View className="w-12 h-12 bg-yellow-100 rounded-full items-center justify-center mb-2">
                    <Ionicons name="cube" size={24} color="#F59E0B" />
                  </View>
                  <Text className="text-center">{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Rewards Section */}
          <View className="mb-20">
            <Text className="text-lg font-bold mb-4">MTN Rewards</Text>
            <View className="bg-white rounded-lg p-4 items-center justify-center h-32">
              <Text className="text-gray-500">Coming soon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
