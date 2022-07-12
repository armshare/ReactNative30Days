import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default()=>{
  const {width} = Dimensions.get('window');
  return (
    <View>
      <Text style={{padding:10}}>row (Default)</Text>
      <View style={{flexDirection:'row', width,height:width, backgroundColor:'whitesmoke'}} >
        <View style={{ width:50, height:50, backgroundColor:'powderblue'}}/>
        <View style={{ width:50, height:50, backgroundColor:'skyblue'}}/>
        <View style={{ width:50, height:50, backgroundColor:'steelblue'}}/>
      </View>
      <Text style={{padding:10 , marginTop:10}}>column (Default)</Text>
      <View style={{flexDirection:'column', width,height:width, backgroundColor:'whitesmoke'}} >
        <View style={{ width:50, height:50, backgroundColor:'powderblue'}}/>
        <View style={{ width:50, height:50, backgroundColor:'skyblue'}}/>
        <View style={{ width:50, height:50, backgroundColor:'steelblue'}}/>
      </View>
    </View>
  )
}
  // <View style={{flex: 1}}>
  //   <View style={{flex:1, backgroundColor: 'powderblue'}}/>
  //   <View style={{flex:2, backgroundColor: 'skyblue'}}/>
  //   <View style={{flex:3, backgroundColor: 'steelblue'}}/>
  // </View>
  // <View>
  //   <View style={{width:50, height:50, backgroundColor: 'powderblue'}}/>
  //   <View style={{width:100, height:100, backgroundColor: 'skyblue'}}/>
  //   <View style={{width:150, height:150, backgroundColor: 'steelblue'}}/>
  // </View>

// export default()=>(
//   <View style={styles.myStyle}>
//     <Text style={styles.standardText}>Here is some</Text>
//     <Text style={[styles.standardText, styles.fancyText]}>fancy text</Text>
//   </View>
// )

// const styles = StyleSheet.create(
// {
//   myStyle:{
//     width:200,
//     height: 400,
//     backgroundColor: 'skyblue',
//   },
//   standardText:{
//     fontSize : 24,
//     color: '#333'
//   },
//   fancyText:{
//     fontStyle: 'italic',
//     color: 'rgb(0,125,125)'
//   }
// }
// )
// export default() => (
// <View style={ styles.myStyle}/>

// );

// const styles = StyleSheet.create({
//   myStyle:{
//     width:200,
//     height:300,
//     backgroundColor: "blue"
//   }
// })


// export default ()=>(
//   <View style={{width:200, height:200, backgroundColor:'skyblue'}}/>
//   )
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Let's change this line to see if it work!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// export default class App extends React.Component{
//   render(){
//     return(
//       <View style={styles.container}>
//         <Text>Change to Class export.</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
