export default function Button(props) {
    return (
        <div className="flex flex-col align-start justify-start">
            <p className="font-medium my-3">{props.title}</p>
            <button onClick={props.onClick} onContextMenu={props.onContextMenu}
                className="uppercase text-center text-sm bg-violet-500 rounded text-white font-medium py-2">
                {props.text}
            </button>
        </div>
    );
}