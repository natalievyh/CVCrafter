import PersonalInfo from "./sections/PersonalInfo.jsx";
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import templateData from "./templateData.js";

export default function Resume() {
    return (
        <div className='resume'>
            <PersonalInfo personalInfo={templateData.personalInfo}/>
            <Education schools={templateData.educations}/>
            <Experience experiences={templateData.experiences}/>
            <Skills skills={templateData.skills}/>
        </div>
    );
}