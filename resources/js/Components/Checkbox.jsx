export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-color-01 shadow-sm focus:ring-color-01 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-color-01 dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
