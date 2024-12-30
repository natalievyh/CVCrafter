export default function Skills({skills}) {
    return (
        <div className='skills'>
            <h3>Skills</h3>
            <hr></hr>
            <ul className='skillsList'>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <p>{skill}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}