export default function RadioButtonGroup(props) {
    return (
        <div>
            <p className="font-medium my-3 ">Radio Buttons</p>
            <div id="radiogroup" className="flex flex-row align-center justify-start gap-3">
                <div className="flex align-center justify-center gap-2">
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex align-center justify-center gap-2">
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="flex align-center justify-center gap-2">
                    <input type="radio" id="other" name="gender" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
        </div>
    );
}