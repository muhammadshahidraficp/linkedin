import styles from "../Components/Login/Login.module.css"
import FooterLogo from "../Assets/linkedin_footer_logo.svg"; 
import AtomicDropdown from '../Atoms/AtomicDropdown';


const AtomicFooterList: React.FC = () => {

    const options = ['Language', 'English', 'Hindi', 'Arabic', 'Malayalam'];

    const handleOptionSelect = (selectedOption: string) => {
        console.log('Selected option:', selectedOption);
      };
    


    return (
      <ul className={`flex h-12 justify-center items-center `}>
        <li className={styles.login__li__footer_list_logo}>
          <img src={FooterLogo} alt="footer logo" />
        </li>
        {/* {options.map((option) => ())} */}
        <li className={styles.login__li__footer_list_year}>@2023</li>
        <li className={styles.login__li__footer_list_text}>About</li>
        <li className={styles.login__li__footer_list_text}>Accessibility</li>
        <li className={styles.login__li__footer_list_text}>User Agreement</li>
        <li className={styles.login__li__footer_list_text}>Privacy Policy</li>
        <li className={styles.login__li__footer_list_text}>Cookie Policy</li>
        <li className={styles.login__li__footer_list_text}>Copyright Policy</li>
        <li className={styles.login__li__footer_list_text}>Brand Policy</li>
        <li className={styles.login__li__footer_list_text}>Guest Controls</li>
        <li className={styles.login__li__footer_list_text}>Community Guidelines</li>
        <li className={styles.login__li__footer_list_text}>
        <AtomicDropdown options={options} onSelect={handleOptionSelect}/>
        </li>
      </ul>
    );
  };
  
  export default AtomicFooterList;
  