import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const navigation = [
  { name: 'Laporin Rek', href: '/lapor' },
  { name: 'Beranda', href: '/' },
  { name: 'Chatbot', href: '/chatbot' },
  { name: 'Riwayat', href: '/riwayat' },
];

export default function Navbar({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl">
      <nav aria-label="Global" className="flex items-center justify-between p-6 ">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SI NGALAM</span>
            <img
              alt=""
              src="public/images/logo.png"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:flex-grow lg:justify-end lg:items-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold leading-6 text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md">
              Logout
            </button>
          ) : (
            <a href="/login" className="text-sm font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>

      {/* Mobile View Menu */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel focus="true" className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {user ? (
                  <button onClick={handleLogout} className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-red-600 hover:bg-red-500">
                    Logout
                  </button>
                ) : (
                  <a href="/login" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
