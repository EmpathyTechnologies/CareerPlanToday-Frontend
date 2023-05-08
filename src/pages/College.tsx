import { useParams } from "react-router-dom";
import allColleges from "../data/colleges.json";
import Button from "react-bootstrap/Button";
import styles from "../assets/College.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function College() {
  let { id } = useParams();

  let college: any = allColleges.filter((college) => college.id === Number(id));
  college = college[0];

  return (
    <div className={`${styles.LargeContainer} footer-spacer`}>
      <div className={styles.CollegeName}>{college.collegeName}</div>

      <Tabs defaultActiveKey='Cost Information' id='justify-tab-example' className='mb-3' justify>
        <Tab eventKey='Cost Information' title='Cost Information'>
          <div className={styles.SectionHeader}>COST INFORMATION</div>
          <div className={styles.Container}>
            <div>In State Tuition</div>
            <div>On Campus Room and Board</div>
            <div>In StateTotal Expenses</div>
            <div>Out of State Tuition</div>
            <div>Off Campus Room and Board</div>
            <div>Financial Aid Link</div>
          </div>
        </Tab>

        <Tab eventKey='STUDENT BODY INFORMATION' title='STUDENT BODY INFORMATION'>
          <div className={styles.SectionHeader}>STUDENT BODY INFORMATION</div>
          <div className={styles.Container}>
            <div>Campus location</div>
            <div>Total Enrollment</div>
            <div>Percentage Full-Time</div>
            <div>Percentage Not enrolled in any distance education</div>
            <div>Student-to-faculty Ratio</div>
            <div>Percentage of Research Staff</div>
          </div>
        </Tab>

        <Tab eventKey='ADMISSIONS AND OUTCOMES' title='ADMISSIONS AND OUTCOMES'>
          <div className={styles.SectionHeader}>ADMISSIONS AND OUTCOMES</div>
          <div className={styles.Container}>
            <div>Number of applicants</div>
            <div>Percent admitted</div>
            <div>Percent who enrolled</div>
            <div>Graduation rate</div>
            <div>Percentage of Students who Default on their Student Debt</div>
            <div>Admissions Link</div>
          </div>
        </Tab>

        <Tab eventKey='NOTABLE INFORMATION' title='NOTABLE INFORMATION'>
          <div className={styles.SectionHeader}>NOTABLE INFORMATION</div>
          <div className={styles.Container}>
            <div>Website: {college.website}</div>
            <div>Financial Aid Calculator Link</div>
            <div>Special Learning Opportunities</div>
            <div>Disability Services Link</div>
            <div>Most Popular Program</div>
            <div>Carnegie Classification</div>
          </div>
        </Tab>
      </Tabs>

      <Button variant='primary' href='/colleges'>
        Return to Colleges
      </Button>
    </div>
  );
}
