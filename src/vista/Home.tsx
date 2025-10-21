function Home() {
    return (
        <main className="flex-1">
            <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-10 md:py-15">
                <div className="mx-auto max-w-8xl">
                    <div className="relative min-h-[600px] w-full rounded-xl overflow-hidden flex flex-col items-start justify-end p-8 md:p-12 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url("/hero.png")' }} >
                        <div className="max-w-xl text-white space-y-4">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Transformando tus espacios</h1>
                            <p className="text-base md:text-lg text-white/90">
                                Transforma tus espacios con nuestras soluciones a medida para cocinas, closets y baños. Vive la combinación perfecta de estilo y funcionalidad
                            </p>
                        </div>
                        <a href="/Portafoli_MMAJ_COCINAS.pdf" target="_blank" className="mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                            <span className="truncate">Descarga Nuestro Catálogo</span>
                        </a>
                    </div>
                    <section className="py-16 md:py-24">
                        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Nuestras Colecciones Exclusivas</h2>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">Descubre nuestras colecciones seleccionadas, diseñadas para inspirar y elevar tu hogar.</p>
                        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col gap-4 group">
                                <div className="w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/cocina-1.jpg")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cocinas Modernas</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Diseños elegantes y distribuciones innovadoras para el corazón de tu hogar.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 group">
                                <div className="w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/closet-1.png")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sistemas de Closets a Medida</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Maximiza el espacio y la organización con nuestras soluciones de closets a medida.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 group">
                                <div className="w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/bano-1.png")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Muebles de Baño Elegantes</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Transforma tu baño en un refugio spa con nuestro mobiliario de lujo.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 group">
                                <div className="w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: 'url("/materiales.JPG")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Materiales de Alta Calidad</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Materiales duraderos y elegantes para cada espacio de tu hogar.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark rounded-xl">
                        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Calidad y Diseño Sin Compromisos</h2>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Combinamos la maestría artesanal con materiales de primera calidad para crear espacios que son a la vez hermosos y funcionales. Nuestro compromiso con la sostenibilidad garantiza soluciones ecológicas para tu hogar.</p>
                            </div>
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center text-center p-6 py-[60px] bg-white dark:bg-black/20 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                        <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px" xmlns="http://www.w3.org/2000/svg"><path d="M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"></path></svg>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">Soluciones a Medida</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Diseños a medida que se adaptan a tu estilo único y a las necesidades de tu espacio</p>
                                </div>
                                <div
                                    className="flex flex-col items-center text-center p-6 py-[60px] bg-white dark:bg-black/20 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                        <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">Materiales Premium</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Materiales de alta calidad para una durabilidad prolongada.
                                        durability and aesthetic appeal.</p>
                                </div>
                                <div
                                    className="flex flex-col items-center text-center p-6 py-[60px] bg-white dark:bg-black/20 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                        <svg fill="currentColor" height="28px" viewBox="0 0 256 256" width="28px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">Prácticas Sostenibles</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Opciones ecológicas que minimizan el impacto ambiental.</p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="text-center py-16 md:py-24">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">¿Listo para iniciar tu proyecto?</h2>
                        <div className="mt-8 flex justify-center">
                            <a href="https://wa.me/523310671576" target="_blank" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                                <span className="truncate">Contactanos</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home
