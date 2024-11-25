import { SelectItem, Select as SelectNUI } from '@nextui-org/select'
import React from 'react'

type Props = {
    label: string;
    onChange: Function;
    items: { value: string; content: string }[];
    value: string | number
}

const Select = (props: Props) => {
    const { items, label, onChange, value }  = props;

    return (
        <SelectNUI
            label={label}
            onChange={(e) => onChange(e)}
            selectedKeys={[value]}
            className="!bg-slate-600 rounded-xl"
            classNames={{
                label: "group-data-[filled=true]:-translate-y-5 group-data-[filled=true]:text-slate-400 text-white",
                trigger: "min-h-16 bg-background hover data-[hover=true]:bg-background",
                listboxWrapper: "max-h-[400px] ",
                mainWrapper: " ",
                base: "",
                value: "text-white group-data-[has-value=true]:text-white",

            }}
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "bg-background",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-background",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                },
            }}
            popoverProps={{
                classNames: {
                    base: "before:bg-default-200",
                    content: "p-0 border-small border-divider bg-background",
                },
            }}
        >
            {
                items.map((i) => (
                    <SelectItem key={i.value} value={i.value}>
                        {i.content}
                    </SelectItem>
                ))
            }
        </SelectNUI>
    )
}

export default Select