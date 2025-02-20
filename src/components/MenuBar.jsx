import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";

export default function MenuBar() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex shrink-0 cursor-pointer items-center rounded-full hover:outline-2 hover:outline-offset-2 hover:outline-gray-400">
                <Avatar className={"size-10"}>
                    <AvatarImage className={"size-10"} src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="user's avatar" />
                    <AvatarFallback>UK</AvatarFallback>
                </Avatar>
            </div>
            <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        </div>
    );
}
