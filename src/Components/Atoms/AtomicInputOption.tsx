import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

import styles from "./InputOptions.module.css";

interface InputOptionsProps {
  IconComponent: any;
  title: string;
  color: string;
  TypographyProps?: TypographyProps;
}

const AtomicInputOptions: React.FC<InputOptionsProps> = ({
  IconComponent,
  title,
  color,
  TypographyProps
}): ReactElement => {
  return (
    <div className={styles.input_options}>
      <IconComponent style={{ color }} />
      <Typography variant="h4" {...TypographyProps}>
        {title}
      </Typography>
    </div>
  );
};

export default AtomicInputOptions;
