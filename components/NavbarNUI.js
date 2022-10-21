import {
    Navbar,
    Text,
    Button,
    Link,
    Modal,
    Input,
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
        <div>
            <Navbar isBordered={true} variant="sticky">
                <Button
                    light
                    color="primary"
                    auto
                    onClick={goToHome}
                    ripple={false}
                >
                    <Navbar.Brand>
                        <AcmeLogo />
                        <Text b color="inherit" hideIn="xs">
                            ScamUp
                        </Text>
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
                        <Button auto light as={Link} color={"primary"} onClick={handler}>
                            Log in
                        </Button>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Button auto flat as={Link} color={"primary"}>
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            ScamUp
                        </Text>
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
        </div>
    );
}
