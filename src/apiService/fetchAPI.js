import { useEffect, useState } from 'react';

const useFetch = url => {
   const [data, setData] = useState([]);

   useEffect(() => {
      let isMounted = true; // Sử dụng biến flag để theo dõi component có được mount hay không

      const fetchData = async () => {
         try {
            const res = await fetch(url);
            const responseData = await res.json();

            // Kiểm tra nếu component vẫn được mount thì mới cập nhật state
            if (isMounted) {
               setData(responseData);
            }
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();

      // Cleanup: Huỷ bỏ yêu cầu fetch nếu component bị unmount hoặc effect thay đổi
      return () => {
         isMounted = false;
      };
   }, [url]);

   return {
      data,
   };
};

export default useFetch;
