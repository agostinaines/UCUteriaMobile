import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: '#052E66'}}>
        <Tabs.Screen 
            name='index'
            options={{
                title: 'Menú',
                tabBarLabel: 'Menú',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="coffee" size={size} color={color} />
                )
            }} 
        />
        <Tabs.Screen 
            name='ShoppingCart'
            options={{
                title: 'Pedido',
                tabBarLabel: 'Pedido',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="shopping-cart" size={size} color={color} />
                )
            }}
        />
    </Tabs>
  )
}
