import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
 import { brandBlue_Dark, brandRed } from "../../../../../../assets/brandColors";
 
import { CareersTableRowPropsType } from "../../../../../../types/CareersTableRowType";
import { CareerType } from "../../../../../../types/CareerType";
import { formatCurrency } from "../../../../../../utilities/formatCurrency";
import { RootState } from "../../../../../../redux/store";
import { toggleCareerSave } from "../../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CareersTableRow(props: CareersTableRowPropsType) {
  const { careerData, setSelectedCareer } = props;

  const dispatch = useDispatch();
  const savedCareers = useSelector((state: RootState) => state.careers);

  function checkIf208000(salary: string) {
    return salary === "$208,000" ? "$208,000+" : salary;
  }

  function toggleSaveCareer() {
    dispatch(toggleCareerSave(careerData));
  }

  const isCareerSaved = savedCareers.some((c: CareerType) => c.id === careerData.id);

  return (
    <tr>
      <td>
        {isCareerSaved ? (
          <div onClick={toggleSaveCareer} style={{ color: brandRed, cursor: "pointer" }}>
            <AiFillHeart />
          </div>
        ) : (
          <div onClick={toggleSaveCareer} style={{ cursor: "pointer" }}>
            <AiOutlineHeart />
          </div>
        )}
      </td>
      <td>
        <div
          onClick={() => setSelectedCareer(careerData.id)}
          style={{
 
            color: brandBlue_Dark,
 
            cursor: "pointer",
          }}>
          {careerData.title}
        </div>
      </td>
      <td>{checkIf208000(formatCurrency(careerData.salary.national.average))}</td>
    </tr>
  );
}
