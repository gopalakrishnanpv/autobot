import CheckboxGroup from "../base/checkbox-group";
import Dropdown from "../base/dropdown";
import Heading from "../base/heading";
import Input from "../base/input";
import RadioButtonGroup from "../base/radiobutton-group";
import Range from "../base/range";

function validateEmail() {
    var email = document.getElementById("email").value;
    var lblError = document.getElementById("emailError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (email.length == 0) {
        lblError.innerHTML = "";
        return;
    }
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
    }
}

export default function Inputs(props) {
    return (
        <div className="p-5">
            <Heading text="Inputs" />
            <div
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 align-center justify-start">
                <Input type="text" id="name" title="Text" placeholder="Enter your name" />
                <Input type="number" id="age" title="Number" placeholder="Enter your age" />
                <div>
                    <Input type="email" id="email" title="Email" placeholder="Enter your email"
                        onKeyUp={validateEmail} />
                    <p id="emailError" className="text-sm mt-2 text-red-600"></p>
                </div>
                <Input type="password" id="password" title="Password" placeholder="Enter your password" />
                <Dropdown />
                <Input type="date" id="date" title="Date" />
                <Input type="time" id="time" title="Time" />
                {/* <Input type="file" id="file" title="File" /> */}
                <CheckboxGroup />
                <RadioButtonGroup />
                <Range id="range" title="Range" min="1" max="100" defaultValue="24" />
            </div>
        </div>
    );
}