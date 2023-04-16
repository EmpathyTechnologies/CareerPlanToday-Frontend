import Footer from "../layouts/Footer";
export default function TermsOfUse() {
  const style_container = { paddingLeft: "24px" };
  const style_header = { fontSize: 24, paddingTop: "24px" };

  return (
    <div>
      <div style={style_container}>
        <h1 style={style_header}>Terms Of Use</h1>
        <h2 style={style_header}>For All Users</h2>
        <div>
          Before using this site, please make sure that you note the following important
          information:
        </div>
        <h2 style={style_header}>Do Your Own Research</h2>
        <div>
          Our content is intended to be used and must be used for information and education purposes
          only. It is very important to do your own analysis before making any investment,
          transaction, or decision based on your own personal circumstances. You should
          independently research and verify, any information that you find on our Website and wish
          to rely upon, whether for the purpose of making an investment, transaction, or other
          decision.
        </div>
        <h2 style={style_header}>No Investment Advice</h2>
        <div>
          We do not provide personalized recommendations or views as to whether a career, college,
          trade school, code academy or investment approach is suited to the financial or other
          needs of a specific individual.
        </div>
        <h2 style={style_header}>Individual Empowerment</h2>
        <div>
          This is the beginning of a journey, not the end. Where we present screens, calculators, or
          other tools, the results should only be treated as candidates for further research, not as
          recommendations. This website is not a substitute for independent research reflecting your
          individual criteria for your decisions. Where we offer valuation tools, these are solely
          for informational & educational purposes so that users can easily run their own
          valuations. The pre-defined values are simply a starting point based on assumptions. Users
          should not regard them as a substitute for their own judgment. Any resulting valuation
          outputs are not endorsed by us.
        </div>
        <h2 style={style_header}>Data Content</h2>
        <div>
          This website, its administrators, owners, and anyone else associated with this site assume
          no responsibility or liability for any errors or omissions in the content of this site.
          The information contained in this site is provided on an "as is" basis with no guarantees
          of completeness, accuracy, usefulness or timeliness.
        </div>
        <h2 style={style_header}>Data Sources</h2>
        <div>
          Data sources we used include https://www.mynextmove.org,
          https://collegecost.ed.gov/affordability, and https://nces.ed.gov/collegenavigator. Our
          data may be outdated. Users are encouraged to explore the original data sources to verify
          data accuracy.
        </div>

        <h2 style={style_header}>No Reliance</h2>
        <div>
          Accordingly, we will not be liable, whether in contract, tort (including negligence) or
          otherwise, in respect of any damage, expense or other loss you may suffer arising out of
          such information or any reliance you may place upon such information. Any arrangements
          between you and any third party contacted via the Website are at your sole risk.
        </div>
      </div>
      <Footer />
    </div>
  );
}
