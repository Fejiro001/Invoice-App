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

            <div className="flex items-end justify-between gap-4">
                {/* Item Quantity */}
                <div>
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Qty.'} />
                        <InputError message={"can't be empty"} />
                    </div>
                    <TextInput required />
                </div>
                {/* Item Price */}
                <div>
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Price'} />
                        <InputError message={"can't be empty"} />
                    </div>
                    <TextInput required />
                </div>
                {/* Item Total */}
                <div>
                    <div className="flex justify-between md:hidden">
                        <InputLabel value={'Total'} />
                    </div>
                    <p className="py-[9px]">156.00</p>
                </div>
                <div className="pb-4">
                    <img className="w-6" src="/images/icon-delete.svg" />
                </div>
            </div>
        </li>
    );
}
