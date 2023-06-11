export default function Heading(props) {
    return (
        <h3 className="my-5 text-center text-xl text-violet-700 uppercase font-medium">
            <span className="border-b-2 border-dotted border-violet-600">
                {props.text}
            </span>
        </h3>
    );
}