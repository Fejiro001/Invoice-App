function ModalWrapper({ children }) {
    return (
        <div className="fixed left-0 top-0 w-full bg-black/60 md:top-20 lg:left-20 lg:top-0">
            <div className={`relative w-full shadow-lg md:max-w-[40rem]`}>
                <div className="max-h-screen overflow-y-auto scrollbar scrollbar-track-white scrollbar-thumb-color-06 dark:scrollbar-track-color-12 dark:scrollbar-thumb-color-04">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalWrapper;
