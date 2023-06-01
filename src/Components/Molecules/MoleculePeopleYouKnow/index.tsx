import { Avatar } from "@mui/material";

interface userInfo {
    name:string;
    avatar:string;
    coverImage:string;
    subtitle:string;
} 

const MoleculePeopleYouKnow: React.FC = () => {

    const users:userInfo[]= [
        {name:'Muhammad',avatar:'1',coverImage:'https://loremflickr.com/g/320/240/paris,girl/all', subtitle:'CEO'},
        {name:'Shahid',avatar:'2',coverImage:'https://loremflickr.com/g/320/240/paris,girl/all',subtitle:'CTO'},
        {name:'Rafi',avatar:'3',coverImage:'https://loremflickr.com/g/320/240/paris,girl/all',subtitle:'Chairman'},
        {name:'Ravi',avatar:'4',coverImage:'https://loremflickr.com/320/240?random=1',subtitle:'Php Developer'},
        {name:'Rizwan',avatar:'5',coverImage:'https://loremflickr.com/320/240?random=1',subtitle:'ML Engineer'},
        {name:'Saif',avatar:'6',coverImage:'https://loremflickr.com/320/240?random=1',subtitle:'Salesman'},
        {name:'Zeeshan',avatar:'7',coverImage:'https://loremflickr.com/320/240?random=1',subtitle:'Chairman'},
        {name:'Ajmal',avatar:'8',coverImage:'https://loremflickr.com/320/240?random=1',subtitle:'Software Engineer'}
    ];


    return (
        <div className="flex rounded-2xl bg-white mt-5 ml-10 p-4 flex-col ">
            <div className="flex justify-between">
                People you may know from Baabtra
                <span className="font-bold">See all</span>
            </div>
            <div className="grid grid-cols-4 gap-4 grid-rows-2 mt-4">
            {users.map((option, index) => (
                <div className="flex flex-col rounded-2xl items-center bg-white border border-gray-300 hover:shadow-xl pb-3">
                    <div className="relative h-24 mb-16">
                        <div className="h-24 overflow-hidden">
                    <img src="https://loremflickr.com/320/240" className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"/>
                    </div>
                    <Avatar src={`https://i.pravatar.cc/150?img=${option.avatar}`} alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl  absolute w-full mx-auto -top-20" sx={{
                        // "& img": {
                            width: 125,
                            height: 125
                        // }
                    }} />
                    </div>
                    <h2 className="font-bold">{option.name}</h2>
                    <span className="text-sm text-gray-600">{option.subtitle}</span>
                    <div className="inline-block border border-blue-500 text-blue-500 py-2 px-4 rounded-full font-bold cursor-pointer transition-colors duration-300 hover:bg-blue-200 hover:border-4 hover:border-blue-500 ">Connect</div>
                </div>
            ))}
            </div>

        </div>
    );
};

export default MoleculePeopleYouKnow;
