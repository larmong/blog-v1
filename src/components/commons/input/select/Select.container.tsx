import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { IPropsSelect } from './Select.types';
import { SelectBox, SelectList, Wrapper } from './Select.style';

export default function Select(props: IPropsSelect) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelectChangeType = (type: string | JSX.Element) => () => {
    props.setSelectType(type);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <SelectBox onClick={handleSelectOpen}>
        {props.selectType}
        <MdOutlineKeyboardArrowDown />
      </SelectBox>
      <SelectList isOpen={isOpen} listLength={props.selectList.length}>
        {props.selectList.map((type: string, index: number) => (
          <span
            key={index}
            className={type === props.selectType ? 'active' : ''}
            onClick={handleSelectChangeType(type)}
          >
            {type}
            <em></em>
          </span>
        ))}
      </SelectList>
    </Wrapper>
  );
}
