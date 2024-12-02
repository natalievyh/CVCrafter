export default function PersonalInfoForm() {
    return (
        <form>
            <div className='formInput'>
                <label for='name'>Full Name</label>
                <input type='text' id='name' name='name'></input>
            </div>
            <div className='formInput'>
                <label for='description'>Brief Description</label>
                <input type='text' id='description' name='description'></input>
            </div>
            <div className='formInput'>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email'></input>
            </div>
            <div className='formInput'>
                <label for='phone'>Phone Number</label>
                <input type='tel' id='phone' name='phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
            </div>
            <div className='formInput'>
                <label for='website'>Website</label>
                <input type='url' id='website' name='website'></input>
            </div>
        </form>
    );
}