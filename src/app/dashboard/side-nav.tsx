"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FileIcon, StarIcon, TrashIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function SideNavLink({
	href,
	Icon,
	label,
}: {
	href: string
	Icon: React.ReactElement
	label: string
}): JSX.Element {
	const pathname = usePathname()

	return (
		<Link href={href}>
			<div
				className={cn(
					buttonVariants({ variant: "link" }),
					"flex gap-2 pl-0 justify-start",
					{
						"text-blue-500 underline": pathname.includes(href),
					},
				)}
			>
				{Icon} {label}
			</div>
		</Link>
	)
}

export function SideNav() {
	return (
		<div className="w-40 flex flex-col bg-slate-100 rounded-lg relative h-[650px] -top-10 p-4">
			<SideNavLink
				href="/dashboard/files"
				Icon={<FileIcon />}
				label="All Files"
			/>

			<SideNavLink
				href="/dashboard/favorites"
				Icon={<StarIcon />}
				label="Favorites"
			/>
			<SideNavLink href="/dashboard/trash" Icon={<TrashIcon />} label="Trash" />
		</div>
	)
}
