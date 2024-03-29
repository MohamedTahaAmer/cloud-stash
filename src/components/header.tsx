import { Button, buttonVariants } from "@/components/ui/button"
import {
	OrganizationSwitcher,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export function Header() {
	return (
		<div className="relative z-10 border-b pt-1 bg-slate-100">
			<div className="items-center container mx-auto justify-between flex">
				<Link
					href="/home"
					className="flex font-bold gap-2 items-center text-2xl text-black"
				>
					<Image
						src="/logo.png"
						width="50"
						height="50"
						alt="cloud stash logo"
					/>
					Cloud Stash
				</Link>

				<div className="flex gap-2">
					<OrganizationSwitcher />
					<UserButton />
					<SignedOut>
						<SignInButton>
							<Button>Sign In</Button>
						</SignInButton>
					</SignedOut>
				</div>
			</div>
		</div>
	)
}
