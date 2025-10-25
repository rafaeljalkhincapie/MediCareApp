import { StyleSheet } from "react-native";

export const Color={
    colorPrimary:"#24B4A2",
    txtColorPrimary:"#1E3A5F",
    bgGeneral:"#FAFAF7",
    txtColorSecon:"#3E3E3E",
    bgFondoCtn:"#FFFFFF"
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "black",
        margin: 20,
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        margin:20,
        alignItems: "center",
    },
    txtpresentation:{
        color:Color.txtColorSecon,
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
        marginTop: 30,
        flex:1,
        gap:12
    },
    btnlogin:{
        padding:20,
        alignItems: "center",
        flexDirection:"row",
        gap: 20,
    },
    btnlogin_icon:{
        width: 25,
        height:25
    }
});

export default styles;