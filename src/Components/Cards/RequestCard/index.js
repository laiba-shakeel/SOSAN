import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
import baseColors from '../../../Theme/Colors/Colors';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const DATA = [
  {
    image: require('../../../Assets/Images/Dummy-Person.png'),
    id: '1',
    title: 'First Item',
    disc: "",
    icons: "",
  },
  {
    image: require('../../../Assets/Images/Dummy-Person.png'),
    id: '2',
    title: 'First Item',
    disc: "",
    icons: "",
  },
  {
    image: require('../../../Assets/Images/Dummy-Person.png'),
    id: '3',
    title: 'First Item',
    disc: "",
    icons: "",
  },
  {
    image: require('../../../Assets/Images/Dummy-Person.png'),
    id: '4',
    title: 'First Item',
    disc: "",
    icons: "",
  },
];

const Item = ({title , img}) => (
  <View style={styles.item}>
   <View style={styles.img}>{img}</View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} img={item.img} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      borderColor: baseColors.lightColor,
      flexDirection: "column",
      width: (deviceWidth / 1) - 50,
      paddingVertical: 10,
      justifyContent: "center",
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  
  img:{
    height: 100,
    width: 100, 
    borderRadius: "100%"
  }
});

export default App;