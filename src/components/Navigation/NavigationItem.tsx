import { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ title, icon, scroll }: { title: string, icon: ReactNode, scroll: string }) => {

    function ScrollTo() {
        const item = document.getElementById(scroll);
        window.scrollTo({
            top: item?.offsetTop || 0,
            behavior: "smooth"
        });
    }

    return (
        <Link className="p-3 flex flex-row gap-2 hover:bg-white hover:rounded-2xl hover:text-teal-700 hover:bg-opacity-90" onClick={ScrollTo} to={`/#${scroll}`}>
            {icon}
            <div className="hidden md:block">{title}</div>
        </Link>
    );
};

export default NavigationItem;