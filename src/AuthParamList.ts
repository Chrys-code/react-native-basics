import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"

export type AuthParamList = {
    Login: undefined;
    Register: undefined;
}

export type AuthNavProps<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, 'Register'>;
    route: RouteProp<AuthParamList, 'Register'>
}