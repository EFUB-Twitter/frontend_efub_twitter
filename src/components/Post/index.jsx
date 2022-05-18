import React, { useState, useRef, useEffect } from 'react';

import { ProfileImg } from 'asset/img/img';
import {
  faImage,
  faFile,
  faBarsProgress,
  faHashtag,
  faSmile,
  faCalendar,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, BORDER_RADIUS, fonts } from 'styles/styleOptions';
import {StyledRoot,PostWrap,Textarea,PostHashTags,PostControl,PostIcon,Hash} from "./Style";
import {twitPost} from "apis/twitPost.api";
import {allHashTags} from "apis/allHashTags.api";


const Post = ({userObj}) => {

    const [form, setForm] = useState({nickname:userObj.nickname, description:"",hashTags:[]});
    const [height, setHeight] = useState('');
    const [hashTags, setHashTags]=useState([]);
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
  
    const textRef = useRef();
  
    const onChange = ({ target: { name, value } }) => {
      const currHeight = textRef.current.scrollHeight + 'px';
      console.log(form)
      setForm({...form, [name]:value});
      setHeight(currHeight);
    };
  
    const submitPost = async () => {
      console.log('onSubmit', form,hashTags,selecthash);
      /*let postHash=[];
      selecthash.map((hash,idx)=>{if (hash) return (postHash.push(hashTags[idx].keyword))});
      console.log(postHash);
      setForm({...form, hashTags:postHash});*/
      const response = await twitPost(form);
      if (response){
        console.log("submitPost",response);
        window.location="/";
      }
      else{
        alert("오류 발생 : 트윗 작성 실패함")

    }
  }

    const getHashTags=async()=>{
      const hashTagObj=await allHashTags();
      setHashTags(hashTagObj.data);
    }



    const hashClick=({target})=>{
      const {value, id, name}=target;
      //console.log(value, id, name); 

      const selectHashArr = [...Array(hashTags.length)].map((_, idx) =>
      {
        if (parseInt(value)==idx){
          console.log("값 변경");
          return( !selecthash[idx]);
        }
        else{console.log("그대로 유지");return( selecthash[idx]);}
      });
      setSelectHash(selectHashArr)
      let postHash=[];
      selectHashArr.map((hash,idx)=>{console.log(JSON.stringify(hashTags[idx].keyword)); if (hash) return (postHash.push(hashTags[idx].keyword))});
      console.log(postHash);
     
      setForm({...form, hashTags:postHash});

      
      //console.log(selectHashArr)
    }

    useEffect(()=>{
      getHashTags();
    
    },[])


    return (
      <StyledRoot>
        <img src={ProfileImg} alt="임시 프로필 사진"></img>
        <PostWrap>
          <Textarea
            ref={textRef}
            value={form.description}
            height={height}
            onChange={onChange}
            name="description"
            type="text"
            placeholder="무슨 일이 일어나고 있나요?"
          ></Textarea>
            <PostHashTags>
             
            {hashTags.map((hash,idx)=> {const {keyword,id}=hash; 
            
       
            return <Hash color={selecthash[idx]? colors.white[1]:colors.grey[1]} 
            background={selecthash[idx]? colors.blue[1]:colors.white[1]} 
            onClick={hashClick} name={keyword} id={id} value={idx} key={idx}>
              <FontAwesomeIcon icon={faHashtag} color={selecthash[idx]? colors.white[1]:colors.grey[1]} 
               size="sm" />{keyword}</Hash>})}
            
            </PostHashTags>
          <PostControl>

            <PostIcon>
              <FontAwesomeIcon icon={faImage} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faFile} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faBarsProgress} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faSmile} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faCalendar} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faLocationPin} color={colors.grey[1]} size="sm" />
            </PostIcon>
            <button onClick={submitPost}>트윗하기</button>
          </PostControl>
        </PostWrap>
      </StyledRoot>
    );
  };
  export default Post;