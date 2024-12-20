import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full rounded-md border-color-05 py-4 text-lg-variant shadow-sm focus:border-color-02 focus:ring-color-02 dark:border-color-04 dark:bg-color-03 dark:text-white dark:focus:border-color-02 dark:focus:ring-color-02 ' +
                className
            }
            ref={localRef}
        />
    );
});
