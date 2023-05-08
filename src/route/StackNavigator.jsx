import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../module/welcome/Splash';
import Home from '../module/home/Home';
import Onboarding from '../module/authentication/Onboarding';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}