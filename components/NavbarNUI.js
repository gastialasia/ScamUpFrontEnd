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

    async function setUser(token, user) {
        const data = await Api.getUser();
        context.setTokenContext(token)
        context.setUsernameContext(user);
        context.setRoleContext(data.role)
        setUserEmail(data.email);
        setUsername(user);
    }

    useEffect(() => {
        if(enterEffect){
            // console.log("ok");
            var token = localStorage.getItem("x-token");
            var user = localStorage.getItem("username");
            Api.setToken(token);
            Api.setUsername(user);
            if (token) {
                setUser(token, user);
            }
            setEnterEffect(false);
        }
    });


    //Log in
    const [emailLogIn, setEmailLogIn] = React.useState();
    const [passLogIn, setPassLogIn] = React.useState();
    const [userEmail, setUserEmail] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);

    const [visible, setVisible] = React.useState(false);
    const [visibleSignUp, setVisibleSignUp] = React.useState(false);
    const handler = () => setVisible(true);
    const handlerSignUp = () => setVisibleSignUp(true);

    const closeHandler = () => {
        setVisible(false);
        setEmailLogIn('');
        setPassLogIn('');
        setInvalidCredentials(false);
    }
    const closeHandlerSignUp = () => {
        setEmail('');
        setPass('');
        setVisibleSignUp(false);
    }
    //Sign up
    const [email, setEmail] = React.useState();
    const [pass, setPass] = React.useState();


    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [username, setUsername] = React.useState('');
    const [enterEffect, setEnterEffect] = React.useState(true);
    const [invalidCredentials, setInvalidCredentials] = React.useState(false);

    async function LogIn () {
        const newUser = new ApiUser(emailLogIn, passLogIn);
        const res = await Api.login(newUser, rememberMe);
        if (res) {
            const name = emailLogIn.substring(0, emailLogIn.indexOf('@'))
            setUser(res, name);
            setEnterEffect(false);
            closeHandler();
        } else {
            console.log("Invalid credentials");
            setInvalidCredentials(true);
        }
    }

    const validateEmail = (str) => {
        return str.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };
    
    const LogInEmailHelper = React.useMemo(() => {
        setInvalidCredentials(false);
        if (!emailLogIn)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const LogInEmailValid = validateEmail(emailLogIn);
        return {
            text: LogInEmailValid ? "Correct email" : "Enter a valid email",
            color: LogInEmailValid ? "success" : "error",
            valid: LogInEmailValid,
        };
    }, [emailLogIn]
    );

    function LogOut () {
        Api.logout(); 
        setUsername(''); 
        setUserEmail(''); 
        context.setTokenContext(null);
        context.setUsernameContext(null);
        console.log(userEmail)
    }
    //End of log in

    async function SignUp () {
        console.log(email, pass);
        const res = await Api.createUser(new ApiUser(email, pass));
    }

    //Sign up validation


    
    const SignUpEmailHelper = React.useMemo(() => {
        if (!email)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const isSignUpEmailValid = validateEmail(email);
        return {
            text: isSignUpEmailValid ? "Correct email" : "Enter a valid email",
            color: isSignUpEmailValid ? "success" : "error",
            valid: isSignUpEmailValid,
        };
    }, [email]
    );

    const validatePassword = () => {
        return pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i);
    };

       const SignUpPasswordHelper = React.useMemo(() => {
        if (!pass)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const isSignUpPasswordValid = validatePassword(pass);
        return {
            text: isSignUpPasswordValid ? "Good password" : "8 characters, one uppercase letter, and one number REQUIRED",
            color: isSignUpPasswordValid ? "success" : "error",
            valid: isSignUpPasswordValid,
        };
    }, [pass]
    );

    

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
            <Dropdown.Item key="role" css={{ height: "$18" }}>
            {context.roleContext ?
              <Text b color="inherit" css={{ d: "flex" }}>
                Premium Plan
              </Text> :
              <Text b color="inherit" css={{ d: "flex" }}>
                Free Plan
              </Text>            
            }
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
                    {invalidCredentials ?
                    <Text size={12} color="error" >Invalid username or password</Text>
                    : <></>}
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
                        onChange={(e) => {setPassLogIn(e.target.value); setInvalidCredentials(false);}}
                    />
                    <Row justify="space-between">
                        <Checkbox
                            onChange={setRememberMe}
                        >
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        {/* <Text size={14}>Forgot password?</Text> */}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button 
                    disabled = {!LogInEmailHelper.valid || !passLogIn}
                    auto 
                    onPress={ () => { LogIn() }} 
                    >
                        Log in
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visibleSignUp}
                onClose={closeHandlerSignUp}
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
                        size="lg"
                        placeholder="Email"
                        contentLeft={<Mail fill="currentColor" />}
                        onChange={(e) => setEmail(e.target.value)}
                        status={SignUpEmailHelper.color}
                        color={SignUpEmailHelper.color}
                        helperColor={SignUpEmailHelper.color}
                        helperText={SignUpEmailHelper.text}
                    />
                    <Input.Password
                        label="Password"
                        clearable
                        bordered
                        fullWidth
                        type="password"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<Password fill="currentColor" />}
                        onChange={(e) => setPass(e.target.value)}
                        status={SignUpPasswordHelper.color}
                        color={SignUpPasswordHelper.color}
                        helperColor={SignUpPasswordHelper.color}
                        helperText={SignUpPasswordHelper.text}
                    />
                    <Text></Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandlerSignUp}>
                        Close
                    </Button>
                    <Button 
                    disabled = {!SignUpEmailHelper.valid || !SignUpPasswordHelper.valid}
                    auto onPress={ () => { SignUp(); closeHandlerSignUp();} } >
                        Sign up
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
}
