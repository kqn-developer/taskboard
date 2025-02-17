import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Navbar() {
    return (
        <nav className="bg-white text-gray-800">
            <div className="lg:px-8 sm:px-6 px-2 border-b border-gray-300">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-start">
                        <div className="flex items-center shrink-0">
                            <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company" />
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                        {/* Notification button */}
                        <button type="button" className="relative rounded-full bg-white p-1 text-gray-800 hover:text-gray-500 cursor-pointer focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                            </svg>
                        </button>

                        {/* User menu button */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <button type="button" className="relative flex rounded-full bg-white cursor-pointer text-sm focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-white focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Mở menu người dùng</span>
                                    <Avatar>
                                        <AvatarImage src="/src/assets/img/avatar_sample.jpg" alt="Ảnh đại diện" />
                                        <AvatarFallback>Cat selfie</AvatarFallback>
                                    </Avatar>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="px-3 py-2 mr-3 w-48">
                                <div className="space-y-1">
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 w-full rounded-sm px-3 py-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        Hồ sơ cá nhân
                                    </button>
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 w-full rounded-sm px-3 py-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                        </svg>
                                        Đăng xuất
                                    </button>
                                </div>
                            </PopoverContent>
                        </Popover>

                        {/* <button type="button" className="relative flex rounded-full bg-white cursor-pointer text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Mở menu người dùng</span>
                            <Avatar>
                                <AvatarImage src="/src/assets/img/avatar_sample.jpg" alt="Ảnh đại diện" />
                                <AvatarFallback>Cat selfie</AvatarFallback>
                            </Avatar>
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
