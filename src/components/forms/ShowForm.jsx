import PersonalInfoForm from './PersonalInfoForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'

export default function ShowForm({title}) {
    switch(title) {
        case 'Personal Information':
            return <PersonalInfoForm></PersonalInfoForm>
        case 'Work Experience':
            return <ExperienceForm></ExperienceForm>
        case 'Education':
            return <EducationForm></EducationForm>
        case 'Skills':
            return <SkillsForm></SkillsForm>
        default:
            return null;
    }
}