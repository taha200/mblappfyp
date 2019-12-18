import React from "react";
import { View, Text,Button } from "react-native";
import { connect } from "react-redux";
class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        
        {this.props.isLoggedIn?<Text>Logged in as {this.props.userName}..</Text>:<Button
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}
        />}
      </View>
    );
  }
}
function mapStateToProps(state){
    return({
        isLoggedIn:state.rootReducer.isLoggedIn,
        userName:state.rootReducer.userName
    })
}
function mapActionsToProps(dispatch){
    return({
       
    })
}
export default connect(mapStateToProps,mapActionsToProps)(Details)