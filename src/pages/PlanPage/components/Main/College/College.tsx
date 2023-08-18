import allColleges from "../../../../../data/colleges.json";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function College({ id, setSelectedCollege }: any) {
  let college: any = allColleges.filter((college) => college.id === Number(id));
  college = college[0];

  return (
    <div>
      <div>{college.collegeName}</div>

      <Tabs defaultActiveKey='Cost Information' justify>
        <Tab eventKey='Cost Information' title='Cost Information'>
          <div>COST INFORMATION</div>
          <div>
            <div>In State Tuition</div>
            <div>On Campus Room and Board</div>
            <div>In StateTotal Expenses</div>
            <div>Out of State Tuition</div>
            <div>Off Campus Room and Board</div>
            <div>Financial Aid Link</div>
          </div>
        </Tab>

        <Tab eventKey='STUDENT BODY INFORMATION' title='STUDENT BODY INFORMATION'>
          <div>STUDENT BODY INFORMATION</div>
          <div>
            <div>Campus location</div>
            <div>Total Enrollment</div>
            <div>Percentage Full-Time</div>
            <div>Percentage Not enrolled in any distance education</div>
            <div>Student-to-faculty Ratio</div>
            <div>Percentage of Research Staff</div>
          </div>
        </Tab>

        <Tab eventKey='ADMISSIONS AND OUTCOMES' title='ADMISSIONS AND OUTCOMES'>
          <div>ADMISSIONS AND OUTCOMES</div>
          <div>
            <div>Number of applicants</div>
            <div>Percent admitted</div>
            <div>Percent who enrolled</div>
            <div>Graduation rate</div>
            <div>Percentage of Students who Default on their Student Debt</div>
            <div>Admissions Link</div>
          </div>
        </Tab>

        <Tab eventKey='NOTABLE INFORMATION' title='NOTABLE INFORMATION'>
          <div>NOTABLE INFORMATION</div>
          <div>
            <div>Website: {college.website}</div>
            <div>Financial Aid Calculator Link</div>
            <div>Special Learning Opportunities</div>
            <div>Disability Services Link</div>
            <div>Most Popular Program</div>
            <div>Carnegie Classification</div>
          </div>
        </Tab>
      </Tabs>

      <Button variant='primary' onClick={() => setSelectedCollege(-1)}>
        Return to Colleges
      </Button>
    </div>
  );
}
