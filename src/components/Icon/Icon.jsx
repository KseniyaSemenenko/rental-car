export const Icon = ({ id, width = 16, height = 16, className = '' }) => (
  <svg width={width} height={height} className={className}>
    <use xlinkHref={`#${id}`} />
  </svg>
);
