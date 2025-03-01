import css from './Button.module.css';

export default function Button({ text, variant = 'view', type = 'button' }) {
  return (
    <button type={type} className={`${css.btn} ${css[variant]}`}>
      {text}
    </button>
  );
}
