import React, {useState, useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

import SearchBox from "../components/search/SearchBox";
import SearchItem from "../components/search/SearchItem";

import { Context } from "../context/CatalogueContext";

const SearchScreen = ({navigation: {navigate}}) => {
  const {state: {products}} = useContext(Context);
  const [search, setSearch] = useState(null);

  const searchItem = (search) => {
    if(search == null) return []
    return products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  }
  const data = searchItem(search);
  return (
    <View style={styles.container}>
      <SearchBox setSearch={setSearch} search={search}/>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        renderItem = {({item})=>{
            return(
              <SearchItem
                id={item.id}
                name={item.name}
                source={item.source}
                price={item.discounted}
              />
            );
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 50,
  }
});

export default SearchScreen;