import { toast } from "react-toastify"

export const showToast = (message : string , isSuccess : boolean) => {
   if(isSuccess){
	toast.success(message, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: "colored",
	  });
   }else{
	toast.error(message, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: "colored",
	  });
   }
  };