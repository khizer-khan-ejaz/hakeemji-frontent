export const convertImage = ( file ,  setImagePreview)=>{
	try{
		if(!file) return;

		const reader = new FileReader();
		reader.onloadend = ()=>{
			setImagePreview(reader.result)
		}
		reader.readAsDataURL(file)
	}catch(err){
		console.log("Error on converting the image into buffer data");
	}
}