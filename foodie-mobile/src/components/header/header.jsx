import { Image, Text, View } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons.js"


function Header() {
    return  <View style={styles.Header}>
        <Image style={styles.logo} source={icons.logo} />
        <Text style={styles.titulo}>Acesse sua conta</Text>
        </View>
}

export default Header