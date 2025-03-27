import { cn } from "@/lib/utils"
interface TypeStories{
    data:{
        id:number,
        name:string,
        image:string
    };
    index:number;
    className:string;
    // spear operator
}
const Stories = (props:TypeStories) => {
    const {data,index, ...more} = props
    console.log(more);
    return (
        <div className={cn("flex gap-3",more.className)} key={index}>
             <div className="w-[200px] h-[300px] relative p-3 border-2 rounded-[10px]">
                    <div className="absolute left-[10px]">
                    <img className=" rounded-full" src={data.image} alt="" />
                    </div>
                    <div className="absolute bottom-0">
                        <span>{data.name}</span>
                    </div>
             </div>
        </div>
    );
};

export default Stories;