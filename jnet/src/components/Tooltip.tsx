import "./Tooltip.css";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  style: React.CSSProperties;
  p_arrow_tooltip: string;
}

export default function Tooltip({ children, label, style, p_arrow_tooltip }: TooltipProps) {

  return (

    <div className="tooltip-content relative font-normal">
      {children}
      <div className={`tooltip absolute !p-1.5 ${p_arrow_tooltip}`} style={style}>{label}</div>
    </div>
    
  )

}