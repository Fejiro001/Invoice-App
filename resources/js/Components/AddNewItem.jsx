import InputError from './InputError';
import InputLabel from './InputLabel';
import TextInput from './TextInput';

export default function AddNewItem() {
    return (
        <li>
            {/* Item Name */}
            <div>
                <div className="flex justify-between md:hidden">
                    <InputLabel value={'Item Name'} />
                    <InputError message={"can't be empty"} />
                </div>
                <TextInput required />
            </div>
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
                    <InputError message={"can't be empty"} />
                </div>
                <TextInput required />
            </div>
        </li>
    );
}
