export default function IFrame(props) {
    return (
        <div>
            <p className="text-center text-gray-600 uppercase text-xl font-medium my-3">{props.title}</p>
            <iframe src={props.url} title={props.description}
                className="w-full h-96"></iframe>
        </div>
    );
}