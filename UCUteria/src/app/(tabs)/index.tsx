import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from '../../interfaces'
import PageHeader from "@/src/PageHeader";
import MenuItem from "@/src/MenuItem";
import SearchFilterBar from "@/src/SearchFilterBar";
import { useState } from "react";

const PRODUCTS: Product[] = [
  { id: "c1", name: "ESPRESSO", price: 120, category: "CAFE", image: "☕️", description: "Corto e intenso", displayName: "Espresso", isVisible: true },
  { id: "c2", name: "LATTE", price: 180, category: "CAFE", image: "☕️", description: "Con leche espumada", displayName: "Latte", isVisible: true },
  { id: "t1", name: "TE VERDE", price: 140, category: "TE", image: "🍵", description: "Suave y herbal", displayName: "Té Verde", isVisible: true },
  { id: "t2", name: "TE CHAI", price: 160, category: "TE", image: "🫖", description: "Especias aromáticas", displayName: "Té Chai", isVisible: true },
  { id: "p1", name: "MEDIALUNA", price: 90, category: "PASTELERIA", image: "🥐", description: "Mantecosas y doradas", displayName: "Medialuna", isVisible: true },
  { id: "p2", name: "TORTA CHOC", price: 220, category: "PASTELERIA", image: "🍰", description: "Fudge intenso", displayName: "Torta Choc", isVisible: true },
  { id: "p3", name: "CARROT CAKE", price: 230, category: "PASTELERIA", image: "🍰", description: "La mejor torta", displayName: "Carrot Cake", isVisible: true },
  { id: "s1", name: "SANDWICH JAMON", price: 260, category: "SANDWICHES", image: "🥪", description: "Clásico de jamón y queso", displayName: "Sándwich", isVisible: true },
  { id: "s2", name: "VEGGIE GRILL", price: 280, category: "ALMUERZO", image: "🥗", description: "Verduras asadas", displayName: "Veggie Grill", isVisible: true }
];

export default function Index() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  const handleSearch = (search: string) => {
    const filtered = products.map((product) => ({
      ...product,
      isVisible: product.name.toUpperCase().includes(search.toUpperCase()),
    }));
    setProducts(filtered); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader></PageHeader>
      <SearchFilterBar
        handleSearch={handleSearch}
      ></SearchFilterBar>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {products.map(
          (product) =>
            product.isVisible && (
              <MenuItem item={product} key={product.id} />
            )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scroll:{
    height: '80%'
  }
});