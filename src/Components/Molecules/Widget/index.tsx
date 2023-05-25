import Info from '@mui/icons-material/Info';
import AtomicNewsItem from "../../Atoms/AtomicNewsItem";

const ProfileSideBar: React.FC = () => {

    const news = [
        { "title": "title 1", "subtitle": "This is a sub title" },
        { "title": "title 1", "subtitle": "This is a sub title" },
        { "title": "title 1", "subtitle": "This is a sub title" }
    ];

    return (
        <div>
            <div className='bg-white flex-1 py-2 mt-10 ml-10 rounded-md mr-10'>
            <div className="flex items-center justify-between pl-10 pr-10 mt-2 mb-2">
                <h3>Linkedin news</h3>
                <Info />
            </div>
            {
                news.map((item, index) =>
                    <AtomicNewsItem title={item.title}
                        subtitle={item.subtitle} />
                )
            }
            </div>
        </div>
    );
}

export default ProfileSideBar;