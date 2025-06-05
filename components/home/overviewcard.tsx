import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type OverviewCardProps = {
  iconType: "Ionicons" | "MaterialIcons";
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  title: string;
  value: string;
  bonus?: string;
  valueClassName?: string;
  bonusClassName?: string;
  onPressText?: string;
  onPressTextColor?: string;
};

export default function OverviewCard({
  iconType,
  iconName,
  iconColor = "#F59E0B",
  iconSize = 20,
  title,
  value,
  bonus,
  valueClassName = "text-2xl font-bold mb-1",
  bonusClassName = "text-gray-500",
  onPressText,
  onPressTextColor = "text-yellow-600",
}: OverviewCardProps) {
  const IconComponent = iconType === "Ionicons" ? Ionicons : MaterialIcons;

  return (
    <View className="w-[48%] bg-white rounded-lg p-4 mb-4 shadow-sm">
      <View className="flex-row items-center mb-2">
        <IconComponent
          name={iconName as any}
          size={iconSize}
          color={iconColor}
        />
        <Text className="ml-2 font-medium">{title}</Text>
      </View>
      <Text className={valueClassName}>{value}</Text>
      {bonus && <Text className={bonusClassName}>{bonus}</Text>}
      {onPressText && <Text className={onPressTextColor}>{onPressText}</Text>}
    </View>
  );
}
