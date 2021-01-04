/* eslint-disable react/react-in-jsx-scope */
const AboutComp: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="about-inner text-center">
              <div className="heading">
                <h2>HYPOCHONDRIASIS</h2>
                <p className="m-0">(FEAR OF DISEASES)</p>
              </div>

              <p>
                Hypochondriasis or hypochondria is a condition in which a person
                is excessively worried about having a serious illness. It has
                been claimed that this weakening condition results from an
                inaccurate perception of the condition of body and mind despite
                the absence of an actual medical diagnosis. Although it is
                currently considered a psychosomatic disorder, it is not
                genetically transmitted.
              </p>
              <p>
                A person with hyprochondriasis is known as a hypochondriac.
                Hypochondriacs get disturbed about any physical or psychological
                symptoms they detect, no matter how minor the symptom may be,
                and are convinced that they have a serious illness, or are about
                to be diagnosed with one. They continue to get overly worried
                even after the doctor has reassured them that they are fine or
                that the symptom is not what they have in mind. A person is said
                to be a hypochondriac if after six months, he still feels or
                believes he has a serious illness which has not been confirmed.
              </p>
              <p>
                The media and internet often contribute to hypochondria through
                their articles, TV shows, advertisement, etc regarding serious
                disease. They often portray these diseases as random, obscure
                and inevitable. Any major disease outbreak or disease
                predictions increase a hypochondriac’s fear that he may have
                that disease. Even a mere statistic regarding an illness like
                cancer will give hypochondriacs the illusion that they are more
                likely to develop the disease.{" "}
              </p>
              <p>
                According to Wikipedia, “Overly protective caregivers and an
                excessive focus on minor health concerns have been implicated as
                a potential cause of hypochondriasis development”. Also, disease
                in the family or death of family members can trigger
                hypochondria in some persons. Likewise, when approaching the age
                of a relative who died prematurely from a disease, many other
                healthy, happy individuals fall prey to hypochondria. These
                individuals believes they are suffering from the same disease
                that caused their parent’s death, sometimes causing panic
                attacks with corresponding symptoms.
              </p>
              <div className="btn-bar">
                <a href="https://covid19.ncdc.gov.ng/" className="">
                  Know More About Corona Virus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
