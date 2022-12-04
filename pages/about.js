
import { Image, Grid, Text, Card } from "@nextui-org/react";
import MemberCard from "../components/MemberCard";

function AboutPage() {

    return (
        <div style={{ padding: 15 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>About us</h2>
                <p>We are a group of Software Engineering students from Instituto Tecnológico de Buenos Aires (ITBA) and this is our project for this term. </p>
            </Grid.Container>
            <div style={{ padding: 15 }}>
                <Grid.Container gap={2} justify="start" fluid>
                    <Grid xs={12} md={2} >
                        <MemberCard name="Juan Ignacio Matilla" url="https://picsum.photos/200/300"/>
                    </Grid>
                </Grid.Container>
            </div>
        </div>

    );
}

export default AboutPage;

