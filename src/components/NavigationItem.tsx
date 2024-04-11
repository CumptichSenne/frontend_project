import { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ title, icon, scroll }: { title: string, icon: ReactNode, scroll: string }) => {

    function ScrollTo() {
        const item = document.getElementById(scroll);
        item?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Link className="p-3 flex flex-row gap-2 hover:bg-white hover:rounded-2xl hover:text-teal-700 hover:bg-opacity-90" onClick={ScrollTo} to="/">
            {icon}
            {title}
        </Link>
    );
};

export default NavigationItem;