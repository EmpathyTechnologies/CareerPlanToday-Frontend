import { formatCurrency } from "../../../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Career {
  id: string;
  title: string;
  salary: {
    national: {
      average: number;
    };
  };
}

interface CareersTableRowProps {
  career: Career;
  userSavedCareers: any;
  setUserSavedCareers: any;
}

export default function CareersTableRow(props: CareersTableRowProps) {
  let { career, userSavedCareers, setUserSavedCareers } = props;

  function checkIf208000(salary: string) {
    return salary === "$208,000" ? "$208,000+" : salary;
  }

  function toggleSaveCareer() {
    if (userSavedCareers.includes(career.id)) {
      setUserSavedCareers(userSavedCareers.filter((element: number) => element !== parseInt(career.id)));
    } else {
      setUserSavedCareers([...userSavedCareers, career.id]);
    }
  }

  // const [userSavedCareers, setUserSavedCareers] = useState<number[]>([5, 10, 15]);

  // MAKE THIS INTO A PUT
  // useEffect(() => {
  //   fetch("https://gnhrz7c1y3.execute-api.us-east-1.amazonaws.com/default/userGetsSavedCareersFromDynamoDB")
  //     .then((response) => response.json())
  //     .then((savedCareers: any) => setUserSavedCareers(savedCareers));
  // }, [userSavedCareers]);

  return (
    <tr>
      <td>
        {userSavedCareers.includes(career.id) ? (
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
        <Link to={`/careers/${career.id}`}>{career.title}</Link>
      </td>
      <td>{checkIf208000(formatCurrency(career.salary.national.average))}</td>
    </tr>
  );
}
