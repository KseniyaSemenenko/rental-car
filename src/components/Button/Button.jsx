import css from './Button.module.css';

export default function Button({ text, variant = 'view' }) {
  return <button className={`${css.btn} ${css[variant]}`}>{text}</button>;
}
