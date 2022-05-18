import React, { useState } from 'react';
import {StyledRoot,Icon} from "./Style";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { colors } from 'styles/styleOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInput = () => {
  const [input, setInput] = useState('');

  const onChange = (event) => {
    console.log('onChange');
    const {
      target: { value },
    } = event;
    setInput(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit', input);
    setInput('');
  };
  return (
    <StyledRoot>
      <form onSubmit={onSubmit}>
        <Icon>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={colors.grey[2]}
            onClick={onSubmit}
            size="lg"
          />
        </Icon>

        <input value={input} onChange={onChange} type="text" placeholder="트위터 검색"></input>
      </form>
    </StyledRoot>
  );
};

export default SearchInput;