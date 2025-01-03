import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="menu menu-horizontal px-0 space-x-0.5 menu-sm sm:menu-lg">
        <li>
          <Link href="/" className="px-2 min-[480px]:px-4">
            <span className="max-[420px]:hidden icon-[tabler--home] size-4 min-[500px]:size-5" />
            <span className="text-lg">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/career" className="px-2 min-[480px]:px-4">
            <span className="max-[420px]:hidden icon-[tabler--device-desktop-analytics] size-4 min-[500px]:size-5" />
            <span className="text-lg">Career</span>
          </Link>
        </li>
        <li>
          <Link href="/travel" className="px-2 min-[480px]:px-4">
            <span className="max-[420px]:hidden icon-[tabler--globe-filled] size-4 min-[500px]:size-5" />
            <span className="text-lg">Travel</span>
          </Link>
        </li>
        <li>
          <Link href="/photos" className="px-2 min-[480px]:px-4">
            <span className="max-[420px]:hidden icon-[tabler--camera] size-4 min-[500px]:size-5" />
            <span className="text-lg">Photos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
