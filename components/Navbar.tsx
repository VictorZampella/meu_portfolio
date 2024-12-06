'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-black p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className={`text-lg ${pathname === '/home' ?'text-yellow-300' : 'text-yellow-300'} hover:text-blue-600`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className={`text-lg ${pathname === '/portfolio' ?'text-yellow-300' : 'text-yellow-300'} hover:text-blue-600`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contato" className={`text-lg ${pathname === '/contato' ? 'text-yellow-300' : 'text-yellow-300'} hover:text-blue-600`}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}

