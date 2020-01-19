import { StyleSheet } from "react-native";
import Layout from "../../../../style/layout";
import colors from "../../../../style/colors";
import { isIOS } from "../../../../utils/platform";

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
};

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
    ...shadow,
    backgroundColor: colors.white,
    paddingBottom: 14,
    borderRadius: 14,
    marginBottom: 20,
    paddingTop: 10,
    marginHorizontal: isIOS ? 0 : 2,
    flex: 1
  }
});