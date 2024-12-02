export default function EducationForm() {
    return (
        <form>
            <div className='formInput'>
                <label for='school'>School</label>
                <input type='text' id='school' name='school'></input>
            </div>
            <div className='formInput'>
                <label for='schoolLocation'>Location</label>
                <input type='text' id='schoolLocation' name='schoolLocation'></input>
            </div>
            <div className='formInput'>
                <label for='degree'>Degree</label>
                <input type='text' id='degree' name='degree'></input>
            </div>
            <div className='formInput'>
                <label for='schoolStart'>Start Date</label>
                <input type='month' id='schoolStart' name='schoolStart'></input>
            </div>
            <div className='formInput'>
                <label for='schoolEnd'>End Date</label>
                <input type='month' id='schoolEnd' name='schoolEnd'></input>
            </div>
        </form>
    );
}