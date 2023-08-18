import { formatCurrency } from "../../../../../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import { CareerType } from "../../../../../../types/CareerType";
import { toggleCareerSave } from "../../../../../../redux/actions";
import { CareersTableRowPropsType } from "../../../../../../types/CareersTableRowType";

export default function CareersTableRow(props: CareersTableRowPropsType) {
  const { careerData, setSelectedCareer } = props;

  const dispatch = useDispatch();
  const savedCareers = useSelector((state: RootState) => state.careers);

  function checkIf208000(salary: string) {
    return salary === "$208,000" ? "$208,000+" : salary;
  }

  function toggleSaveCareer() {
    dispatch(toggleCareerSave(careerData)); // Dispatch the action to toggle career saving
  }

  const isCareerSaved = savedCareers.some((c: CareerType) => c.id === careerData.id);

  return (
    <tr>
      <td>
        {isCareerSaved ? (
          <div onClick={toggleSaveCareer} style={{ color: "rgb(255, 56, 92)", cursor: "pointer" }}>
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
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}>
          {careerData.title}
        </div>
      </td>
      <td>{checkIf208000(formatCurrency(careerData.salary.national.average))}</td>
    </tr>
  );
}
