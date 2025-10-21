

function Header() {


    return (

        <header className="flex items-center justify-between whitespace-nowrap border-b border-black/10 dark:border-white/10 md:px-10 lg:px-20 xl:px-40 py-4">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white w-[80px]">
                <h1>
                    <img src="/logo-mmaj.png" alt="Cocinas Integrales MMAJ" />
                </h1>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                {/* <nav className="flex items-center gap-6">
                    <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Kitchens</a>
                    <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Closets</a>
                    <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Bathrooms</a>
                    <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Melamine</a>
                    <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>
                </nav> */}
                <a target="_blank" href="https://wa.me/523310671576" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
                    <span className="truncate">Comienza tu proyecto</span>
                </a>
            </div>
        </header>
  )
}

export default Header
