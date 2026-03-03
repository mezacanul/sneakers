import { useState, useEffect } from "react";
import { cn } from "../utils/cn";
import {
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";

const navLinks = [
    { href: "#", children: "Collections" },
    { href: "#", children: "Men" },
    { href: "#", children: "Women" },
    { href: "#", children: "About" },
    { href: "#", children: "Contact" },
];

type Config = {
    height: "h-0" | "h-100";
    opacity: "opacity-0" | "opacity-100";
    display: "absolute" | "hidden";
};

export default function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [config, setConfig] = useState<Config>({
        height: "h-0",
        opacity: "opacity-0",
        display: "hidden",
    });

    useEffect(() => {
        if (isMenuOpen) {
            setConfig((prev) => ({
                ...prev,
                display: "absolute",
            }));
            setTimeout(() => {
                setConfig((prev) => ({
                    ...prev,
                    height: "h-100",
                    opacity: "opacity-100",
                }));
            }, 100);
        } else {
            setTimeout(() => {
                setConfig((prev) => ({
                    ...prev,
                    opacity: "opacity-0",
                    height: "h-0",
                }));
            }, 100);
            setTimeout(() => {
                setConfig((prev) => ({
                    ...prev,
                    display: "hidden",
                }));
            }, 200);
        }
    }, [isMenuOpen]);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <span className="text-2xl" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <AiOutlineClose />
                ) : (
                    <AiOutlineMenu />
                )}
            </span>
            <MobileMenu
                toggleMenu={toggleMenu}
                config={config}
            />
        </>
    );
}

function MobileMenu({
    toggleMenu,
    config,
}: {
    toggleMenu: () => void;
    config: Config;
}) {
    return (
        <div
            className={cn(
                "absolute top-[8vh] shadow-md left-0 w-full bg-white transition-all duration-300 z-50",
                config.height,
                config.display
            )}
        >
            <div
                className={cn(
                    "flex h-full items-center justify-center transition-opacity duration-300",
                    config.opacity
                )}
            >
                <Nav toggleMenu={toggleMenu} />
            </div>
        </div>
    );
}

function Nav({ toggleMenu }: { toggleMenu?: () => void }) {
    return (
        <nav className="flex flex-col sm:flex-row items-center gap-8">
            {navLinks.map((link, index) => (
                <NavLink
                    key={index}
                    href={link.href}
                    toggleMenu={toggleMenu ?? (() => {})}
                >
                    {link.children}
                </NavLink>
            ))}
        </nav>
    );
}

function NavLink({
    href,
    children,
    toggleMenu,
}: {
    href: string;
    children: React.ReactNode;
    toggleMenu: () => void;
}) {
    const classNames = cn(
        "text-gray-600 font-medium text-xl sm:font-normal sm:text-white sm:text-lg",
        `hover:text-blue-800 transition-colors duration-300`
    );

    return (
        <a
            href={href}
            onClick={toggleMenu}
            className={classNames}
        >
            {children}
        </a>
    );
}
