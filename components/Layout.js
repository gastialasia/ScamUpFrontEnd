import NavbarNUI from "./NavbarNUI";

export default function Layout({ children }) {
    return (
        <div>
            <NavbarNUI/>
            <main>{children}</main>
        </div>
    );
}
