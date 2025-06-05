import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MoMoScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-yellow-500 pt-14 pb-4 px-6">
        <Text className="text-xl font-bold text-white">MoMo</Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-6">
        {/* Balance Section */}
        <View className="mt-6 mb-6">
          <Text className="text-lg font-bold mb-4">Balance</Text>

          {/* MoMo Balance Card */}
          <View className="bg-white rounded-lg p-5 shadow-sm mb-4">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="font-bold">MoMo Balance</Text>
              <Ionicons name="eye" size={20} color="#9CA3AF" />
            </View>
            <Text className="text-3xl font-bold mb-1">GHS ******</Text>
            <Text className="text-gray-500">Service</Text>
          </View>

          {/* Quick Actions Row 1 */}
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="items-center w-1/3">
              <View className="bg-yellow-100 w-16 h-16 rounded-full items-center justify-center mb-2">
                <FontAwesome name="send" size={24} color="#F59E0B" />
              </View>
              <Text className="text-center">Send MoMo</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center w-1/3">
              <View className="bg-yellow-100 w-16 h-16 rounded-full items-center justify-center mb-2">
                <MaterialIcons name="receipt" size={24} color="#F59E0B" />
              </View>
              <Text className="text-center">Statement</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center w-1/3">
              <View className="bg-yellow-100 w-16 h-16 rounded-full items-center justify-center mb-2">
                <FontAwesome name="money" size={24} color="#F59E0B" />
              </View>
              <Text className="text-center">Cashout</Text>
            </TouchableOpacity>
          </View>

          {/* Quick Actions Row 2 */}
          <View className="flex-row justify-between mb-8">
            <TouchableOpacity className="items-center w-1/3">
              <View className="bg-yellow-100 w-16 h-16 rounded-full items-center justify-center mb-2">
                <MaterialIcons name="approval" size={24} color="#F59E0B" />
              </View>
              <Text className="text-center">Approvals</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center w-1/3">
              <View className="bg-yellow-100 w-16 h-16 rounded-full items-center justify-center mb-2">
                <Ionicons name="wifi" size={24} color="#F59E0B" />
              </View>
              <Text className="text-center">Get Broadband</Text>
            </TouchableOpacity>
            <View className="w-1/3"></View> {/* Empty spacer */}
          </View>
        </View>

        {/* Broadband Promo Section */}
        <View className="mb-8">
          <View className="bg-white rounded-lg p-5">
            <Text className="font-bold text-lg mb-2">
              Get Fibre broadband for your home!
            </Text>
            <Text className="text-gray-600 mb-4">
              Super fast internet with unlimited data
            </Text>
            <TouchableOpacity className="bg-yellow-500 rounded-full py-2 px-4 self-start">
              <Text className="font-bold text-white">Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
