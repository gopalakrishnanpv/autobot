export default function CheckboxGroup(props) {
    return (
        <div>
            <p className="font-medium my-3">Checkboxes</p>
            <div id="checkboxgroup" className="flex flex-row align-center justify-start gap-3">
                <div className="flex align-center justify-center gap-2">
                    <input type="checkbox" id="tamil" name="language" value="tamil" />
                    <label htmlFor="tamil">Tamil</label>
                </div>
                <div className="flex align-center justify-center gap-2">
                    <input type="checkbox" id="english" name="language" value="english" />
                    <label htmlFor="english">English</label>
                </div>
            </div>
        </div>
    );
}