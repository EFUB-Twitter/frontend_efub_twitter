import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { BORDER_RADIUS, colors, fonts } from 'styles/styleOptions';
import { signup } from 'apis/signup.api';
const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '', fullName: '' });

  /* async/await 를 활용하는 수정된 방식
    const submitLogin = async () {
    try {
      const response = await axios.post('/api/v1/user/login', {
  form
      })
    } catch(err) {
      console.log("Error >>", err);
    }
  }*/

  const submitSignup = async () => {
    console.log('submitLogin 클릭', form);
    if (!form.email || !form.password || !form.fullName) {
      alert('회원 가입 정보를 올바르게 입력하시오');
    } else {
      const response = await signup(form);
      //console.log(response);
      if (response) {
        alert(`${response.data}`);
      }
    }
  };

  const handleInputChange = ({ target: { name, value } }) => {
    console.log('handleInputChange 발생');
    setForm({ ...form, [name]: value });
  };
  return (
    <StyledRoot>
      <Content>
        <p>
          <FontAwesomeIcon icon={faTwitter} size="2x" color={`${colors.blue[1]}`} />
        </p>
        <p>Sign In to Twitter</p>
      </Content>
      <Content>
        <form onSubmit={submitSignup}>
          <input
            type="text"
            value={form.fullName}
            name="fullName"
            placeholder="username"
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            value={form.email}
            name="email"
            placeholder="twitter@gmail.com"
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            value={form.password}
            name="password"
            placeholder="twitter1234"
            onChange={handleInputChange}
          ></input>
        </form>
      </Content>
      <Content>
        <span>
          <Btn
            border={colors.blue[1]}
            background={colors.blue[1]}
            color={colors.white[1]}
            onClick={submitSignup}
          >
            회원가입
          </Btn>
        </span>
        <span>
          <Link to="/">
            <Btn border={colors.blue[1]} background={colors.white[1]} color={colors.blue[1]}>
              로그인하러 가기
            </Btn>
          </Link>
        </span>
      </Content>
    </StyledRoot>
  );
};

export default Signup;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  p {
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
    padding: 10px 0;
  }
  form {
    width: 25%;
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 20px;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid ${colors.blue[1]};
    outline-style: none;
  }
  span {
    width: 25%;
    margin-bottom: 1.5rem;
    color: ${colors.blue[1]};
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${fonts.size.regular};
  font-weight: ${fonts.weight.bold};
`;
