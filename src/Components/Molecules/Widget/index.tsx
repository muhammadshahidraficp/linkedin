import Info from '@mui/icons-material/Info';
import AtomicNewsItem from "../../Atoms/AtomicNewsItem";

const ProfileSideBar: React.FC = () => {

    const news = [
        { "title": "Fintech could hit $4.5bn", "subtitle": "Top news" },
        { "title": "Political Scandal Unveiled", "subtitle": "2d ago • 768 readers" },
        { "title": "Stock Market Soars High", "subtitle": "2d ago • 340 readers" }
    ];

    return (
        <div>
            <div className='bg-white flex-1 py-2 mt-5 ml-10 rounded-md mr-10'>
                <div className="flex items-center justify-between pl-2 pr-10 mt-2 mb-2">
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