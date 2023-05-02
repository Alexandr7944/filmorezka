export type ArrowProps = {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

const Arrow: React.FC<ArrowProps> = ({ 
  className, fill = 'none', width="10", height="6" 
}) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 10 6" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1"/>
    </svg>
  )
}

export default Arrow