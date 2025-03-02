export const Icon = ({
  id,
  width = 16,
  height = 16,
  className = '',
  onClick,
}) => (
  <svg width={width} height={height} className={className} onClick={onClick}>
    <use xlinkHref={`#${id}`} />
  </svg>
);
