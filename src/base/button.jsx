export default function Button(props) {
    return (
        <div className="flex flex-col align-start justify-start">
            <p className="font-medium my-3 ">{props.title}</p>
            <button onClick={props.onClick} onContextMenu={props.onContextMenu} className="uppercase text-center text-sm bg-indigo-600 rounded text-white font-medium py-2">
                <a href={props.href} target={props.target} rel="noopener noreferrer"
                    className="text-sm block">
                    {props.text}
                </a>
            </button>
        </div>
    );
}