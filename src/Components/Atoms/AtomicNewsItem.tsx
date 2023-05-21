import FiberManualRecord from '@mui/icons-material/FiberManualRecord';

const AtomicNewsItem: React.FC<any> = ({ title, subtitle }) => {
    return (
        <div className="flex items-center pb-10 ml-10">
            <div className="text-base">
                <FiberManualRecord style={{ width: 10, height: 10, color: '#636363' }} />
            </div>
            <div className="">
                <h4 className="text-base my-0">{title}</h4>
                <p className='text-xs my-0'>{subtitle}</p>
            </div>
        </div>
    );
}

export default AtomicNewsItem;