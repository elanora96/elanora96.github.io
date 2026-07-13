import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { repository } from "../../../package.json";
import styles from "./Navbar.module.css";

interface NavbarProps {
	siteName?: string;
	repoUrl?: string;
}

const Navbar: FC<NavbarProps> = ({
	siteName = "elanora.lol",
	repoUrl = (/https?:\/\/[^\s]+/.exec(repository.url) ?? [""])[0],
}) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClosing, setMenuClosing] = useState(false);

	const handleClose = () => {
		setMenuClosing(true);
		setTimeout(() => {
			setMenuClosing(false);
			setMenuOpen(false);
		}, 300);
	};

	const handleNavLink = ({
		target,
	}:
		| React.MouseEvent<HTMLElement, MouseEvent>
		| React.KeyboardEvent<HTMLElement>) => {
		if (menuOpen) {
			const el = target as HTMLElement;
			if (el.tagName === "A") handleClose();
		}
	};

	return (
		<header className={styles.Navbar}>
			<span className={styles.NavlogoContainer}>
				<nav className={styles.menu}>
					<button
						type="button"
						onClick={() => {
							if (menuOpen) {
								handleClose();
							} else {
								setMenuOpen(true);
							}
						}}
					>
						☰
					</button>
				</nav>
				<Link className={styles.Navlogo} to="/">
					{siteName}
				</Link>
			</span>
			<nav
				className={[
					styles.Navlinks,
					menuOpen ? styles.open : "",
					menuClosing ? styles.closing : "",
				].join(" ")}
				onClick={(event) => handleNavLink(event)}
				onKeyDown={(event) => handleNavLink(event)}
			>
				<Link to="/">Home</Link> <Link to="/blog">Blog</Link>{" "}
				<Link to="/resume">Resume</Link>{" "}
				{repoUrl ? <a href={repoUrl}>Source</a> : ""}
			</nav>
		</header>
	);
};

export default Navbar;
