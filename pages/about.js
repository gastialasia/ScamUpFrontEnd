
import { Image, Grid, Text, Card, Col } from "@nextui-org/react";
import MemberCard from "../components/MemberCard";

function AboutPage() {

    return (
        <div style={{ padding: 15 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>About us</h2>
                <p>We are a group of Software Engineering students from Instituto Tecnológico de Buenos Aires (ITBA) and this is our project for this term. </p>
            </Grid.Container>
            <div style={{ padding: 15 }}>
                <Col>
                <Text h3>Back end</Text>
                <Grid.Container gap={2} justify="start" fluid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Juan Ignacio Matilla" url="/assets/matilla.jpeg" role="Back end designer"/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Pedro Curti" url="/assets/curti.jpeg" role="Back end developer"/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Felipe Hiba" url="/assets/hiba.jpeg" role="Back end developer"/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Patricio Ezequiel Escudeiro García" url="/assets/escudeiro.jpg" role="Back end developer"/>
                    </Grid>
                </Grid.Container>
                <Text h3>Front end</Text>
                <Grid.Container gap={2} justify="start" fluid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Gastón Alasia" url="/assets/alasia.jpeg" role="Scrum Master / Front end developer"/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Matias Daniel Della Torre" url="/assets/torre.jpeg" role="Front end developer"/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} lg={3} >
                        <MemberCard name="Gonzalo Martín Elewaut" url="/assets/elewaut.jpeg" role="Front end developer"/>
                    </Grid>
                </Grid.Container>
                </Col>
            </div>
        </div>

    );
}

export default AboutPage;

