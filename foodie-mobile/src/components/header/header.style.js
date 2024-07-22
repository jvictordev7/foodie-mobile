import { COLORS, FONT_SIZE } from "../../constants/theme"
import Header from "./header"

export const styles = {
    header: {
        width: "100%",
        alignItems: "center"
    },
    
    logo: {
        width: 170,
        height: 50
    },

    titulo: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }
}