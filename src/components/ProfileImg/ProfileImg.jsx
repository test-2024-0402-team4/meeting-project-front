/** @jsxImportSource @emotion/react */
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as s from "./style";
import {v4 as uuid} from "uuid"
import { useCallback} from 'react';
import { storage } from "../../apis/firebase/firebaseConfig";
import { updateImgUrlRequest } from "../../apis/api/profileApi";
import { useMutation } from "react-query";
function ProfileImg({ userId, profileUrl }) {

    const updateImgUrlMutation = useMutation({
        mutationKey: "updateImgUrlMutation",
        mutationFn: updateImgUrlRequest,
        onSuccess: response => {
          alert("정상적으로 등록되었습니다");
          window.location.reload();
        }
      });   
      
    
    const imgChangeClick = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/");
    
        input.onchange = async () => {
          const file = input.files[0];
          const storageRef = ref(storage, `project_image/${uuid()}_${file.name}`);
          const uploadResponse = await uploadBytes(storageRef,file);
    
          const downloadUrl =  await getDownloadURL(uploadResponse.ref);
        
          const confirmUpload = window.confirm("이미지를 등록하시겠습니까?");
          if (confirmUpload) {
            
              const imgBoard = {
                userId,
                userImgUrl:downloadUrl
            };
            console.log(imgBoard);
            updateImgUrlMutation.mutate(imgBoard);
          }
        }
        input.click();
        
      }, []);

    
    return (
        
        <div css={s.testLayout}>
          {
            profileUrl === null ?
            (
              <div css={s.imgBox} onClick={imgChangeClick} >
                <img src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="" />
              </div>
            )
            :
            (
              <div css={s.imgBox} onClick={imgChangeClick} >
                <img src={profileUrl} alt="" />
              </div>
            )
          }
        </div> 
    );
}

export default ProfileImg;