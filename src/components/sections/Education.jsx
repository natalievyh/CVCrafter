export default function Education({schools}) {
    return (
        <div className='education'>
            <h3>Education</h3>
            <hr></hr>
            {schools.map((school, index) => (
                <div key={index} className='school'>
                    <div className='schoolInfo'>
                        <h4>{school.schoolName}</h4>
                        <h5>{school.startDate} - {school.endDate}</h5>
                    </div>
                    <div className='schoolInfo'>
                        <i>{school.degree}</i>
                        <p>{school.location}</p>
                    </div>
                    <p>{school.details}</p>
                </div>
            ))}
        </div>
    );
}