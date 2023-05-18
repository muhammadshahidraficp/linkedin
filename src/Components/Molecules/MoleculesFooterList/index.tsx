import styles from "../../Pages/Login/Login.module.css";
import FooterLogo from "../../../Assets/linkedin_footer_logo.svg"; 
import AtomicDropdown from '../../Atoms/AtomicDropdown';
import AtomicFooterListItem from "../../Atoms/AtomicFooterListItem";


const AtomicFooterList: React.FC = () => {

    const languageOptions = ['Language', 'English', 'Hindi', 'Arabic', 'Malayalam'];

    const listOptions = [ 'About', 'Accessibility', 'User Agreement', 'Privacy Policy','Cookie Policy','Copyright Policy','Brand Policy','Guest Controls','Community Guidelines'];

    const handleOptionSelect = (selectedOption: string) => {
        console.log('Selected option:', selectedOption);
      };
    


    return (
      <ul className={`flex h-12 justify-center items-center `}>
        <li key="login__li__footer_list_logo" className={styles.login__li__footer_list_logo}>
          <img src={FooterLogo} alt="footer logo" />
        </li>
        <li key="login__li__footer_list_year" className={styles.login__li__footer_list_year}>@2023</li>
        {
          listOptions.map((option,index) => (<AtomicFooterListItem keyString={index.toString()} text={option}/>))
        }
        <li key="login__li__footer_list_text" className={styles.login__li__footer_list_text}>
        <AtomicDropdown options={languageOptions} onSelect={handleOptionSelect}/>
        </li>
      </ul>
    );
  };
  
  export default AtomicFooterList;
  