import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex:1,
    },
    logo:{
        margin:20,
        alignItems: "center",
    },
    txtpresentation:{
        color:"#3E3E3E",
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold"
    },
    text15:{
        fontSize: 15
    },
    text20:{
        fontSize: 20
    },
    bodycontainer:{
        // backgroundColor:"red",
        marginTop: 30,
        marginHorizontal: 40,
        flex:1,
        gap:12
    },
    btnlogin:{
        // backgroundColor:"red",
        padding:20,
        marginHorizontal:10,
        flexDirection:"row",
        gap: 20,
        borderColor: "black"
    },
    btnlogin_icon:{
        width: 25,
        height:25
    }
});

export default styles;