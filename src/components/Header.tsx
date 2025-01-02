import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-center items-center mt-4">
      <ul className="menu menu-horizontal px-0 sm:space-x-0.5 menu-xs sm:menu-lg">
        <li>
          <Link href="/" className="px-1 sm:px-4">
            <span className="icon-[tabler--home] size-3 fold:size-4 pixel:size-5" />
            <span className="text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/career" className="px-1 sm:px-4">
            <span className="icon-[tabler--device-desktop-analytics] size-3 fold:size-4 pixel:size-5" />
            <span className="text-base">Career</span>
          </Link>
        </li>
        <li>
          <Link href="/travel" className="px-1 sm:px-4">
            <span className="icon-[tabler--globe-filled] size-3 fold:size-4 pixel:size-5" />
            <span className="text-base">Travel</span>
          </Link>
        </li>
        <li>
          <Link href="/photos" className="px-1 sm:px-4">
            <span className="icon-[tabler--camera] size-3 fold:size-4 pixel:size-5" />
            <span className="text-base">Photos</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
