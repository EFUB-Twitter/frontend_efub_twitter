import React, { useState, useEffect } from 'react';
import { getProfile } from 'apis/profile.api';
import styled from 'styled-components';
import Twit from 'components/Twit';
import { Yongji, Background } from 'asset/img/img';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from 'styles/styleOptions';
import { Link } from 'react-router-dom';


const Profiles = ({userObj}) => {

    const [user, setUser]=useState({});
 
  
    const getUserProfile=async ()=>{
        const response=await getProfile(userObj.nickname);
        if (response) {
            console.log("getUserProfile", response);
            setUser(response.data);
        }
        else {
            alert('오류 발생 : 유저 프로필 불러오기 실패');
        }

    };







    useEffect(()=>{
        console.log("프로필 페이지 유저 userObj", userObj.nickname);
        getUserProfile();
        //console.log("유저가 작성한 트윗 가져오기",userObj.nickname);
        
    },[]);




  return (
    <Profile>
      <ProfileBackground>
        {/* <img src={Background} alt="배경 사진" />*/}
      </ProfileBackground>
      <ProfilePhoto>
     <img src={Yongji} alt="임시 프로필 사진" />
      </ProfilePhoto>
      <ProfileInfo>
        <ProfileUser>
          <ProfileEdit>
          <Link to="/profile/modify">

          <FollowerBtn >프로필 수정</FollowerBtn>

          </Link>
           
          </ProfileEdit>
        </ProfileUser>
        {user && <>
            <h2>{user.nickname}</h2>
        <span>@{userObj.email.split("@")[0]}</span>
        <ProfileDate>
          <span>{user.bio}</span>
        </ProfileDate>
        <span>
         <FontAwesomeIcon icon={faCalendarDays} color={colors.grey[2]} />
          가입일 : 2022년 3월
        </span>
        <ProfileFollow>
          <p>0 Following</p>
          <p>1 Followers</p>
        </ProfileFollow>
        
        </>}
    

      </ProfileInfo>
    </Profile>
  );
};

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileBackground = styled.div`
  height: 15rem;
`;

const ProfilePhoto = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  transform: translate(2rem, 6rem);
  background: var(--twittie-background);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid white;
  }
`;

const ProfileInfo = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  h2 {
    display: flex;
    font-weight: 700;
  }
  span {
    display: flex;
    font-size: 1.3rem;
  }
  p {
    display: flex;
    font-size: 1rem;
    margin: 0.8rem 0;
  }
`;

const ProfileUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 3.9rem;
  div {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
  }
`;

const ProfileEdit = styled.div`
  margin-left: auto;
  padding: 0.7rem 0.8rem 0.3rem;
`;

const FollowerBtn = styled.div`
  background-color: #000;
  cursor: pointer;
  margin-right: 20px;
  color: #fff;
  width: 120px;
  height: 33px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const ProfileDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.1rem;
`;

const ProfileFollow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  align-items: center;
  p {
    font-weight: normal;
    margin-left: 0.5rem;
  }
`;

export default Profiles;