import { Jewelry } from "./Jewelry";
import "../assets/styles/JewelryList.css";

export const JewelryList = ( {jewelries} ) => {
    return (
        <>
        <div className="list">
            {jewelries.map ( jewelry => 
            <Jewelry
                key={jewelry.id}
                jewelry={jewelry}
            />
            )}
        </div>
        </>
    )
}