import { useRouter } from "next/router"
import { useEffect, useContext } from "react";
import AppContext from "../../components/AppContext";
import { Api } from "../../api/api";
import * as React from "react"
import { Grid } from "@nextui-org/react";

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

    return ( 
    <div div style={{ padding: 12 }}>
        <Grid.Container justify="center" direction="column" alignContent="center">
            <h2 style={{ textAlign: 'center' }}>Redirecting...</h2>
        </Grid.Container>
    </div>)
}