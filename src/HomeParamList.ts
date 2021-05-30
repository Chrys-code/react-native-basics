import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"

export type HomeParamList = {
    Feed: undefined;
    Product: {
        name: string;
    };
    EditProduct: {
        name: string,
        submit?: React.MutableRefObject<() => void>;
    };
}

export type HomeNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>;
    route: RouteProp<HomeParamList, T>
}