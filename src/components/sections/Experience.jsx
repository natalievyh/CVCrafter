export default function Experience({experiences}) {
    return (
        <div className='experience'>
            <h3>Experience</h3>
            <hr></hr>
            {experiences.map((job, jobIndex) => (
                <div key={jobIndex} className='job'>
                    <div className='workInfo'>
                        <h4>{job.companyName}</h4>
                        <h5>{job.startDate} - {job.endDate}</h5>
                    </div>
                    <div className='workInfo'>
                        <i>{job.jobTitle}</i>
                        <p>{job.location}</p>
                    </div>
                    <ul className='bulletpoints'>
                        {job.description.map((bulletpoint, bulletIndex) => (
                            <li key={`${jobIndex}-${bulletIndex}`}>
                                <p>{bulletpoint}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}