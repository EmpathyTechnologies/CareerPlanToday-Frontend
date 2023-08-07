import { formatCurrency } from "../../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CareerType } from "../../../types/CareerType";
import { toggleCareerSave } from "../../../redux/actions";
import { CareersTableRowPropsType } from "../../../types/CareersTableRowType";

export default function CareersTableRow(props: CareersTableRowPropsType) {
  const { careerData: careerData } = props;

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
          <div onClick={toggleSaveCareer} style={{ color: "rgb(255, 56, 92)" }}>
            <AiFillHeart />
          </div>
        ) : (
          <div onClick={toggleSaveCareer}>
            <AiOutlineHeart />
          </div>
        )}
      </td>
      <td>
        <Link to={`/careers/${careerData.id}`}>{careerData.title}</Link>
      </td>
      <td>{checkIf208000(formatCurrency(careerData.salary.national.average))}</td>
    </tr>
  );
}
