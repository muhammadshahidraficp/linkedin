import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import useOutsideAlerter from "../../../hooks/outSideClick.hook";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Profile() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    const callback = () => setMenuOpen(false)
    useOutsideAlerter(wrapperRef, callback)

    return (<div ref={wrapperRef} onClick={() => setMenuOpen((s) => !s)} className="cursor-pointer" >
        <div className="flex flex-col items-center justify-center text-gray-500 p-2">
            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{width: 30, height: 30}} />
            <h3 className="relative">Me <ArrowDropDownIcon /></h3>
        </div>
        {isMenuOpen && (
            <div className="absolute mt-2 py-2 w-55 bg-white rounded-md shadow-lg z-10">
                {/* Menu items go here */}
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Muhammad Shahid Rafi C P</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Web3 Developer</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
            </div>
        )}
    </div>)
} 