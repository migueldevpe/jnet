import "./Tooltip.css";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  show: React.CSSProperties;
}

export default function Tooltip({ children, label, show }: TooltipProps) {

  return (
    <div className="tooltip-content relative font-normal">
      {children}
      <div className="tooltip absolute !p-1.5" style={show}>{label}</div>
    </div>
  )

}