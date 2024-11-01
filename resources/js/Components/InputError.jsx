export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'text-xs text-color-09 dark:text-color-09 ' + className}
        >
            {message}
        </p>
    ) : null;
}
