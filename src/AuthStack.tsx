import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import { AuthNavProps, AuthParamList } from './AuthParamList'
import { AuthContext } from './AuthProvider'
import { Center } from './Center'

interface AuthStackProps {

}

function Login({ navigation }: AuthNavProps<'Login'>) {
    const { login } = useContext(AuthContext)
    return (
        <Center>
            <Text>Im am login screen</Text>
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Log me in" onPress={() => login()} />
        </Center>
    )
}

function Register({ navigation, route }: AuthNavProps<'Register'>) {
    return (
        <Center>
            <Text>Route name: {route.name}</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </Center>
    )
}


const Stack = createStackNavigator<AuthParamList>()


export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" options={{ headerTitle: "Sign In" }} component={Login} />
            <Stack.Screen name="Register" options={{ headerTitle: "Sign Up" }} component={Register} />
        </Stack.Navigator>
    )
}