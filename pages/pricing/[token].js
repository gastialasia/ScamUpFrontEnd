import { useRouter } from "next/router"
import { useEffect, useContext } from "react";
import AppContext from "../../components/AppContext";
import { Api } from "../../api/api";
import * as React from "react"

export default function GetToken() {
    const router = useRouter();
    const context = useContext(AppContext);
    const token = router.query.token;
    const [enterEffect, setEnterEffect] = React.useState(true);

    useEffect(() => {
        if (enterEffect) {
            if (token) {
                setEnterEffect(false);
                console.log(token);
                Api.setToken(token);
                Api.setUsername("User");
                setUser(token);
            }
        }
    });

    async function setUser(token) {
        const data = await Api.getUser()
        console.log(data);
        if (data) {
            const name = data.email.substring(0, data.email.indexOf('@'))
            context.setUsernameContext(name);
            context.setTokenContext(token);
            context.setRoleContext(data.role);
            if (localStorage.getItem("x-token")) {
                localStorage.setItem("x-token", token);
                localStorage.setItem("username", name);
            }
        }
        router.push("/pricing");
    }
    /**
    useEffect(() => {
        // // if(token) {
        // //     // while (!token) {
        // //         //     token = router.query.token;
        // //         // }
        // //         Api.setToken(token);
        // console.log(token);
        // Api.setUsername("User");
        // const data = Api.getUser();
        // console.log(data);
        // // }
        
         * 
         if (data) {
             const name = data.email?.substring(0, data.email.indexOf('@'));
             // var ok = localStorage.getItem("x-token");
             // if (ok) {
                 localStorage.setItem("x-token", token);
                 // }
                 Api.setUsername(name);
                 context.setTokenContext(token)
                 context.setUsernameContext(name);
                 context.setRoleContext(data.role)
                }
                router.push("/pricing");
            });
            */
    // async function getUsr() {
    //     return await Api.getUser();
    // }

    // if(token && ok) {
    //     Api.setToken(token);
    //     Api.setUsername("MyUser");
    //     console.log(token);
    //     console.log(Api.token);
    //     // const data = getUsr();
    //     // console.log(data);

    //     ok = false;
    // }

    return <h1>Redirecting...</h1>
}