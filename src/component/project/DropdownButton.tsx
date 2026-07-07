
import { ChevronDown, Code2Icon, LucideIcon } from "lucide-react";

interface DropdownButtonProps<T extends { id?: string }> {
    isOpen: boolean;
    toggleOpen: () => void;
    data: T[];
    selected: string[];
    filter: (id: string) => void;
    icon: LucideIcon;
    label: string;
}

export default function DropdownButton<T extends { id?: string }>({
    isOpen,
    toggleOpen,
    data,
    selected,
    filter,
    icon: Icon,
    label,
}: DropdownButtonProps<T>) {
    return (<>
        <div className={`flex-1 h-fit relative w-full border-b-[1px] border-teal-500   ${isOpen ? '' : ''} `}>
            <button
                className={`py-1 w-full  ${isOpen ? "opacity-100" : "opacity-70"} text-white flex justify-between items-center hover:opacity-100 global-transition cursor-pointer`}
                onClick={toggleOpen}
                type="button"
            >
                <div className="text-sm flex gap-1 items-center">
                    <div
                        className={`${isOpen ? "rotate-3 scale-125 text-teal-500" : ""} p-2 rounded-2xl global-transition-slower`}
                    >
                        <Icon />
                    </div>
                    <div
                        className={`${isOpen
                            ? "text-shadow-[0_0px_4px_rgb(255_255_255)]"
                            : ""} hidden sm:block`}
                    >
                        {label}
                    </div>
                </div>
                <div
                    className={`p-2 ${isOpen ? "rotate-180 text-teal-500" : ""} global-transition`}
                >
                    <ChevronDown />
                </div>
            </button>
            <div
                className={`${isOpen ? "h-[10rem]" : "h-0"} w-full flex overflow-hidden global-transition-slower absolute lg:static bg-black/80 lg:bg-transparent px-2 rounded-t-none rounded-2xl `}
            >
                <div className="flex flex-wrap w-full gap-x-2 gap-y-2  h-full overflow-y-auto py-2 global-transition">
                    {data.map((item) => (
                        <button
                            className={`h-fit select-none text-xs px-3 py-2 rounded-full border border-transparent hover:border-teal-500 cursor-pointer global-transition ${selected.includes(item.id as string)
                                ? "bg-gradient-to-tr from-teal-500 to-sky-500"
                                : "bg-white/5"}`}
                            key={item.id}
                            onClick={() => item.id && filter(item.id)}
                            type="button"
                        >
                            {item.id}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </>)
}
