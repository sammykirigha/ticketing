import Link from "next/link";
import image from "../assets/logo.webp";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default ({ currentUser }) => {
    const links = [
        !currentUser && { label: "Sign Up", href: "/auth/signup" },
        !currentUser && { label: "Sign In", href: "/auth/signin" },
        currentUser && { label: "Sign Out", href: "/auth/signout" },
    ]
        .filter((linkConfig) => linkConfig)
        .map(({ label, href }) => {
            return (
                <li key={href} className="nav-item">
                    <Link href={href}>
                        <a className="nav-link">{label}</a>
                    </Link>
                </li>
            );
        });
    return (
        <nav className="navbar navbar-light bg-light">
            <Link href="/">
                <a>
                    <img
                        src={image.src}
                        height="60"
                        width="150"
                        className="rounded-sm"
                    />
                </a>
            </Link>
            <div className="d-flex justify-content-end">
                <ul className="nav d-flex align-items-center">{links}</ul>
            </div>
        </nav>
    );
};
