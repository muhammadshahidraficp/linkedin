import React, { ReactElement } from "react";

import styles from "./InputOptions.module.css";

interface InputOptionsProps {
  IconComponent: any;
  title: string;
  color: string;
  onClick?: () => void;
}

const AtomicInputOptions: React.FC<InputOptionsProps> = ({
  IconComponent,
  title,
  color,
  onClick= ()=> {}
}): ReactElement => {
  return (
    <div className="flex items-center gap-2" onClick={onClick}>
      <IconComponent style={{ color }} />
      <span className="text-sm font-bold text-gray-600">
        {title}
      </span>
    </div>
  );
};

export default AtomicInputOptions;
