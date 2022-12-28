import React from "react";
// import BaseHoc from "../hoc/BaseHoc";

class ClassCom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ankit",
      age: 22,
    };
    console.log("constructor  is mounted");
  }
  // it is also a method that is used for mounting 
  componentDidMount()
  {
     console.log("this method componentDidMount is mounted");
  }
  



  // updated 
  componentDidUpdate()
  {
      console.log("this method componentDidUpdate is updated");
  }
  // unmounted
  componentWillUnmount()
  {
      console.log("this method componentWillUnmount is unmounted");
  }
  render() {
    console.log("render is mounted");
    return (
      <>
        <button onClick={()=>
          this.setState({
            ...this.state,
            age:this.state.age+1,
          })
        }>click on this </button>
        <p>{this.state.age}</p>
      </>
    );
  }
}

export default ClassCom;
