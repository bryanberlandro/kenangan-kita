import { FaBowlFood } from "react-icons/fa6";
import { GiCupcake } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { MdCoffee } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import CategoryBtn from "../elements/CategoryBtn";

const CategoryBtnWrap = () => {
    return(
        <div className="flex items-center gap-4">
            <CategoryBtn name="Semua">
                <IoFastFood/>
            </CategoryBtn>
            <CategoryBtn name="Makanan">
                <FaBowlFood/>
            </CategoryBtn>
            <CategoryBtn name="Snack">
                <GiCupcake/>
            </CategoryBtn>
            <CategoryBtn name="Coffee">
                <MdCoffee/>
            </CategoryBtn>
            <CategoryBtn name="Non-Coffee">
                <RiDrinks2Fill/>
            </CategoryBtn>
        </div>
    )
}

export default CategoryBtnWrap;