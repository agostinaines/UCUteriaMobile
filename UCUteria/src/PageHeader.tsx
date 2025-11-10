import { View, StyleSheet, Image } from 'react-native';

export default function PageHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/ucuterialogo.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#052E66',
    width: '100%',
    height: 50
  },
  image: {
    width: 125,
    height: 30
  }
});