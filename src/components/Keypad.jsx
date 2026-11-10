import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius } from "../theme";

export default function Keypad({ onKeyPress, onDelete }) {
  const rows = [
    [
      { digit: "1", sub: "" },
      { digit: "2", sub: "ABC" },
      { digit: "3", sub: "DEF" },
    ],
    [
      { digit: "4", sub: "GHI" },
      { digit: "5", sub: "JKL" },
      { digit: "6", sub: "MNO" },
    ],
    [
      { digit: "7", sub: "PQRS" },
      { digit: "8", sub: "TUV" },
      { digit: "9", sub: "WXYZ" },
    ],
    [
      { digit: "", sub: "" },
      { digit: "0", sub: "" },
      { digit: "del", sub: "" },
    ],
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, rIdx) => (
        <View key={rIdx} style={styles.row}>
          {row.map((item, cIdx) => {
            if (item.digit === "") {
              return <View key={cIdx} style={styles.keyEmpty} />;
            }
            if (item.digit === "del") {
              return (
                <TouchableOpacity
                  key={cIdx}
                  style={styles.key}
                  onPress={onDelete}
                  activeOpacity={0.7}
                >
                  <Feather name="delete" size={22} color={colors.dark} />
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={cIdx}
                style={styles.key}
                onPress={() => onKeyPress(item.digit)}
                activeOpacity={0.7}
              >
                <Text style={styles.digitText}>{item.digit}</Text>
                {item.sub ? (
                  <Text style={styles.subText}>{item.sub}</Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  key: {
    width: 72,
    height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  keyEmpty: {
    width: 72,
    height: 64,
  },
  digitText: {
    ...typography.h2,
    color: colors.dark,
    fontWeight: "700",
  },
  subText: {
    fontSize: 9,
    fontWeight: "700",
    color: colors.gray,
    letterSpacing: 1,
  },
});
