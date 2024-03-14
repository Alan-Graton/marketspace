import React from 'react';

import { Text, View } from 'react-native';

import { X } from 'phosphor-react-native';

export function BottomSheetHeader() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text>Filtrar anúncios</Text>
      <X size={24} />
    </View>
  )
}