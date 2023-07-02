export default function Dropdown(props) {
    return (
        <div>
            <p className="font-medium my-3 ">Input -  Dropdown</p>
            <select id={props.id} className="p-2 w-full rounded border border-gray-300 shadow-inner shadow-gray-100 bg-gray-50">
                <option value="india">India - Asia</option>
                <option value="russia">Russia - Eurasia</option>
                <option value="france">France - Europe</option>
                <option value="nigeria">Nigeria - Africa</option>
            </select>
        </div>
    );
}