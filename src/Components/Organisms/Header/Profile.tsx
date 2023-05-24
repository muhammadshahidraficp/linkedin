import { Avatar } from "@mui/material";
import { useState } from "react";

export default function Profile() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (<div>
        <div className="flex flex-col items-center justify-center cursor-pointer text-gray-500 p-2">
            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{width: 30, height: 30}} />
            <h3 onClick={() => setMenuOpen(!isMenuOpen)} className="relative">Me</h3>
        </div>
        {isMenuOpen && (
            <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                {/* Menu items go here */}
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
            </div>
        )}
    </div>)
} 