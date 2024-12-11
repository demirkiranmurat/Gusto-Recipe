import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CategoryGrid({title,color,pressFood}) {
  return (
    <View style={styles.gridItem}>
        <Pressable style={({pressed})=>[styles.button, pressed ? styles.buttonPressed:null]} onPress={pressFood}>
            <SafeAreaView style={[styles.insideView, {backgroundColor:'#e6e6e6'}]}>
                <Text style={styles.title}>{title}</Text>
            </SafeAreaView>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem:{
       flex:1,
       marginTop:30,
       margin:5,
       borderRadius:20,
       height:150,
       elevation:4,
       shadowColor: '#171717',
       shadowOffset:{ width: -10, height: 10},
       shadowOpacity: 0.3,
       shadowRadius:5,
       backgroundColor:'white',
    },
    button:{
        flex:1
    },
    insideView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 2,
        borderBottomWidth: 9,
        borderColor:'purple'        
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        color:'black',
        marginBlockStart:15
    },
    buttonPressed:{
        opacity:0.5
    }
})