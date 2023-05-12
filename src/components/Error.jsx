import React from "react";
import { useRouteError } from "react-router-dom";

export function Error(){
    const error = useRouteError()
    return (
        <div>
            <h1>{error.message}</h1>
            <h1>{error.statusText}</h1>
            <h1>{error.statusCode}</h1>
        </div>
    )
}