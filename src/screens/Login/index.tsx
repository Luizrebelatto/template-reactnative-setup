import React from "react";
import { Wrapper, Button, ButtonTitle } from "./styles"

export default function Login({ navigation }){
    return (
       <Wrapper>
            <Button onPress={() => navigation.navigate('home')}>
                <ButtonTitle>go to next screen</ButtonTitle>
            </Button>
       </Wrapper>
    )
}