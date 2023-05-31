import styles from "./AtomicSideBarStat.module.css";

interface AtomicRecentItemProps {
    name: string;
}


const AtomicRecentItem: React.FC<AtomicRecentItemProps> = ({
    name
}): any => {
    return (
        <div className={styles.sidebar__recent_items}>
            <span className={styles.item}>#{name}</span>
        </div>
    );
}

export default AtomicRecentItem;