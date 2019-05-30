import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import Stories from './stories';

const StackNav = createStackNavigator(
    { stories : {screen : Stories}},{
        headerMode: "none",
        mode: "modal",
        defaultNavigationOptions: {
          gesturesEnabled: false
        }
      
    }
) ;
 
export default createAppContainer(StackNav)