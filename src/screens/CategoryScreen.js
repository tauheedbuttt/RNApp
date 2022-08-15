import React, {useContext} from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Category from "../components/category/Category";
import Logo from "../components/reusable/Logo";

// context
import { Context as CatalogueContext } from "../context/CatalogueContext";

const CategoryScreen = ({navigation: {navigate}}) => {
  const {state: {categories}} = useContext(CatalogueContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          categories.map((item, index) => {
            return (
              <Category
                key={index}
                id = {item.id}
                name = {item.name}
                products = {item.products}
                source = {item.bg}
                right = {index % 2 == 0}
                style = {{marginTop: 20}}
              />
            );
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
});

export default CategoryScreen;