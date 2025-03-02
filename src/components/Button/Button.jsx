import css from './Button.module.css';

export default function Button({
  text,
  variant = 'view',
  type = 'button',
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${css.btn} ${css[variant]}`}
    >
      {text}
    </button>
  );
}
