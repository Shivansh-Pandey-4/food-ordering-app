import myImage1 from "../assets/myImage1.jpg"

const Contact=()=>{
    return (
      <div className="AboutContainer">
          <img src={myImage1} alt="personalImg"></img>
          <h1>Name: Shivansh Pandey</h1>
          <h2>About Myself</h2>
          <p>Hello my name is Shivansh Pandey. I am a passionate software engineer and world's best coder.
          </p>
      </div>
    )
}

export default Contact;