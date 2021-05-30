import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from './AuthProvider'
import { Center } from './Center'
import faker from 'faker'
import { HomeNavProps, HomeParamList } from './HomeParamList'
import { addProductRoutes } from './addProductRoutes'

interface HomeStackProps {

}

const Stack = createStackNavigator<HomeParamList>()

function Feed({ navigation }: HomeNavProps<'Feed'>) {
    return (
        <Center>
            <FlatList
                style={{ width: "100%" }}
                keyExtractor={(product, idx) => product + idx}
                data={Array.from(Array(50), () => faker.commerce.product())}
                renderItem={({ item }) => {
                    return <Button title={item} onPress={() => navigation.navigate("Product", {
                        name: item
                    })} />
                }}
            />
        </Center>
    )
}


export const HomeStack: React.FC<HomeStackProps> = ({ }) => {
    const { logout } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName="Feed">
            {addProductRoutes(Stack)}
            <Stack.Screen name="Feed" options={{
                headerLeft: () => {
                    return (
                        <TouchableOpacity onPress={() => {
                            logout()
                        }}
                        >
                            <Text style={{ paddingLeft: 25 }}>Log Out</Text>
                        </TouchableOpacity>
                    )
                }
            }} component={Feed} />
        </Stack.Navigator>
    )
}

