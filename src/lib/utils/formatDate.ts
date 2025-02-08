export function formatDate(dateString : string) {
	const date = new Date(dateString); // Convert the string to a Date object
  
	const day = String(date.getDate()).padStart(2, '0'); // Adds leading zero if day is less than 10
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Adds leading zero for month, months are 0-indexed
	const year = date.getFullYear();
  
	return `${day}-${month}-${year}`;
  }
  

  export const convertDateIntoISOFormat = (date:string)=>{
	const[day , month  , year] = date.split("-");
	const newDate =  new Date(`${year}-${month}-${day}T00:00:00Z`);
	return newDate.toISOString();
  }