import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import Stories from './stories';
import Preview from './preview';

const StackNav = createStackNavigator(
  {
    preview : {screen : Preview},
    stories : {screen : Stories}
  },{
        headerMode: "none",
        mode: "modal",
        defaultNavigationOptions: {
          gesturesEnabled: false
        }
      
    }
) ;
 
export default createAppContainer(StackNav)