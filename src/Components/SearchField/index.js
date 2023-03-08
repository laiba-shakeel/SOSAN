import * as React from "react";
import { Searchbar } from "react-native-paper";
import baseColors from "../../Theme/Colors/Colors";
import { StyleSheet } from "react-native";
import _ from "lodash";
const SearchField = ({ placeholder, styles: customStyles }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  let styles = defaultStyles.input;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }
  
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles}
    />
  );
};

export default SearchField;

const defaultStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: baseColors.sucessTextColor,
    textAlignVertical: "top",
    marginHorizontal:10,
    marginVertical:10,
    backgroundColor: baseColors.lightColor,
    color:baseColors.lightGreyColor
  },
});
