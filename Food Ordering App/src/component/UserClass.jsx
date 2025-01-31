import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0,
        }

        console.log(props);
    }

     render(){
        const {name,location}=this.props;
        const {count}=this.state;

        return (
            <div className="userContainer">
                <h1>This is a Class Based Component</h1>
                <h3>{name} {location}</h3>
                <p>Class based component is a just a simple class inside the javascript which created by inheriting from React.Component Class and using a render method which return some piece of jsx.
                </p>
                <h3>{count} </h3>
                <button onClick={()=>{
                     this.setState({
                        count: this.state.count+1
                     })
                }}>Increase Count</button>
            </div>
        )
     }
};

export default UserClass;