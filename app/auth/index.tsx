import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const MTNVerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  // Validate Ghana MTN numbers: 024, 025, 053, 054, 055, 059 (with or without +233 or just starting with 24, 25, 53, 54, 55, 59)
  const isValidPhoneNumber = /^((\+233|233|0)?(24|25|53|54|55|59)\d{7})$/.test(
    phoneNumber
  );
  const isContinueEnabled = isAgreed && isValidPhoneNumber;

  const handlePrivacyPolicyPress = () => {
    Linking.openURL("https://www.mtn.com/privacy-policy"); // Replace with actual URL
  };

  return (
    <View className="flex-1 bg-gray-50 relative">
      {/* Background illustration - replace with your actual image */}
      <Image
        source={require("@/assets/images/splash-icon.png")} // Replace with your image path
        className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
        resizeMode="cover"
      />

      <View className="flex-1 p-6 z-10">
        {/* Logo */}
        <View className="items-center mt-12 mb-16">
          <View className="w-24 h-24 rounded-full border-4 border-yellow-500 items-center justify-center">
            <Text className="text-3xl font-bold text-yellow-500">MTN</Text>
          </View>
        </View>

        {/* Phone Input */}
        <View className="flex-row mb-6">
          <View className="w-1/4 mr-2">
            <View className="bg-gray-200 rounded-lg p-4">
              <Text className="text-gray-700 text-center font-medium">233</Text>
            </View>
          </View>
          <View className="flex-1">
            <TextInput
              className="bg-white border border-gray-300 rounded-lg p-4 text-gray-700"
              placeholder="7XXXXXXX"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </View>
        </View>

        {/* Agreement Checkbox */}
        <View className="flex-row items-center mb-8">
          <Switch
            value={isAgreed}
            onValueChange={setIsAgreed}
            trackColor={{ false: "#D1D5DB", true: "#F59E0B" }}
            thumbColor={isAgreed ? "#FFFFFF" : "#FFFFFF"}
          />
          <Text className="ml-3 text-gray-700">
            By verifying your number, you agree to the{" "}
            <Text
              className="underline text-yellow-600"
              onPress={handlePrivacyPolicyPress}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          className="p-4 rounded-lg items-center justify-center"
          style={{
            backgroundColor: isContinueEnabled ? "#F59E0B" : "#D1D5DB", // yellow-500 or gray-300
          }}
          disabled={!isContinueEnabled}
          onPress={() => router.push("/auth/verification-code")}
        >
          <Text className="text-white font-bold text-lg">CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MTNVerificationScreen;
