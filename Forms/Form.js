import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    console.log(firstName,lastName);
    
    function handleFirstChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
        <div style={{marginBottom: "10px"}}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstChange}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastChange}
                />
                </div>
        </form>
    )
}
