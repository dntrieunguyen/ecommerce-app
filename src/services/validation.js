export const registerSubmitValidate = (
   name,
   email,
   password,
   phone,
   userList,
   setErrorMessage,
) => {
   const checkEmail = userList.findIndex(item => item.email === email);

   // console.log(checkEmail);

   let isValid = true;

   // Kiểm tra name
   if (name.trim().length === 0) {
      setErrorMessage(prevErrors => ({
         ...prevErrors,
         name: 'Please Enter This Field',
      }));
      isValid = false;
   }

   // Kiểm tra email
   if (email.trim().length === 0) {
      setErrorMessage(prevErrors => ({
         ...prevErrors,
         email: 'Please Enter This Field',
      }));
      isValid = false;
   }
   if (checkEmail !== -1) {
      setErrorMessage(prevErrors => ({
         ...prevErrors,
         email: 'Email already exists !!!',
      }));
      isValid = false;
   }

   // Kiểm tra password
   if (password.trim().length === 0) {
      setErrorMessage(prev => ({
         ...prev,
         password: 'Please Enter This Field',
      }));
      isValid = false;
   }

   if (password.trim().length > 0 && password.length < 8) {
      setErrorMessage(prev => ({
         ...prev,
         password: 'Password must have more than 8 characters',
      }));
      isValid = false;
   }

   // Kiểm tra số phone
   if (phone.trim().length === 0) {
      setErrorMessage(prev => ({
         ...prev,
         phone: 'Please Enter This Field',
      }));
      isValid = false;
   }
   return isValid;
};

export const loginSubmitValidate = (
   email,
   password,
   userList,
   setErrorMessage,
) => {
   const checkEmail = userList.findIndex(item => item.email === email);

   // console.log(checkEmail);

   let isValid = true;
   // Kiểm tra email
   if (email.trim().length === 0) {
      setErrorMessage(prevErrors => ({
         ...prevErrors,
         email: 'Please Enter This Field',
      }));
      isValid = false;
   } else if (checkEmail === -1) {
      setErrorMessage(prevErrors => ({
         ...prevErrors,
         email: 'Invalid Email',
      }));

      isValid = false;
   }

   if (checkEmail !== -1) {
      const user = userList[checkEmail];

      if (user?.password !== password) {
         setErrorMessage(prev => ({
            ...prev,
            password: 'Password wrong !!!',
         }));
         isValid = false;
      }
   }

   // Kiểm tra password
   if (password.trim().length === 0) {
      setErrorMessage(prev => ({
         ...prev,
         password: 'Please Enter This Field',
      }));
      isValid = false;
   }
   return isValid;
};
