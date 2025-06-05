import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const VerificationCodeScreen = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResendActive, setIsResendActive] = useState(false);

  const inputRefs = useRef<(TextInput | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    // Start countdown timer
    if (timer > 0 && !isResendActive) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsResendActive(true);
    }
  }, [timer, isResendActive]);

  const handleCodeChange = (text: string, index: number) => {
    // Allow only numbers
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus to next input if current input is filled
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    if (isResendActive) {
      // Reset timer and resend code
      setTimer(60);
      setIsResendActive(false);
      Alert.alert(
        "Code Sent",
        "A new verification code has been sent to your phone."
      );
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode.length === 6) {
      // In a real app, you would verify the code with your backend
      // For now, let's simulate a successful verification
      router.push("/(tabs)/home");
    } else {
      Alert.alert(
        "Invalid Code",
        "Please enter a valid 6-digit verification code."
      );
    }
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-50"
    >
      <View className="flex-1 bg-gray-50 relative">
        {/* Background illustration */}
        <Image
          source={require("@/assets/images/splash-icon.png")}
          className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
          resizeMode="cover"
        />

        <View className="flex-1 p-6 z-10">
          {/* Logo */}
          <View className="items-center mt-12 mb-8">
            <View className="w-20 h-20 rounded-full border-4 border-yellow-500 items-center justify-center">
              <Text className="text-2xl font-bold text-yellow-500">MTN</Text>
            </View>
          </View>

          {/* Header */}
          <View className="items-center mb-10">
            <Text className="text-xl font-bold text-gray-800 mb-2">
              Verification Code
            </Text>
            <Text className="text-gray-600 text-center">
              Please enter the 6-digit code sent to your phone number
            </Text>
          </View>

          {/* Verification Code Input */}
          <View className="flex-row justify-between mb-8">
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                className="w-12 h-14 bg-white border-2 rounded-lg text-center text-xl font-bold text-gray-800"
                style={{ borderColor: digit ? "#F59E0B" : "#D1D5DB" }}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
              />
            ))}
          </View>

          {/* Resend Code Option */}
          <View className="flex-row justify-center items-center mb-8">
            <Text className="text-gray-600">Didn&apos;t receive code? </Text>
            <TouchableOpacity
              disabled={!isResendActive}
              onPress={handleResendCode}
            >
              <Text
                className={
                  isResendActive ? "text-yellow-600 font-bold" : "text-gray-400"
                }
              >
                {isResendActive ? "Resend Code" : `Resend in ${timer}s`}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            className="p-4 rounded-lg items-center justify-center"
            style={{
              backgroundColor: isCodeComplete ? "#F59E0B" : "#D1D5DB",
            }}
            disabled={!isCodeComplete}
            onPress={handleVerify}
          >
            <Text className="text-white font-bold text-lg">VERIFY</Text>
          </TouchableOpacity>

          {/* Back Button */}
          <TouchableOpacity
            className="mt-4 p-4 items-center"
            onPress={() => router.back()}
          >
            <Text className="text-gray-600">Change Phone Number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerificationCodeScreen;
