import { useState } from 'react';
import css from './FieldSelect.module.css';

import { Icon } from '../Icon/Icon';

export default function FieldSelect({ field, form, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = value => {
    form.setFieldValue(field.name, value);
    setIsOpen(false);
  };

  return (
    <div className={css.containerField}>
      <input
        {...field}
        type="text"
        className={css.selectInput}
        placeholder={placeholder}
        value={field.value}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      />
      <Icon
        id={isOpen ? 'icon-up' : 'icon-down'}
        className={css.arrow}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className={css.selectList}>
          {options.map((option, index) => (
            <li key={index} onMouseDown={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
