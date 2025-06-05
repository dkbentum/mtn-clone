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
  iconColor = "black",
  iconSize = 20,
  title,
  value,
  bonus,
  valueClassName = "text-lg font-bold mb-1",
  bonusClassName = "text-gray-500 text-xs font-bold",
  onPressText,
  onPressTextColor = "text-black text-xs font-bold",
}: OverviewCardProps) {
  const IconComponent = iconType === "Ionicons" ? Ionicons : MaterialIcons;

  return (
    <View className="w-[48%] h-[44%] bg-mtn-yellow rounded-lg pt-3 px-1 py-1 mb-4 shadow-sm">
      <View className="flex-row mb-1 px-6 items-center ">
        <IconComponent
          name={iconName as any}
          size={iconSize}
          color={iconColor}
        />
        <Text className="ml-2 text-sm  font-bold">{title}</Text>
      </View>
      <View className=" rounded-tl-2xl rounded-br-lg rounded-bl-lg bg-mtn-white p-2">
        <Text className={valueClassName}>{value}</Text>
        {bonus && <Text className={bonusClassName}>{bonus}</Text>}
        {onPressText && <Text className={onPressTextColor}>{onPressText}</Text>}
      </View>
    </View>
  );
}
