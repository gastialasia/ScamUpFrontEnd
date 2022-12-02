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
import { useEffect, useContext } from "react";
import AppContext from "../components/AppContext";

export default function NavbarNUI() {

    const router = useRouter();
    const context = useContext(AppContext);

    function goToHome() {
        router.push("/");
    }

    //Log in
    const [emailLogIn, setEmailLogIn] = React.useState();
    const [passLogIn, setPassLogIn] = React.useState();
    const [userEmail, setUserEmail] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(true);

    const [visible, setVisible] = React.useState(false);
    const [visibleSignUp, setVisibleSignUp] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerSignUp = () => setVisibleSignUp(true);

    async function LogIn () {
        const newUser = new ApiUser(emailLogIn, passLogIn);
        const res = await Api.login(newUser, true);
        context.setTokenContext(res);
        context.setUsernameContext("BBBBBBb");
        if(res){
            setEnterEffect(true);
        }
    }

    function LogOut () {
        Api.logout(); 
        setUsername(''); 
        setUserEmail(''); 
        context.setTokenContext(null);
        context.setUsernameContext(null);
        console.log(userEmail)
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
    const [enterEffect, setEnterEffect] = React.useState(true);

    useEffect(() => {
        if(enterEffect){
            console.log("ok");
            var ok = localStorage.getItem("x-token");
            Api.setToken(localStorage.getItem("x-token"));
            Api.setUsername(localStorage.getItem("username"));
            // declare the data fetching function
            const emailCall = async () => {
                if (ok) {
                    const data = await Api.getUserEmail();
                    setUserEmail(data.email);
                    setUsername(userEmail.substring(0, userEmail.indexOf('@')));
                }
            }

            // call the function
            emailCall();
            setEnterEffect(false);
        }
    });

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <Navbar isBordered variant="sticky" maxWidth="fluid">
            <Navbar.Toggle showIn="xs" />
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
                variant={"underline"}
                enableCursorHighlight
            >
                <NextLink href="/pricing">
                    <Navbar.Link isActive={router.pathname=="/pricing"} >Pricing</Navbar.Link>
                </NextLink>
                <NextLink href="/search">
                    <Navbar.Link isActive={router.pathname=="/search"} >Search</Navbar.Link>
                </NextLink>
                <NextLink href="/about">
                    <Navbar.Link isActive={router.pathname=="/about"} >About us</Navbar.Link>
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
              //name={userEmail.substring(0, userEmail.indexOf('@'))}
              //name = "Usuario"
              name = {context.usernameContext}
              src="https://cdn.iconscout.com/icon/free/png-128/avatar-372-456324.png"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="primary" aria-label="User Actions" 
        onAction={(key) => {
            if (key == "logout") {
                LogOut();
            }
        }}>
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
              {userEmail}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
                </div> }
        </Navbar.Content>
        <Navbar.Collapse >
            <Navbar.CollapseItem activeColor="secondary" >
            <NextLink href="/pricing">
                <Link>{"Pricing"}</Link>
            </NextLink>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary" >
            <NextLink href="/search">
                <Link>{"Search"}</Link>
            </NextLink>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary" >
            <NextLink href="/about">
                <Link>{"About us"}</Link>
            </NextLink>
            </Navbar.CollapseItem>
        </Navbar.Collapse>
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
                        <Checkbox
                            //onChange={(e) => setRememberMe(e.target.value)}
                        >
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
