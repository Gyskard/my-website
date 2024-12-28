import Link from 'next/link'

export default function Header() {
    return (
        <div className="container mx-auto mt-4">
            <div className="flex justify-center">
                <ul className="menu menu-horizontal space-x-0.5 rtl:space-x-reverse">
                    <li>
                        <Link href="/">
                            <span className="icon-[tabler--home] size-5"></span>Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/career">
                            <span className="icon-[tabler--device-desktop-analytics] size-5"></span>Career
                        </Link>
                    </li>
                    <li>
                        <Link href="/travel">
                            <span className="icon-[tabler--globe-filled] size-5"></span>Travel
                        </Link>
                    </li>
                    <li>
                        <Link href="/photos">
                            <span className="icon-[tabler--camera] size-5"></span>Photos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
