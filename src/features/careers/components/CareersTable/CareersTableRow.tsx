import { formatCurrency } from "../../../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import "./CareersTableRow.css";

export default function CareersTableRow(props: any) {
  let {
    career,
    // favorites, setFavorites
  } = props;

  function checkIf208000(salary: string) {
    return salary === "$208,000" ? "$208,000+" : salary;
  }

  // function handleFavoriteClick() {
  //   if (favorites.includes(career.id)) {
  //     setFavorites(favorites.filter((id: any) => id !== Number(career.id)));
  //   } else {
  //     setFavorites([...favorites, Number(career.id)]);
  //   }
  // }

  return (
    <tr>
      <td>
        {/* {favorites.includes(career.id) ? (
          <MdOutlineFavorite id='MdFavorite' size={25} onClick={handleFavoriteClick} />
        ) : (
          <MdFavoriteBorder size={25} 
          onClick={handleFavoriteClick}
           />
        )}
        <span> </span> */}
        <Link to={`/careers/${career.id}`}>{career.title}</Link>
      </td>
      <td style={{ display: "flex", justifyContent: "center" }}>{checkIf208000(formatCurrency(career.salary.national.average))}</td>
    </tr>
  );
}
