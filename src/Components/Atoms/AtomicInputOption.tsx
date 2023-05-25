import React, { ReactElement } from "react";

import styles from "./InputOptions.module.css";

interface InputOptionsProps {
  IconComponent: any;
  title: string;
  color: string;
}

const AtomicInputOptions: React.FC<InputOptionsProps> = ({
  IconComponent,
  title,
  color,
}): ReactElement => {
  return (
    <div className="flex items-center gap-2">
      <IconComponent style={{ color }} />
      <span className="text-sm font-bold text-gray-600">
        {title}
      </span>
    </div>
  );
};

export default AtomicInputOptions;
