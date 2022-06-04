import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../pages/Account';
import Found from '../pages/Found';
import Home from '../pages/Home';
import Listen from '../pages/Listen';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

interface ITab {
  name: keyof BottomTabParamList;
  component: React.ComponentType<any>;
  options?: BottomTabNavigationOptions;
}

const tabs: ITab[] = [
  {name: 'Home', component: Home, options: {title: '首页'}},
  {name: 'Listen', component: Listen, options: {title: '听歌'}},
  {name: 'Found', component: Found, options: {title: '发现'}},
  {name: 'Account', component: Account, options: {title: '我的'}},
];
const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index.toString() + item.name}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsNavigation;
