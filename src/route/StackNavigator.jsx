import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../module/welcome/Splash';

import Login from '../module/authentication/Login';
import OtpVerification from '../module/authentication/OtpVerification';
import SignUp from '../module/authentication/SignUp';
import AfterSplash from '../module/authentication/AfterSplash';
import Home from '../module/home/Home';
import Onboarding from '../module/welcome/Onboarding';
import Location from '../module/home/Location';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="AfterSplash" component={AfterSplash} />
        </Stack.Navigator>
    );
}