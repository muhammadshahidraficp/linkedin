import React from "react";
import AtomicFooterList from "../../Molecules/MoleculesFooterList";

type Props = {children:React.ReactNode};

const AuthTemplate:React.FC<Props> = ({children}) =>{
   return(
      <div className='absolute bottom-0 bg-white w-screen h-[900px]'>
        {children}
        <AtomicFooterList/>
      </div>);
}

export default AuthTemplate;