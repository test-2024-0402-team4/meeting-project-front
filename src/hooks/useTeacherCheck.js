import { useEffect } from "react";
import { useQueryClient } from "react-query"

export const useTeacherCheck = () => {
    useEffect(() => {
        const token = localStorage.getItem("AccessToken");
        if (token) {
            const tokenPayLoad = token.split('.')[1];
            try {
                const decodedPayload = JSON.parse(atob(tokenPayLoad));
                if(decodedPayload.roleId === 1) {
                    alert("권한이 없습니다.")
                    window.location.replace(`/`);
                }
            } catch (error) {
                console.error("Failed to decode AccessToken:", error);
            }
        } else {
            console.error("AccessToken not found in localStorage");
            return;  
        }

    }, []);
}