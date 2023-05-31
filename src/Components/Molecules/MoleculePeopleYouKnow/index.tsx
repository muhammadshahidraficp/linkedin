import { Avatar } from "@mui/material";



const MoleculePeopleYouKnow: React.FC = () => {

    return (
        <div className="flex rounded-2xl bg-white mt-5 ml-10 p-4 flex-col ">
            <div className="flex justify-between">
                People you may know from Baabtra
                <span className="font-bold">See all</span>
            </div>
            <div className="grid grid-cols-4 gap-4 grid-rows-2">
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=1" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />

                    <h2>Muhammad</h2>
                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=2" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />

                    <h2>Shahid Rafi C P</h2>
                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=3" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />

                    <h2>Rafi C P</h2>

                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=4" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />
                    <h2>Muhammad Shahid Rafi C P</h2>
                </div>


                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=1" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />
                    <h2>Muhammad</h2>
                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=2" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />
                    <h2>Shahid Rafi C P</h2>

                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=3" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />
                    <h2>Rafi C P</h2>
                </div>
                <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
                    <img src="https://i.pravatar.cc/150?img=4" alt="sidebar banner" className="rounded-tl-2xl rounded-tr-2xl" />
                    <h2>Muhammad Shahid Rafi C P</h2>
                </div>
            </div>

        </div>
    );
};

export default MoleculePeopleYouKnow;
