import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <ul className="flex items-center flex-1">
          <button className="flex mr-auto">
            <a
              href="/"
              className="-m-1.5 p-1.5 font-bold text-gray-800 hover:font-bold hover:text-orange-800"
            >
              <span className="sr-only">Rich Ekelman's Logo</span>
              <img
                className="w-12 h-12"
                src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/logo.svg"
                alt="Rich's Logo Mark"
              />
            </a>
          </button>
          <li className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
              tabIndex={0}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </li>
          <li className="flex mr-auto sm:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mr-4 font-semibold leading-6 text-gray-800 transition duration-300 ease-in-out text-md hover:text-orange-800 hover:font-bold"
                tabIndex={0} // Add tab index
              >
                {item.name}
              </a>
            ))}
          </li>
        </ul>
      </nav>

      {/* mobile menu start */}
      <Dialog
        as="div"
        className=":hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-3/4 px-8 py-6 overflow-y-auto bg-gray-800 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-right">
            {/* <a href="/" className="-m-1.5 p-1.5 font-bold text-gray-800">
              <span className="sr-only">Rich Ekelman's logo</span>
              <img
                className="w-auto h-16"
                src="https://lngphvwiruyfwvdkclxc.supabase.co/storage/v1/object/public/images/images/icon-dark.png?t=2023-03-26T18%3A50%3A59.626Z"
                alt="Rich's Logo Mark"
              />
              Rich Ekelman
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-orange-600 ml-auto"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              tabIndex={0} // Add tab index
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <ul className="-my-6 divide-y divide-orange-500/25">
              <li className="py-6 space-y-2 text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:text-orange-600 hover:text-decoration-underline focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    tabIndex={0} // Add tab index
                  >
                    {item.name}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
