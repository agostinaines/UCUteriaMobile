import { View, StyleSheet, TextInput } from 'react-native';
import { SearchFilterBarProps } from './interfaces';

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({handleSearch}) => {

    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Busca algún producto...'
            onChangeText={(newSearch) => handleSearch(newSearch)}
            />
            
        </View>
    )
}

export default SearchFilterBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  }
});