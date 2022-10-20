import { Navbar, Text, Button, Link } from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";
import NextLink from 'next/link'
import { useRouter } from "next/router";

export default function NavbarNUI() {
    const router = useRouter()

    function goToHome() {
        router.push("/");
    }

    return (
        <Navbar isBordered={true} variant="sticky">
                <Button light color="primary" auto onClick={goToHome} ripple={false}>
                    <Navbar.Brand>
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        ScamUp
                    </Text>
                    </Navbar.Brand>
                </Button>
            <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"highlight"}>
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
            <NextLink href="/login">
                <Navbar.Link color="inherit">
                    Login
                </Navbar.Link>
            </NextLink>
            <Navbar.Item>
                <Button auto flat as={Link} color={"primary"} href="#">
                Sign Up
                </Button>
            </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
}