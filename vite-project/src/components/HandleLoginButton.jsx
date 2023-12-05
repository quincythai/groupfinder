import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {Button, Text} from '@chakra-ui/react'

const HandleLoginButtion = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    // console.log(isAuthenticated);
    // if(isAuthenticated){
    //     console.log(user.name)
    // }
    return(
        isLoading ?
            <Text>
                Loading ...
            </Text>
        :
            isAuthenticated ?
                <Button
                color='white'
                variant='link' // Change the variant to 'solid'
                bgColor='transparent' // Set a transparent background color (optional)
                _hover={{ transform: 'scale(1.03)' }}
                _active={{ opacity: '60%' }}
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log out
                </Button>
            :
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
    );
}

export default HandleLoginButtion