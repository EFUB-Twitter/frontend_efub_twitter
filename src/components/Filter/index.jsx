import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import {BORDER_RADIUS, colors, fonts} from "styles/styleOptions";
import {allHashTags} from "apis/allHashTags.api";
import { twitFilter } from 'apis/twitFilter.api';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';

const Filter=({userObj, getTwitsArr})=>{
    const [hashTags,setHashTags]=useState([]);
    const [selecthash, setSelectHash]=useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
     ]);
     const [selectuser, setSelectUser]=useState([
        true,
        false,
   ]);
   const [filter, setFilter]=useState({nickname:"", hashtags:[]})


    const getHashTags=async()=>{
        const hashTagObj=await allHashTags();
       console.log(hashTagObj.data)
        setHashTags(hashTagObj.data);
      }

    {/*const onUserClick=({target})=>{
      const {value, id}=target;
      //console.log(value); 
      const selectUserArr = [...Array(selectuser.length)].map((_, idx) =>
    {if (parseInt(value)===idx){
      return( true);}
    else{
      return( false);}});
    setSelectUser(selectUserArr);
    if (selectuser[0]===true){
      setFilter({...filter,nickname:""})
    }
    if (selectuser[1]===true){
      console.log("user",userObj.nickname);
      setFilter({...filter,nickname:userObj.nickname})
    }
    //getTwits();
    }*/}

    const onHashClick=({target})=>{
      const {value, id, name}=target;
      //console.log(value, id, name); 
      const selectHashArr = [...Array(hashTags.length)].map((_, idx) =>
      {if (parseInt(value)===idx){
        return( !selecthash[idx]);}
      else{
        return( selecthash[idx]);}});
      setSelectHash(selectHashArr)
      let postHash=[];
      selectHashArr.map((hash,idx)=>{ if (hash) return (postHash.push(hashTags[idx].keyword))});
  
      setFilter({...filter,hashtags:postHash})
      //getTwits();
    }

    const getTwits=async ()=>{
      console.log("getTwits",filter);
      const response=await twitFilter(filter.hashtags, filter.nickname);
      //console.log(response.data.length);
      if (response.data.length){
        console.log("filter 컴포넌트 내 response",response.data);
        getTwitsArr(response.data);
      }
      else {
        alert("오류 : 검색 결과 없음")
      }
    }

    useEffect(()=>{
      //첫 컴포넌트 로딩 때 전체 해시태그 가져오기
        getHashTags();
    },[])

    useEffect(()=>{
      //해시태그, 유저 필터링 클릭할 때마다 매번 요청하는 api
      console.log("useEffect",filter);
      getTwits();
    },[filter])

    return(    
    <StyledRoot>
      <TrendsTitle>
        <h2>검색 필터</h2> {/*주석 추가*/}
      </TrendsTitle>
      <HashtagsWrap>
        <p>해시태그</p>
        <Hashtagsbtn>
          {hashTags&&hashTags.map((hash,idx)=>{
            const {keyword,id}=hash; 
            return ( 
              <div>
                <input type="checkbox" checked={selecthash[idx]} value={idx} onClick={onHashClick}name={keyword} /> 
                <span>{keyword}</span>
              </div> )
          })}
        </Hashtagsbtn>
      </HashtagsWrap>
      {/*<UserWrap>
        <p>작성자</p>
        <UserBtn>
          <div>
            <input type="checkbox" checked={selectuser[0]} value="0"  onClick={onUserClick}  />
            <span>모든 트윗 보기</span>
          </div> 
          <div>
            <input type="checkbox" checked={selectuser[1]} value="1"  onClick={onUserClick} /><span>내가 작성한 트윗만 보기</span>
          </div>
        </UserBtn>
      </UserWrap>*/}
    </StyledRoot>
 );

}

export default Filter;



const StyledRoot=styled.div`
border:1px solid ${colors.grey[4]};
background-color: ${colors.white[1]};
border-radius:${BORDER_RADIUS};
padding : 1.3rem 2rem;
div {



    
    p {font-size:${fonts.size.regular};
    font-weight:${fonts.weight.regular};padding-bottom:0.8rem;}
}
`;
const TrendsTitle=styled.div`
padding-bottom:0.8rem ;
h2 {
    color:${colors.black[1]};
    font-size:${fonts.size.large};
    font-weight: ${fonts.weight.bold};
}`;

const HashtagsWrap=styled.div`
padding:0.8rem 0;

`;
const UserWrap=styled.div`
padding:0.8rem 0;
div {
    padding-bottom:0.8rem ;
}

p {font-size:${fonts.size.regular};
    font-weight:${fonts.weight.regular};
padding-bottom:0.8rem;}
input {
    width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.3rem ;
}
input:checked{
    color:${colors.blue[1]};
    background-color: ${colors.blue[1]};
}
span {
    font-size:${fonts.size.small};
    font-weight:${fonts.weight.light};
}


`;

const UserBtn=styled.div`
    display: flex;
    flex-direction: column;
`;
const Hashtagsbtn=styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr); 
row-gap:0.8rem;
column-gap:1.3rem;
input {
    width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.3rem ;
}
span {
    font-size:${fonts.size.small};
    font-weight:${fonts.weight.light};
}
`;