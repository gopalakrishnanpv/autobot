import CheckboxGroup from "../base/checkbox-group";
import Dropdown from "../base/dropdown";
import Heading from "../base/heading";
import Input from "../base/input";
import RadioButtonGroup from "../base/radiobutton-group";
import Range from "../base/range";


export default function Inputs(props) {
    return (
        <div className="p-5">
            <Heading text="Inputs" />
            <div
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 flex gap-5 align-center justify-start">
                <Input type="text" id="name" title="Text" placeholder="Enter your name" />
                <Input type="number" id="age" title="Number" placeholder="Enter your age" />
                <Input type="email" id="email" title="Email" placeholder="Enter your email" />
                <Input type="password" id="password" title="Password" placeholder="Enter your password" />
                <Dropdown />
                <Input type="date" id="date" title="Date" />
                <Input type="time" id="time" title="Time" />
                <Input type="file" id="file" title="File" />
                <CheckboxGroup />
                <RadioButtonGroup />
                <Range id="range" title="Range" min="1" max="100" defaultValue="24" />
            </div>
        </div>
    );
}