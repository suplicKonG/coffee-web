function Contact(){
    return(
        <>
            <div id="contact" className="contact-form">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"></input>
            </div>
        </>
    )
}

export default Contact