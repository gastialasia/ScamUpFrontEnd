import { Navbar, Text, Button, Link } from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";

export default function NavbarNUI() {
    return (
        <Navbar isBordered={true} variant="sticky">
            <Navbar.Brand>
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
                ACME
            </Text>
            </Navbar.Brand>
            <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"highlight"}>
            <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link isActive href="#">Customers</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Button auto flat as={Link} color={"primary"} href="#">
                Sign Up
                </Button>
            </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
}