import Actions from "../components/actions";
import Inputs from "../components/inputs";
import Miscellaneous from "../components/miscellaneous";

export default function Home(props) {
    return (
        <div>
            <Inputs />
            <Actions />
            <Miscellaneous />
        </div>
    );
}