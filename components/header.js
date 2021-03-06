import Link from 'next/link'
export default function Header() {

    return (
        <>
            <header className="p-6 bg-green-500">
                <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
                <nav>
                    <Link href="/">
                        <a class="mr-4">Admin View</a>
                    </Link>
                    <Link href="/overview">
                        <a>Overview</a>
                    </Link>
                </nav>
            </header>
        </>
    )

}