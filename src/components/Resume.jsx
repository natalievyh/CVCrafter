

export default function Resume() {
    return (
        <div className='resume'>
            <div className='personalInfo'>
                <h2 className='fullName'>Natalie Hoang</h2>
                <p className='contactInfo'>natalievhoang@gmail.com | (408)816-4728 | github.com/natalievyh</p>
                <hr></hr>
            </div>

            <div className='education'>
                <h3>Education</h3>
                <hr></hr>
                <div className='school'>
                    <div className='schoolInfo'>
                        <h4>University of California, Davis</h4>
                        <h5>June 2026</h5>
                    </div>
                    <div className='schoolInfo'>
                        <i>B.S., Computer Science</i>
                        <p>Davis, CA</p>
                    </div>
                    <p>Relevant Coursework: Data Structures & Algorithms, Computer Organization & Machine-Dependent Programming, Software Development & Object-Oriented Programming in C++, Algorithm Design and Analysis</p>
                </div>
            </div>

            <div className='experience'>
                <h3>Experience</h3>
                <hr></hr>
                <div className='job'>
                    <div className='workInfo'>
                        <h4>Company Name</h4>
                        <h5> Start Date - End Date</h5>
                    </div>
                    <div className='workInfo'>
                        <i>Job Title</i>
                        <p>City, State</p>
                    </div>
                    <ul className='bulletpoints'>
                        <li><p>Brief description of role and responsibilities</p></li>
                        <li><p>What you worked on, impact you had, what you accompliished</p></li>
                        <li><p>What technologies were used, relevant skills gained</p></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='workInfo'>
                        <h4>Google Student Developers Club</h4>
                        <h5> April 2023 - June 2023</h5>
                    </div>
                    <div className='workInfo'>
                        <i>Technology Lead</i>
                        <p>Davis, CA</p>
                    </div>
                    <ul className='bulletpoints'>
                        <li><p>Worked with a team to develop an app that connects students based on their academic needs</p></li>
                        <li><p>Implemented features such as posts, comments, and user authentication</p></li>
                        <li><p>Built with Flutter, Firebase, and Dart programming language</p></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='workInfo'>
                        <h4>AI Student Collective</h4>
                        <h5> March 2024 - May 2024</h5>
                    </div>
                    <div className='workInfo'>
                        <i>Projects Team Member</i>
                        <p>Davis, CA</p>
                    </div>
                    <ul className='jobDescription'>
                        <li><p>Developed a binary classifier in Python to detect lens flare with 89% accuracy using machine learning algorithms</p></li>
                        <li><p>Wrote a script to target flare streaks and remove them from an image</p></li>
                        <li><p>Used libraries such as PyTorch and OpenCV for model training and image manipulation.</p></li>
                    </ul>
                </div>
                <div className='job'>
                    <div className='workInfo'>
                        <h4>ASUCD Coffee House</h4>
                        <h5> May 2024 - Present</h5>
                    </div>
                    <div className='workInfo'>
                        <i>Bakery Employee</i>
                        <p>Davis, CA</p>
                    </div>
                    <ul className='jobDescription'>
                        <li><p>Work collaboratively in a fast-paced environment, ensuring customer satisfaction and quality control</p></li>
                        <li><p>Gather and prepare baked goods, collaborate with team members to fulfill daily production goals, maintain a clean and organized work space</p></li>
                    </ul>
                </div>
            </div>

            <div className='skills'>
                <h3>Skills</h3>
                <hr></hr>
                <ul className='skillsList'>
                    <li><p>Data Structures & Algorithims</p></li>
                    <li><p>Object Oriented Programming</p></li>
                    <li><p>C/C++</p></li>
                    <li><p>Python</p></li>
                    <li><p>Javascript</p></li>
                    <li><p>React</p></li>
                    <li><p>Typescript</p></li>
                    <li><p>Communication</p></li>
                    <li><p>Teamwork</p></li>
                    <li><p>Collaboration</p></li>
                </ul>
            </div>
        </div>
    );
}