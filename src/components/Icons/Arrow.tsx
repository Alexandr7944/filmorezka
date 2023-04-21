type ArrowProps = {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1"/>
    </svg>
  )
}

export default Arrow