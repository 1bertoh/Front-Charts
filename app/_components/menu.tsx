import React, { useEffect, useState } from "react";
import Select from "./select";

type TMenu = {
    onChange: Function;
    value: string | number
}

const Menu = (props: TMenu) => {
    const { onChange, value } = props
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0); 
    const selectItems = [
        { value: "all", content: "Todos" },
        { value: "2011", content: "2011" },
        { value: "2012", content: "2012" },
        { value: "2014", content: "2014" },
        { value: "2015", content: "2015" },
    ]

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-32"
                } bg-background text-white px-6  rounded-full shadow-sm  z-20 w-80 border-slate-600 border-[1px]`}
        >
            <Select items={selectItems} label="Ano" onChange={(value: any) => onChange({year: value.target.value})} value={value} />
        </div>
    );
};

export default Menu;
