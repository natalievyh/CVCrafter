export default function PersonalInfo({personalInfo}) {
    return (
        <div className='personalInfo'>
            <h2 className='fullName'>{personalInfo.fullName}</h2>
            <ul className='contactInfo'> 
                <li className='contactElement'>{personalInfo.email}</li>
                <li className='contactElement'>{personalInfo.phone}</li>
                <li className='contactElement'>{personalInfo.website}</li>
            </ul>
            <hr></hr>
        </div>
    );
}