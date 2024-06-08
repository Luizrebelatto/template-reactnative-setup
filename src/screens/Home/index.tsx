import React from "react";
import { Wrapper, Button, ButtonTitle } from "./styles"

export default function Home({ navigation }){
    return (
       <Wrapper>
            <Button onPress={() => navigation.navigate('login')}>
                <ButtonTitle>go to next screen 2</ButtonTitle>
            </Button>
       </Wrapper>
    )
}