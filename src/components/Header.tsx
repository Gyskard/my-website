import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-center mt-4 px-2">
      <ul className="menu menu-horizontal px-0 space-x-1 min-[360px]:space-x-2 min-[420px]:space-x-3 sm:space-x-1 menu-xs sm:menu-lg">
        <li>
          <Link href="/" className="px-1">
            <span className="icon-[tabler--home] size-4 min-[500px]:size-5" />
            <span className="text-base min-[390px]:text-lg">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/career" className="px-1">
            <span className="icon-[tabler--device-desktop-analytics] size-4 min-[500px]:size-5" />
            <span className="text-base min-[390px]:text-lg">Career</span>
          </Link>
        </li>
        <li>
          <Link href="/travel" className="px-1">
            <span className="icon-[tabler--globe-filled] size-4 min-[500px]:size-5" />
            <span className="text-base min-[390px]:text-lg">Travel</span>
          </Link>
        </li>
        <li>
          <Link href="/photos" className="px-1">
            <span className="icon-[tabler--camera] size-4 min-[500px]:size-5" />
            <span className="text-base min-[390px]:text-lg">Photos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
