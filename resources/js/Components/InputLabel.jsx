export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `mb-2 block text-base-variant text-color-07 dark:text-color-06` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
