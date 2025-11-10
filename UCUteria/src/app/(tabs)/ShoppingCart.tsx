import PageHeader from '@/src/PageHeader';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Product } from '../../interfaces';

export default function ShoppingCart() {
    const [cart, setCart] = useState<Product[]>([]);

    return (
        <SafeAreaView style={styles.container}>
            <PageHeader></PageHeader>
            <Text style={styles.title}>Tu pedido</Text>
            <View style={styles.shopping}>
                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shopping: {
    height: '93%'
  },
  title: {
    fontSize: 80
  }
});