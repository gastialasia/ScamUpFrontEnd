import { IconScamUp } from "../components/icon";
import { Image, Grid, Text } from "@nextui-org/react";

function AboutPage() {

    return (
        <div style={{ padding: 15 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>About us</h2>
                <p>We are a group of Software Engineering students from Instituto Tecnológico de Buenos Aires (ITBA) and this is our project for this term. </p>
            </Grid.Container>
            <div style={{ padding: 15 }}>
                <Grid.Container gap={2} justify="space-around">
                    <Grid xs={6} md={4}>
                        <div>
                            <Image
                                width={320}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Nombre 1</Text>
                        </div>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Image
                            width={320}
                            height={180}
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Image
                            width={320}
                            height={180}
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Image
                            width={320}
                            height={180}
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                    <Grid xs={6} md={4}>
                        <Image
                            width={320}
                            height={180}
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="Default Image"
                            objectFit="cover"
                        />
                    </Grid>
                </Grid.Container>
            </div>
        </div>

    );
}

export default AboutPage;

