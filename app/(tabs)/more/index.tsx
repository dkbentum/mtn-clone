import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MoreScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header Section */}
      <View className="bg-yellow-500 pt-14 pb-6 px-6">
        {/* User Profile */}
        <View className="flex-row items-center">
          {/* Profile Icon */}
          <View className="w-16 h-16 rounded-full bg-white items-center justify-center mr-4">
            <Ionicons name="person" size={32} color="#F59E0B" />
          </View>

          {/* User Info */}
          <View>
            <Text className="text-xl font-bold text-white">
              ISAAC NANA SAM MENSAH
            </Text>
            <Text className="text-white">+233597959032</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-6">
        {/* My Account Section */}
        <View className="mt-6 mb-8">
          <Text className="text-lg font-bold mb-4">MY ACCOUNT</Text>
          <View className="border-t border-gray-200 pt-4">
            {/* MyMTN Section */}
            <Text className="text-md font-semibold text-gray-600 mb-3">
              MyMTN
            </Text>
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
              <Ionicons
                name="chatbox"
                size={20}
                color="#F59E0B"
                className="mr-3"
              />
              <Text className="flex-1">Send Feedback</Text>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
              <MaterialIcons
                name="subscriptions"
                size={20}
                color="#F59E0B"
                className="mr-3"
              />
              <Text className="flex-1">Manage subscriptions</Text>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Get More From MTN Section */}
        <View className="mb-8">
          <Text className="text-md font-semibold text-gray-600 mb-3">
            Get More From MTN
          </Text>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="apps" size={20} color="#F59E0B" className="mr-3" />
            <Text className="flex-1">Discover Apps</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="wifi" size={20} color="#F59E0B" className="mr-3" />
            <Text className="flex-1">Request Broadband</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons
              name="sim-card"
              size={20}
              color="#F59E0B"
              className="mr-3"
            />
            <Text className="flex-1">Get E-sim</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons name="gift" size={20} color="#F59E0B" className="mr-3" />
            <Text className="flex-1">MTN Rewards</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Help and Support Section */}
        <View className="mb-8">
          <Text className="text-md font-semibold text-gray-600 mb-3">
            Help and Support
          </Text>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons
              name="help-circle"
              size={20}
              color="#F59E0B"
              className="mr-3"
            />
            <Text className="flex-1">Contact</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-100">
            <Ionicons
              name="location"
              size={20}
              color="#F59E0B"
              className="mr-3"
            />
            <Text className="flex-1">Find a Store</Text>
            <Feather name="chevron-right" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
