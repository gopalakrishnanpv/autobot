import Heading from "../base/heading";
import IFrame from "../base/iframe";
import Table from "../base/table";


export default function Miscellaneous(props) {
    return (
        <div className="p-5">
            <Heading text="Miscellaneous" />
            <div
                className="flex flex-col align-center justify-center gap-5">
                <Table title="Table" />
                <IFrame title="IFrame" url="https://portfolio-gopalakrishnan.vercel.app"
                    description="Portfolio website by gopalakrishnan." />
            </div>
        </div>
    );
}