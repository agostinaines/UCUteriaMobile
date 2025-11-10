import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MenuItemsProps } from './interfaces';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MenuItem: React.FC<MenuItemsProps> = ({item}) => {
    return (
    <View style={styles.container}>
      <View style={styles.imageCard}>
        <Text style={styles.image}>{item.image}</Text>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesome name="plus-circle" size={30} color="#052E66" />
        </TouchableOpacity>
      </View>
      <Text style={styles.displayName}>{item.displayName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  imageCard: {
    position: 'relative'
  },
  image: {
    fontSize: 250
  },
  addButton: {
    position: 'absolute',
    top: 7,
    right: 7
  },
  displayName: {
    fontSize: 20,
    fontWeight: '500'
  },
  description: {
    fontSize: 15
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  }
});