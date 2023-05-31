import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import styles from "./AtomicSideBarStat.module.css"

const AtomicNewsItem: React.FC<any> = ({ title, subtitle }) => {
    return (
        <div className=" pb-2 ml-2">
            <div className="flex items-center">
                <FiberManualRecord style={{ width: 10, height: 10, color: '#636363' }} />
                <h4 className={`${styles.truncate} text-sm my-0 font-bold ml-2`}>{title}</h4>
            </div>
            <p className="text-xs my-0 ml-2">{subtitle}</p>
        </div>
    );
}



export default AtomicNewsItem;