import Button from "../base/button";
import Heading from "../base/heading";


export default function Actions(props) {

    let clickMessage;

    function showAlert() {
        alert("This is an alert box.");
    }

    function showConfirmAlert() {
        window.confirm('This is a confirm alert box.');
    }

    function openWindow() {
        window.open("https://portfolio-gopalakrishnan.vercel.app", "myPortfolio", "width=1200, height=600, top=0, left=0, scrollbars=yes, resizable=yes");
    }

    function toggleElement() {
        let toggleHint = document.getElementById("toggle-hint");
        if (toggleHint.style.display == "none") {
            toggleHint.style.display = "block"
        }
        else {
            toggleHint.style.display = "none"
        }
    }

    function handleClick(e) {
        e.preventDefault();
        let clickHint = document.getElementById("click-hint");
        let clickHintMessage = "";
        if (e.nativeEvent.button === 0) {
            switch (e.detail) {
                case 1:
                    clickHintMessage = "Single Click.";
                    break;
                case 2:
                    clickHintMessage = "Double Click.";
                    break;
                default:
                    clickHintMessage = "Not clicked yet.";
            }
        } else if (e.nativeEvent.button === 2) {
            clickHintMessage = "Right Click.";
        }
        clickHint.innerHTML = clickHintMessage;
    }
    return (
        <div className="p-5">
            <Heading text="Actions" />
            <div
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 flex gap-5 align-center justify-start">
                <div className="flex flex-col gap-3 align-center justify-start text-center">
                    <Button title="Single / Double / Right Click" text="Click Me" onClick={handleClick} onContextMenu={handleClick} />
                    <p id="click-hint" className="text-pink-500 font-medium">Not clicked yet.</p>
                </div>
                <div className="flex flex-col gap-3 align-center justify-start text-center">
                    <Button title="Toggle" text="Toggle" onClick={toggleElement} />
                    <p id="toggle-hint" className="text-pink-500 font-medium">Toggle visibility using the button.</p>
                </div>
                <Button title="Alert" text="Alert" onClick={(showAlert)} />
                <Button title="Confirm" text="Confirm" onClick={showConfirmAlert} />
                <Button title="Open New Tab" text="Open New Tab" href="https://portfolio-gopalakrishnan.vercel.app" target="_blank" />
                <Button title="Open New Window" text="Open New Window" onClick={openWindow} />

            </div>
        </div >
    );
}