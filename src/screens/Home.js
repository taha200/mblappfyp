import React from "react";
import { View, Text,Button } from "react-native";
import { LoginAction } from "../store/actions/actions";
import { connect } from "react-redux";
class HomeScreen extends React.Component {
  constructor(props){
      super(props)
        this.handleLogin=this.handleLogin.bind(this)
  }
  handleLogin(){
    this.props.login("Demo")
    this.props.navigation.push('Details')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={this.handleLogin}
        />
      </View>
    );
  }
}
function mapStateToProps(state){
    return({
        isLoggedIn:state.rootReducer.isLoggedIn
    })
}
function mapActionsToProps(dispatch){
    return({
        login:(userName)=>{
            dispatch(LoginAction(userName))
        }
    })
}
export default connect(mapStateToProps,mapActionsToProps)(HomeScreen)