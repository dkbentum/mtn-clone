import OverviewCard from "@/components/home/overviewcard";
import { Feather, Ionicons } from "@expo/vector-icons";
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
              <Feather name="refresh-cw" size={16} color="black" />
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-mtn-darkGray font-bold mr-1">
                View all →
              </Text>
            </TouchableOpacity>
          </View>

          {/* Balance Cards Grid */}

          <View className="flex-row flex-wrap justify-between">
            <OverviewCard
              iconType="Ionicons"
              iconName="call"
              title="AIRTIME"
              value="GHS 4.17"
              bonus="BONUS:"
            />
            <OverviewCard
              iconType="MaterialIcons"
              iconName="sms"
              title="SMS"
              value="491 SMS"
              bonus="BONUS:"
            />
            <OverviewCard
              iconType="Ionicons"
              iconName="wifi"
              title="DATA"
              value="1.51 GB"
              bonus="BONUS: 0 MB"
            />
            <OverviewCard
              iconType="Ionicons"
              iconName="desktop"
              title="BROADBAND"
              value="GET CONNECTED"
              onPressText="CLICK HERE"
            />
          </View>

          {/* Timestamp */}
          <Text className="text-center font-bold text-slate-900 my-4">
            Showing balances as at Jun 19 2025; 9:47:52 AM
          </Text>

          {/* Quick Access */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Quick access</Text>
              <TouchableOpacity>
                <Text className="text-yellow-600">View all →</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-2  ">
              {["Data Bundle", "Just4U", "Mashup", "Contact us"].map((item) => (
                <TouchableOpacity
                  key={item}
                  className="w-[24%] h-24  bg-mtn-darkGray justify-center rounded-2xl  items-center shadow-sm"
                >
                  <View className="mb-2">
                    <Ionicons name="cube" size={24} color="#fff" />
                  </View>

                  <Text className="text-center text-xs font-bold text-white">
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="flex-row gap-2 mt-2 ">
              {["Data Bundle", "Just4U"].map((item) => (
                <TouchableOpacity
                  key={item}
                  className="w-[50%] flex-row h-16  bg-mtn-darkGray justify-center rounded-xl  items-center shadow-sm"
                >
                  <Ionicons name="cube" size={24} color="#E92B79" />

                  <Text className="text-center text-xs font-bold text-white">
                    {item}
                  </Text>
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
