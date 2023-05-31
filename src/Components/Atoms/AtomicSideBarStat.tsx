import styles from "./AtomicSideBarStat.module.css";

interface AtomicSideBarStatProps {
    text: string;
    value?: string;
}


const AtomicSideBarStat: React.FC<AtomicSideBarStatProps> = ({
    text, value
}): any => {
    return (
        <div className={styles.SidebarStat}>
            <p >{text}</p>
            <p className={styles.SidebarStat__data}>{value}</p>
        </div>
    );
}

export default AtomicSideBarStat;