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
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 flex items-center justify-between">
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
                <ul className="text-blue-500 text-xl font-bold px-3">{links}</ul>
            </div>
        </nav>
    );
};
