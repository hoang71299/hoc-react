import HTTP from "@/configs/axiosCongfig";
const GetData = async ()=>{
    try {
        const {data} = await HTTP.get(`/posts`)
         return data;
    } catch (error) {
        console.log(error);
    }
}
export {
    GetData
}