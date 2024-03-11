import Link from "next/link"

export function Footer() {
	return (
		<div className="py-4 bg-gray-100 flex items-center">
			<div className="container mx-auto flex justify-between items-center">
				<Link className="text-blue-900 hover:text-blue-500" href="/home">
					Cloud Stash
				</Link>

				<Link className="text-blue-900 hover:text-blue-500" href="/privacy">
					Privacy Policy
				</Link>
				<Link
					className="text-blue-900 hover:text-blue-500"
					href="/terms-of-service"
				>
					Terms of Service
				</Link>
				<Link className="text-blue-900 hover:text-blue-500" href="/about">
					About
				</Link>
			</div>
		</div>
	)
}
