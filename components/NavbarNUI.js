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
    User,
    Dropdown
} from "@nextui-org/react";
import * as React from "react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Api, ApiUser } from "../api/api";
import { useEffect } from "react";

export default function NavbarNUI() {

    const router = useRouter();

    function goToHome() {
        router.push("/");
    }

    //Log in
    const [emailLogIn, setEmailLogIn] = React.useState();
    const [passLogIn, setPassLogIn] = React.useState();
    const [userEmail, setUserEmail] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    const [visible, setVisible] = React.useState(false);
    const [visibleSignUp, setVisibleSignUp] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerSignUp = () => setVisibleSignUp(true);

    async function LogIn () {
        const newUser = new ApiUser(emailLogIn, passLogIn);
        const res = await Api.login(newUser);
        if(res){
            setEnterEffect(true);
        }
    }

    //Sign up
    const [email, setEmail] = React.useState();
    const [pass, setPass] = React.useState();

    async function SignUp () {
        console.log(email, pass);
        const res = await Api.createUser(new ApiUser(email, pass));
    }

    const closeHandler = () => {
        setVisible(false);
    };

    const closeHandlerSignUp = () => {
        setVisibleSignUp(false);
    };
    //End of log in

    const [username, setUsername] = React.useState('');
    const [enterEffect, setEnterEffect] = React.useState(false);

    useEffect(() => {
        if(enterEffect){
            Api.setToken(localStorage.getItem("x-token"));
            Api.setUsername(localStorage.getItem("username"));
            // declare the data fetching function
            const emailCall = async () => {
                const data = await Api.getUserEmail();
                setUserEmail(data.email);
                setUsername(userEmail.substring(0, userEmail.indexOf('@')));
            }

            // call the function
            emailCall();
            setEnterEffect(false);
        }
    });

    return (
        <Navbar isBordered variant="sticky">
            <Button
                light
                color="primary"
                auto
                onPress={goToHome}
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
                { userEmail === '' ? <div>
                    <Navbar.Content>
                <Navbar.Item>
                    <Button auto light as={Link} color={"primary"} onPress={handler} css={{ px: 0 }}>
                        Log in
                    </Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat as={Link} color={"primary"} onPress={handlerSignUp}>
                        Sign Up
                    </Button>
                </Navbar.Item>
                </Navbar.Content>
                </div> : <div>
                <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <User
              bordered
              as="button"
              size="md"
              color="primary"
              name={userEmail}
              src="https://cdn.iconscout.com/icon/free/png-128/avatar-372-456324.png"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="primary" aria-label="User Actions" onAction={(key="logout") => {Api.logout(); setUsername(''); setUserEmail(''); console.log(userEmail)}}>
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
              {username}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
                </div> }
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
                        contentLeft={<Mail fill="currentColor"/>}
                        onChange={(e) => setEmailLogIn(e.target.value)}
                    />
                    <Input.Password
                        clearable
                        bordered
                        fullWidth
                        type="password"
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor"/>}
                        onChange={(e) => setPassLogIn(e.target.value)}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={ () => { LogIn(); closeHandler(); }} >
                        Log in
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visibleSignUp}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Sign up to <b>ScamUp</b>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Email"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input.Password
                        label="Password"
                        clearable
                        bordered
                        fullWidth
                        type="password"
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandlerSignUp}>
                        Close
                    </Button>
                    <Button auto onPress={ () => { SignUp(); closeHandlerSignUp();} } >
                        Sign up
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
}
