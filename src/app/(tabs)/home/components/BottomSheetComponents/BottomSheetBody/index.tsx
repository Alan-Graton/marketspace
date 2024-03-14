import { AppStatusBadge } from "@/components/AppStatusBadge";
import React from "react";

import { Text, View } from "react-native";

export function BottomSheetBody() {
  return (
    <View>
      <View>
        <Text>Condição</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <AppStatusBadge status="NOVO" style={{ padding: 10  }} />
          <AppStatusBadge status="USADO" style={{ padding: 10  }} />
        </View>
      </View>
      <View>
        <Text>Aceita troca?</Text>
      </View>
      <View>
        <Text>Meios de pagamento aceitos</Text>
      </View>
    </View>
  );
}
