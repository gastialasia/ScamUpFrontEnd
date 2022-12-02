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
                <Grid.Container gap={30} justify="start">
                    <Grid xs={1} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Juan Ignacio Matilla</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Patricio Escudeiro</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Pedro Curti</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Felipe Hiba</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Gastón Alasia</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Matías Della Torre</Text>
                        </div>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <div>
                            <Image
                                width={180}
                                height={180}
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                alt="Default Image"
                                objectFit="cover"
                            />
                            <Text>Gonzalo Elewaut</Text>
                        </div>
                    </Grid>
                </Grid.Container>
            </div>
        </div>

    );
}

export default AboutPage;

