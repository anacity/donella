import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2ea'
    },
    header: {
        padding: 16
    },
    headerImage: {
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    restauranteName: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginTop: 2,
        marginLeft: 18
    },
    subtitle: {
        color: "#666",
        marginTop: 4,
        marginLeft: 18,
    },
    tabs: {
        marginTop: 18,
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        gap: 16
    },
    tabText: {
        color: "#666"
    },
    menuList: {
        flex: 1,
        padding: 16
    },
    menuItem: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8
    }
})

export default styles;