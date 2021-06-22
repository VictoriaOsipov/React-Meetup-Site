import { useRef } from 'react';
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
    const TitleInputRef = useRef();
    const ImageInputRef = useRef();
    const AddressInputRef = useRef();
    const DescriptionInputRef = useRef();



    function SubmitHandler(event) {
        event.preventDefault();

        const enteredTitle = TitleInputRef.current.value;
        const enteredImage = ImageInputRef.current.value;
        const enteredAddress = AddressInputRef.current.value;
        const enteredDescription = DescriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            Image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        console.log(meetupData);
    };

    return <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <div className={classes.control}>
                 <label htmlfor="title">Meetup Title</label>
                 <input type="text" required id="title" ref={TitleInputRef}/>
            </div>
            <div className={classes.control}>
                 <label htmlfor="image">Meetup Image</label>
                 <input type="text" required id="image" ref={ImageInputRef} />
            </div>
            <div className={classes.control}>
                 <label htmlfor="address">Address</label>
                 <input type="text" required id="address" ref={AddressInputRef} />
            </div>
            <div className={classes.control}>
                 <label htmlfor="description">Description</label>
                 <textarea id="description" required rows="5" ref={DescriptionInputRef}></textarea>
            </div>
            <div className={classes.action}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>

}

export default NewMeetupForm;