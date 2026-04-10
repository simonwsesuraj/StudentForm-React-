import { useState } from 'react'
import './App.css'


function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [gender,setGender] = useState("");
  const [subject,setSubject] = useState({
    tamil:true,
    english:false,
    maths:false,
    science:false
  })
  const [resume,setResume] = useState(null);
  const [url,setUrl] = useState("");
  const [selectedOption,setSelectedOption] = useState("");
  const [about,setAbout] = useState("");
  const [success,setSuccess] = useState(false)
  const [submittedData,setSubmittedData] = useState(false)


  const handleSubmit= (e) =>{
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      resume,
      url,
      selectedOption,
      about,
      subject:Object.keys(subject).filter(k =>subject[k])
    }
    setSubmittedData(data);
    setSuccess(false)
  };

  const handleReset=(e)=>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubject({
    tamil: true,
    english: false,
    maths: false,
    science: false,
  });
    setUrl("");
    setResume(null);
    setSelectedOption("");
    setAbout("");
    setSuccess(false);
    setSubmittedData(null);

  };

  const handleSubjectChange=(sub)=>{
    setSubject((prev)=>({
      ...prev,
      [sub]: !prev[sub],
    }))
  };

  return (
    <div className='App'>
      <h1>Student Form</h1>
      {success && (
      <p className="success-msg">Form submitted successfully!</p>
      )}
      <fieldset>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <label htmlFor='first-name'>First Name</label>
          <input 
          type="text" 
          name="first-name" 
          id="first-name"
          value={firstName}
          onChange={(e) =>setFirstName(e.target.value)} 
          placeholder='Enter First Name' 
          required/>

          {/* Last Name */}
          <label htmlFor="last-name">Last Name</label>
          <input type="text"
          value={lastName} 
          onChange={(e)=>setLastName(e.target.value)} 
          id="last-name"
          name="last-name"
          placeholder='Enter Last Name'
          required/>

          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input type='email'
          required
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Enter Emial Address'/>
        
        {/*Contact*/}
        <label htmlFor="contact">Contact</label>
        <input type="tel"
        name="contact"
        id="contact"
        value={contact}
        required
        placeholder='Enter Contact Number'
        onChange={(e)=>setContact(e.target.value)}/>

        {/* Gender */}
        <label htmlFor='gender'>Gender</label>
        <input type='radio' 
        name="gender"
        id="gender"
        value="male"
        checked={gender==="male"}
        onChange={(e)=>setGender(e.target.value)}/>Male
        <input type='radio' 
        name="gender"
        id="gender"
        value="female"
        checked={gender==="female"}
        onChange={(e)=>setGender(e.target.value)}/>Female
        <input type='radio' 
        name="gender"
        id="gender"
        value="other"
        checked={gender==="other"}
        onChange={(e)=>setGender(e.target.value)}/>Other

        {/*Best Subject*/}
        <label htmlFor='subject'>Best Subject</label>
        <input type="checkbox"
        name="subject"
        id="tamil"
        value="tamil"
        checked={subject.tamil===true}
        onChange={(e)=>handleSubjectChange("tamil")}/>Tamil
        <input type="checkbox"
        name="subject"
        id="English"
        value="english"
        checked={subject.english===true}
        onChange={(e)=>handleSubjectChange("english")}/>English
        <input type="checkbox"
        name="subject"
        id="maths"
        value="maths"
        checked={subject.maths===true}
        onChange={(e)=>handleSubjectChange("maths")}/>Maths
        <input type="checkbox"
        name="subject"
        id="science"
        value="science"
        checked={subject.science===true}
        onChange={(e)=>handleSubjectChange("science")}/>Science

        {/* Linkdin URL */}
        <label htmlFor='url'>Linkdin Link</label>
        <input type="url"
        name="url"
        id="url"
        required
        value = {url}
        onChange={(e)=>setUrl(e.target.value)}
        placeholder='Enter Link'/>

        {/* Resume */}
        <label htmlFor='resume'>Resume</label>
        <input type="file"
        required
        onChange={(e)=>setResume(e.target.files[0])}
        />

        {/* Selected Option */}
        <label>Select Your Choise</label>
        <select
        name="select"
        id="select"
        value={selectedOption}
        onChange={(e)=>setSelectedOption(e.target.value)}>
          <option value="" disabled>Select your Ans</option>
          <optgroup label="Beginners">
            <option value="HTML">Html</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </optgroup>
          <optgroup label="Advanced">
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Express">Express</option>
          </optgroup>
        </select>

        {/* About */}
        <label htmlFor="about">About</label>
        <textarea type="text"
        name="about"
        id="about"
        value={about}
        onChange={(e)=>setAbout(e.target.value)}
        required></textarea>

          <button
          type="reset"
          value="reset"
          onClick={() => handleReset()}
          >
        Reset
        </button>
        <button
        type="submit"
        value="Submit"
        onClick={(e) => handleSubmit(e)}
        >
        Submit



        </button>

        </form>
        {submittedData && (
        <div className="result">
          <h2>Submitted Details</h2>

          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Contact:</strong> {submittedData.contact}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Subjects:</strong> {submittedData.subject.join(", ")}</p>
          <p><strong>LinkedIn:</strong> {submittedData.url}</p>
          <p><strong>Selected:</strong> {submittedData.selectedOption}</p>
          <p><strong>About:</strong> {submittedData.about}</p>
      </div>
        )}

      </fieldset>


    </div>
    
  )
}

export default App
