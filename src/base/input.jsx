export default function Input(props) {
    return (
        <div>
            <p className="font-medium my-3">{props.title}</p>
            <input type={props.type} className="p-2 w-full rounded border border-gray-300 shadow-inner shadow-gray-100 bg-gray-50" id={props.id}
                onKeyUp={props.onKeyUp} placeholder={props.placeholder} />
        </div>
    );
}