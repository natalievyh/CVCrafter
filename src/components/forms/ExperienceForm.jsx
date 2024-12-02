export default function ExperienceForm() {
    return (
        <form>
            <div className='formInput'>
                <label for='company'>Company Name</label>
                <input type='text' id='company' name='company'></input>
            </div>
            <div className='formInput'>
                <label for='position'>Position</label>
                <input type='text' id='position' name='position'></input>
            </div>
            <div className='formInput'>
                <label for='workLocation'>Location</label>
                <input type='text' id='workLocation' name='workLocation'></input>
            </div>
            <div className='formInput'>
                <label for='workStart'>Start Date</label>
                <input type='month' id='workStart' name='workStart'></input>
            </div>
            <div className='formInput'>
                <label for='workEnd'>End Date</label>
                <input type='month' id='workEnd' name='workEnd'></input>
            </div>
            <div className='formInput'>
                <label for='workDescription'>Description</label>
                <input type='month' id='workDescription' name='workDescription'></input>
            </div>
        </form>
    );
}