

function Footer() {


    return (

        <footer className="border-t border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 MMAJ Cocinas Integrales. Todos Los Derechos Reservados.</p>
                    <div className="flex items-center gap-6">
                        {/* <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            href="#"></a>
                        <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            href="#"></a> */}
                        <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                            href="https://wa.me/523310671576" target="_blank">Whatsapp</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
