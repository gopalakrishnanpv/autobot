'use client'

export default function Range(props) {
    return (
        <div>
            <p className="font-medium my-3">{props.title}</p>
            <div className="flex align-center justify-center gap-2 ">
                <input type="range" id="range-slider" min={props.min} max={props.max} defaultValue={props.defaultValue}
                    onChange={handleChange} className="w-full" />
                <output id="range-value" className="p-1 font-medium text-center">{props.defaultValue} </output>
            </div>
        </div>
    );

    function handleChange() {
        var input = document.getElementById("range-slider");
        var currentVal = input.value;
        document.getElementById("range-value").value = currentVal;
    }
}