import { taskLabels } from "@/data/taskData.js";
import { Checkbox } from "./ui/checkbox.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover.jsx";

export default function taskLabelsButton() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-sm font-medium text-gray-600 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-4">
                        <path fill="currentColor" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    Gắn nhãn
                </button>
            </PopoverTrigger>
            <PopoverContent className={"w-50 flex flex-col gap-3 px-3 py-2.5"}>
                {taskLabels.map(({ id, name, slug }) => (
                    <div className="flex items-center space-x-2 justify-between" key={id}>
                        <label htmlFor={slug} className="grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 flex justify-between px-1 -mx-1 py-0.5 rounded-xs cursor-pointer hover:bg-gray-200">
                            <div className="flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-4">
                                    <path fill="currentColor" d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                                {name}
                            </div>
                            <Checkbox id={slug} className={"data-[state=checked]:bg-gray-600 data-[state=checked]:text-white data-[state=checked]:border-gray-600 border-gray-400"} />
                        </label>
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    );
}
