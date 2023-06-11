export default function Heading(props) {
    return (
        <h3 className="my-5 text-center text-md text-white uppercase font-medium">
            <span className="border-2 border-pink-400 rounded-full py-2 px-8 bg-pink-600">
                {props.text}
            </span>
        </h3>
    );
}