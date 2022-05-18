import React from 'react';
import {
  faComment,
  faRetweet,
  faHeart,
  faEllipsis,
  faHashtag,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import {colors, fonts} from "styles/styleOptions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileImg } from 'asset/img/img';
import {StyledRoot,TwitWrap,TwitInfo,Text,TwitIcon,TwitContent,TwitHash,TwitDetail} from "./Style";
import { twitDelete } from 'apis/twitDelete.api';


const Twit = ({data, type}) => {
  //console.log("Twit",data)

 

  const ondeleteTwit=async()=>{
    const response=await twitDelete(data.id, data.userResDto.profile.nickname);
    console.log("ondeleteTwit",response);
    alert(`${response.data.message}`);
    window.location="/";

  }

  const displayedAt=() =>{
    const createAt=new Date(data.boardCreateOn)
    const milliSeconds = new Date() - createAt
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
  }

  const showYYYYMMDD=()=>{
    //console.log (data.boardCreateOn);
    const date=new Date(data.boardCreateOn);
    console.log("showDate");
    console.log(date.getFullYear(),date.getMonth()+1,date.getDate(), date.getDay())
    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`
  }

  const showHHMM=()=>{
    console.log("시간 표현")
    const date=new Date(data.boardCreateOn);
    return `${date.getHours<12?"오전":"오후"} ${date.getHours()}:${date.getMinutes()}`
   
  }
  return (
    <StyledRoot>
      <img src={ProfileImg} alt="임시 프로필 사진"></img>
      <TwitWrap>
       
        <TwitInfo>
          <div>
            <Text weight={fonts.weight.bold} color={colors.black[2]}>
              {data.userResDto.profile.nickname}
            </Text>
            <Text weight={fonts.weight.regular} color={colors.grey[1]}>
              @{data.userResDto.email.split("@")[0]}
            </Text>
            <Text weight={fonts.weight.regular} color={colors.grey[1]}>
              
         
              {displayedAt()}
            </Text>
          </div>
          <div>
            {type?null:        <Link to={`/boards/${data.id}?nickname=${data.userResDto.profile.nickname}`}> 
          <FontAwesomeIcon icon={faEllipsis} color={colors.grey[1]} size="sm" />
          </Link>}
  
          </div>
        </TwitInfo>

        <TwitContent >{data.description}</TwitContent>
        
       
        <TwitHash>
        {data.hashTags.map((hash,idx)=> {
            
       
            return <div 
             key={idx}>
              <FontAwesomeIcon icon={faHashtag} color={colors.blue[1]} 
               size="sm" />{hash.keyword}</div>})}
        </TwitHash>
        {type?<TwitDetail color={colors.grey[3]}>     <Text weight={fonts.weight.regular} color={colors.grey[2]}>
              
             {showHHMM()}
              
            </Text><Text weight={fonts.weight.regular} color={colors.grey[2]}>
              
            {showYYYYMMDD()} 
              
            </Text></TwitDetail>:null}
        <TwitIcon>
          <FontAwesomeIcon
            icon={faComment}
            weight={fonts.weight.bold}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon
            icon={faRetweet}
            weight={fonts.weight.regular}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon
            icon={faHeart}
            weight={fonts.weight.regular}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon onClick={ondeleteTwit} icon={faTrash} color={colors.grey[1]} size="sm" />
        </TwitIcon>
      </TwitWrap>
    </StyledRoot>
  );
};
export default Twit;