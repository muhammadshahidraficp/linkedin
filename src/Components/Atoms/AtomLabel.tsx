interface AtomicLabelProps {
    id:string;
    label?:string;
    backgroundColor?:string;
    className?:string;
    hideLabel?:boolean;
    textColor?:string;
    labelColor?:string;
    htmlFor:string;
  }

  const AtomicLabel: React.FC<AtomicLabelProps> = ({
    id,
    label,
    backgroundColor,
    className,
    hideLabel,
    textColor,
    labelColor,
    htmlFor
  }): any => {
    return (
        <label className={className} htmlFor={htmlFor}>
        {label}
      </label>
    );}

export default AtomicLabel;