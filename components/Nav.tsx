"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Profile from "./Profile";

const Nav = () => {
	const [toggleDropDown, setToggleDropdown] = useState<boolean>(false);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="assets/images/logo.svg"
					alt="Logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">Logo</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				<div className="flex gap-3 md:gap-5">
					<Link href="/create-prompt" className="black_btn">
						Create Post
					</Link>

					<button type="button" className="outline_btn">
						Sign Out
					</button>

					<Link href="/profile">
						<Profile width={37} height={37} />
					</Link>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				<div className="flex">
					<Profile
						width={37}
						height={37}
						onClick={() => {
							setToggleDropdown((prev) => !prev);
						}}
					/>
					/* The code below renders when Profile is clicked in mobile view. This
					brings up a dropdown nav having the relevant links in place */
					{toggleDropDown && (
						<div className="dropdown">
							<Link
								href="/profile"
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}>
								My Profile
							</Link>
							<Link
								href="/create-prompt"
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}>
								Create Post
							</Link>
							<button
								type="button"
								onClick={() => {
									setToggleDropdown(false);
								}}
								className="mt-5 w-full black_btn">
								Sign Out
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
