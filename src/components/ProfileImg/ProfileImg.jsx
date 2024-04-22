/** @jsxImportSource @emotion/react */
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as s from "./style";
import {v4 as uuid} from "uuid"
import React, { useCallback, useRef, useState } from 'react';
import { storage } from "../../apis/firebase/firebaseConfig";
import { registerImgUrlRequest } from "../../apis/api/profileApi";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

function ProfileImg(props) {
    const params = useParams();
    const fileInputRef = useRef();
    const [ profileUrl, setProfileUrl ] = useState("null");

    const registerImgUrlMutation = useMutation({
        mutationKey: "registerImgUrlMutation",
        mutationFn: registerImgUrlRequest,
        onSuccess: response => {
          alert("정상적으로 등록되었습니다");
        }
      });
    
    const handleFileChange = (e) =>{
        const fileReader = new FileReader();
        
        if(e.target.files.length ===0){
            return;
        } 
        fileReader.onload = (e) =>{
            setProfileUrl(e.target.result);
            console.log(e.target.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);

        // const confirmUpload = window.confirm("이미지를 등록하시겠습니까?");
        // if (confirmUpload) {
        //     console.log(profileUrl);
        //     const imgBoard = {
        //         userId: params.userId,
        //         userImgUrl: profileUrl
        //     };
        //     registerImgUrlMutation.mutate(imgBoard);
          

        // }else{
        //     setProfileUrl(null);
        //     console.log(profileUrl);
        // }
    }

    const imgChangeClick = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/");
    
        input.onchange = async () => {
          const file = input.files[0];
          const storageRef = ref(storage, `project_image/${uuid()}_${file.name}`);
          const uploadResponse = await uploadBytes(storageRef,file);
    
          const downloadUrl =  await getDownloadURL(uploadResponse.ref);
          setProfileUrl(downloadUrl);
        
          const confirmUpload = window.confirm("이미지를 등록하시겠습니까?");
          if (confirmUpload) {
              const imgBoard = {
                userId: params.userId,
                userImgUrl:downloadUrl
            };
            console.log(imgBoard);
            registerImgUrlMutation.mutate(imgBoard);
           
          } else {
              setProfileUrl("");
          }
        }
        input.click();
        
      }, []);

    
    return (
        
        <div css={s.testLayout}>
            <div css={s.imgBox} >
                <img src={profileUrl} alt="" />
            </div>
        
        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }}/>
        <button onClick={imgChangeClick}>사진등록</button>
        
        </div> 
    );
}

export default ProfileImg;