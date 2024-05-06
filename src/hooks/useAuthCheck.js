import { useEffect } from "react";
import { useQueryClient } from "react-query";

export const useAuthCheck = () => {

    useEffect(() => {
        const principalData = localStorage.getItem("AccessToken")
        if (!principalData) {
            alert("로그인 후 이용 바랍니다.");
            window.location.replace("/auth/signin");
        }
    }, []);
};