import QAs from "./components/QAs";
import {useState} from 'react';

function Faq () {
    const qas = [
        {question: "If I'm not in engineering, can I still be in iGEM?", answer: "Yes! We accept all majors from every school and have historically accepted majors including, but not limited to: HADM, biology, econ, BME, chemE, and ECE. If you are interested, please apply!"},
        {question: "Is iGEM heavily focused on Wet Lab?", answer: "No! While being a synthetic biology project team causes us to have a lot of interest in our Wet Lab subteam, our other subteams  are focused on just as highly as all need to be well integrated for a successful project."},
        {question: "What does the application process look like?", answer: "Applying to iGEM consists of the Project Teams general application (required for any project team), the iGEM specific application, and an in-person interview."},
        {question: "Do I need to have previous background skills or research experience?", answer: "No! We do not expect our applicants to have prior research, iGEM, or background experience when they apply. Your application will be considered the same way as other applicants who do have experience and you will not be put at a disadvantage."},
        {question: "Will I be evaluated differently from my first / second subteam choice?", answer: "No! The order of which subteams you apply to does not matter in the application process."},
        {question: "Does iGEM have a preference in class year when applying?", answer: "We typically try to get a mix of class years when accepting members for a season. However, students currently in their last year at Cornell cannot apply as they will not be able to complete a full season."}
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return(
        <div>
            {qas.map((pair, index) => (
                <QAs
                    key={index}
                    question={pair.question}
                    answer={pair.answer}
                    isOpen={activeIndex === index}
                    onToggle={() => {setActiveIndex(activeIndex === index ? null : index);}}
                />
            ))}
        </div>
    );
}
export default Faq;