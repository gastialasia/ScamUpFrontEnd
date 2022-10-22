import {
    Navbar,
    Text,
    Button,
    Link,
    Modal,
    Input,
    Image,
    Row,
    Checkbox,
} from "@nextui-org/react";
import * as React from "react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { AcmeLogo } from "./acmeLogo";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function NavbarNUI() {
    const router = useRouter();

    function goToHome() {
        router.push("/");
    }

    //Log in
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    //End of log in

    return (
        <Navbar isBordered variant="sticky">
            <Button
                light
                color="primary"
                auto
                onClick={goToHome}
                ripple={false}
                css={{ px: 0 }}
            >
                <Navbar.Brand>
                    <Image 
                    width={40}  
                    src="/assets/icon.png"
                    alt="Scam Up Icon"
                    objectFit="cover"
                    css={{ pr: 3 }}
                    />
                    <Image 
                    width={75}  
                    src="/assets/logo.png"
                    alt="Scam Up Logo"
                    objectFit="cover"
                    />
                </Navbar.Brand>
            </Button>
            <Navbar.Content
                activeColor={"primary"}
                hideIn="xs"
                variant={"highlight"}
            >
                <NextLink href="/pricing">
                    <Navbar.Link>Pricing</Navbar.Link>
                </NextLink>
                <NextLink href="/search">
                    <Navbar.Link>Search</Navbar.Link>
                </NextLink>
                <NextLink href="/about">
                    <Navbar.Link>About us</Navbar.Link>
                </NextLink>
            </Navbar.Content>
            <Navbar.Content>
            <Navbar.Item>
                    <Button auto light as={Link} color={"primary"} onClick={handler} css={{ px: 0 }}>
                        Log in
                    </Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat as={Link} color={"primary"}>
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to <b>ScamUp</b>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        type="password"
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
}
