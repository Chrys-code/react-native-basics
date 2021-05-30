import React from "react"

export type SearchParamList = {
    Search: undefined;
    Product: {
        name: string;
    };
    EditProduct: {
        name: string,
        submit?: React.MutableRefObject<() => void>;
    };
}

