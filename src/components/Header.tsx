import Link from 'next/link'

export default function Header() {
    return (
        <div className="container mx-auto mt-4 flex justify-center">
            <ul className="menu menu-horizontal space-x-0.5 rtl:space-x-reverse">
                <li>
                    <Link href="/">
                        <span className="icon-[tabler--home] size-5" />Home
                    </Link>
                </li>
                <li>
                    <Link href="/career">
                        <span className="icon-[tabler--device-desktop-analytics] size-5" />Career
                    </Link>
                </li>
                <li>
                    <Link href="/travel">
                        <span className="icon-[tabler--globe-filled] size-5" />Travel
                    </Link>
                </li>
                <li>
                    <Link href="/photos">
                        <span className="icon-[tabler--camera] size-5" />Photos
                    </Link>
                </li>
            </ul>
        </div>
    );
  }
