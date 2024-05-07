import { useEffect } from "react";
import { useQueryClient } from "react-query";

export const useAuthEmailCheck = (role) => {
    const queryClient = useQueryClient();

    useEffect(() => { 
        const principalData = queryClient.getQueriesData("principalQuery");
        
        if(principalData[0][1]?.data.emailAuth !== 2 && principalData[0][1]?.data.roleId !== 3) {
            alert("이메일 인증 후 이용 바랍니다.");
            window.location.replace(`/${role}/mypage/modify?userId=${principalData[0][1]?.data.userId}`);
        }
    }, [queryClient]);
};