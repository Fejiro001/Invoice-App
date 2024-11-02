import InputError from './InputError';
import InputLabel from './InputLabel';
import TextInput from './TextInput';

export default function AddNewItem() {
    return (
        <li className="space-y-6 md:flex md:gap-4 md:space-y-0">
            {/* Item Name */}
            <div>
                <div className="flex justify-between md:hidden">
                    <InputLabel value={'Item Name'} />
                    <InputError message={"can't be empty"} />
                </div>
                <TextInput required />
            </div>

            <div className="flex justify-between gap-4">
                {/* Item Quantity */}
                <div>
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Qty.'} />
                    </div>
                    <TextInput className="!w-12" required />
                </div>
                {/* Item Price */}
                <div className="grow">
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Price'} />
                    </div>
                    <TextInput required />
                </div>
                {/* Item Total */}
                <div className="grow">
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Total'} />
                    </div>
                    <input
                        className="w-full rounded-md border-none bg-white focus:border-color-02 focus:ring-color-02 dark:bg-color-12 dark:text-white dark:focus:border-color-04 dark:focus:ring-color-04"
                        placeholder="156.00"
                        readOnly
                    />
                </div>
                <button className="flex items-end py-4">
                    <svg
                        width="13"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                            fill="#888EB0"
                            fillRule="nonzero"
                        />
                    </svg>
                </button>
            </div>
        </li>
    );
}
