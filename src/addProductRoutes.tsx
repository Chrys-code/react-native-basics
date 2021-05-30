import React, { useEffect, useRef, useState } from "react"
import { Button, Text, TouchableOpacity } from "react-native"
import { Center } from "./Center"
import { HomeNavProps } from "./HomeParamList"

function Product({ route, navigation }: HomeNavProps<'Product'>) {
    return (
        <Center>
            <Text>{route.params.name}</Text>
            <Button title="Edit this item" onPress={() => navigation.navigate("EditProduct", {
                name: route.params.name
            })} />
        </Center>
    )
}

function apiCall(x: any) {
    return x
}

function EditProduct({ route, navigation }: HomeNavProps<'EditProduct'>) {
    const [formState] = useState()
    const submit = useRef(() => { })

    submit.current = () => {
        apiCall(formState)
        navigation.goBack()
    }

    useEffect(() => {
        navigation.setParams({ submit })
    }, [])

    return (
        <Center>
            <Text>Editing {route.params.name}...</Text>
        </Center>
    )
}

export const addProductRoutes = (Stack: any) => {

    return (
        <>
            <Stack.Screen
                options={({ route }: { route: any }) => ({
                    headerTitle: `Edit: ${route.params.name}`,
                    headerRight: () => <TouchableOpacity onPress={() => {
                        //submit form
                        route.params.submit?.current()
                    }}
                        style={{ paddingRight: 25 }}>
                        <Text style={{ color: "blue" }}>Done</Text>
                    </TouchableOpacity>
                })}
                name="EditProduct"
                component={EditProduct} />

            <Stack.Screen
                options={({ route }: { route: any }) => ({
                    headerTitle: `Product: ${route.params.name}`
                })}
                name="Product"
                component={Product} />

        </>
    )
}