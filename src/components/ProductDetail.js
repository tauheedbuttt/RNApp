import React, {useState, useEffect} from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get('window');

import Heading from '../components/detail/Heading';

const ProductDetail = ({product}) => {
  const [selected, setSelected] = useState(); 
  useEffect(()=>{
    setSelected('Description');
  },[])

  const getSelected = () => {
    switch(selected){
      case 'Description': return product.description;
      case 'Features': return product.features;
      case 'Reviews': return product.reviews;
      default: return [];
    }
  }
  const data = getSelected();
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.headings}>
        <Heading title={'Description'} selected={selected} setSelected={setSelected} />
        <Heading title={'Features'} selected={selected} setSelected={setSelected} />
        <Heading title={'Reviews'} selected={selected} setSelected={setSelected} />
      </View>
      <View style={styles.detail}>
        {
          data.map((point, index) => {
            var stars = []
            if (selected=='Reviews'){
              for(let i=0 ; i<point.star ; i++){
                stars.push(<Icon name='star' size={15} color='orange' key={i} />);
              }
            }
            return (
              <View style={styles.item} key={index}>
                {
                  selected=='Reviews' 
                  ? stars.map((star) => star)
                  : <Octicons name="dot-fill" size={15} color={'black'} />
                }
                <Text style={styles.text}>{selected=='Reviews' ? point.comment : point}</Text>
              </View>
              )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  headings: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
  }
});

export default ProductDetail;