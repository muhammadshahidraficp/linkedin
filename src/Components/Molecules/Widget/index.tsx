import Info from '@mui/icons-material/Info';
import AtomicNewsItem from "../../Atoms/AtomicNewsItem";

const ProfileSideBar: React.FC = () => {
    const news = [{ "title": "title 1", "subtitle": "This is a sub title" },
    { "title": "title 1", "subtitle": "This is a sub title" },
    { "title": "title 1", "subtitle": "This is a sub title" }];

    return (
        <div className="bg-white flex-1  mt-10 ml-10 rounded-10 mr-10">
            <div className="flex items-center justify-between pl-10 pr-10">
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
    );
}

export default ProfileSideBar;