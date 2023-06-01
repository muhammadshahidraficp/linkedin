import { Avatar, Divider } from "@mui/material";
import { useRef, useState } from "react";
import useOutsideAlerter from "../../../hooks/outSideClick.hook";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { buttonStyle } from "../../../Utility/constants";
import { getAuth } from "firebase/auth";

interface Options {
    title:string
}


export default function Profile() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    const callback = () => setMenuOpen(false)
    useOutsideAlerter(wrapperRef, callback)

    const accountOption:Options[] = [
        {title:'Premium features'},
        {title:'Settings & Privacy'},
        {title:'Help'},
        {title:'Language'}
    ];

    const manageOption:Options[] = [
        {title:'Post and activity'},
        {title:'Company: TryAgain'},
        {title:'Job posting account'}
    ];

    return (<div ref={wrapperRef} onClick={() => setMenuOpen((s) => !s)} className="cursor-pointer" >
        <div className="flex flex-col items-center justify-center text-gray-500 p-2">
            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{width: 30, height: 30}} />
            <h3 className="relative">Me <ArrowDropDownIcon /></h3>
        </div>
        {isMenuOpen && (
            <div className="absolute mt-2 py-2 w-55 bg-white rounded-md shadow-lg z-10">
                <div className="px-4">
                <div className="flex gap-2 my-2">
                    <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{width: 50, height: 50}} />
                    <div className="">
                        <span className="font-bold block hover:bg-gray-200">Muhammad Shahid Rafi C P</span>
                        <div className="text-sm hover:bg-gray-200">React Developer</div>
                    </div>
                </div>
                <div className={`${buttonStyle} py-0`}>View Profile</div>
                </div>
               <Divider sx={{mt: 2}}/>
               <div className="px-4">
                <span className="text-base font-bold">Account</span>
                {
                    accountOption.map((option,index)=>{
                       return <a href="/" className="block py-1 text-gray-400 hover:bg-gray-200">{option.title}</a>
                    })
                }
                </div>
                <Divider sx={{mt: 2}}/>
                <div className="px-4 py-1">
                <span className="text-base font-bold">Manage</span>
                {
                    manageOption.map((option,index)=>{
                       return <a href="/" className="block py-1 text-gray-400 hover:bg-gray-200">{option.title}</a>
                    })
                }
                </div>
                <Divider sx={{mt: 2}}/>
                <div className="px-4 py-1">
                     <a onClick={()=>{getAuth().signOut()}} className="block py-1 text-gray-400 hover:bg-gray-200">Signout</a>
                </div>
            </div>
        )}
    </div>)
} 