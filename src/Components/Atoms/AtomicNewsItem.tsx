import FiberManualRecord from '@mui/icons-material/FiberManualRecord';

const AtomicNewsItem: React.FC<any> = ({ title, subtitle }) => {
    return (
        <div className="flex items-center pb-2 ml-10">
            <div className="text-base">
                <FiberManualRecord style={{ width: 5, height: 5, color: '#636363' }} />
            </div>
            <div className="">
                <h4 className="text-base my-0 font-bold">{title}</h4>
                <p className='text-xs my-0'>{subtitle}</p>
            </div>
        </div>
    );
}

export default AtomicNewsItem;