import React from "react";
import { Wrapper, Button, ButtonTitle } from "./styles"
import useAuthStore from "../../store/authStore";

export default function Login({ navigation }){
    const login = useAuthStore((state) => state.login);

    const handleLogin = () => {
      const user = {
        id: '1',
        name: 'Luiz Gabriel',
        email: 'lbrebelatto@gmail.com',
      };

      login(user);
    };
    
    return (
       <Wrapper>
            <Button onPress={() => navigation.navigate('home')}>
                <ButtonTitle>go to next screen</ButtonTitle>
            </Button>
       </Wrapper>
    )
}