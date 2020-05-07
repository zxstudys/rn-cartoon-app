GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import RootPage from './pages/root-page';
import Brief from './pages/brief';
import ImgPage from './pages/img-page';
import CategoryList from './pages/category-list';

const AppStack = createStackNavigator(
  {
    RootPage: {
      screen: RootPage,
      navigationOptions: {
        headerShown: false,
      }
    },
    Brief: {
      screen: Brief,
    },
    ImgPage: {
      screen: ImgPage,
    },
    CategoryList: {
      screen: CategoryList,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(AppStack);