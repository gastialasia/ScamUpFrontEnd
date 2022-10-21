import { IconScamUp } from "../components/icon";
import { Grid } from "@nextui-org/react";

function AboutPage() {

    return (
        <div style={{ padding: 15 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>About us</h2>
                <p>We are a group of Software Engineering students from Instituto Tecnológico de Buenos Aires (ITBA) and this is our project for this term. </p>
            </Grid.Container>
        </div>
        
    );
}

export default AboutPage;

