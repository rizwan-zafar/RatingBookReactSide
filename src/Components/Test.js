import React from "react";
 function Test() {
 
  return (<div>
    <button >Test Delete</button><br />
  </div>)
}
export default Test;

// Issue is in you object Bcoz you are adding keys for title and desc and not adding value.if you not having value for other key you can remove them or pass them as empty string 

// instead of this
// const newPost = {
//   username: "user.username",
//   title,
//   desc,
//   image: file ? file.name : "",
//   };

// WRITE YOUR OBJECT IN SUCH A WAY
// const newPost = {
//   username: "user.username", (user.name will be treated as string)
//   title:"",
//   desc:"",
//   image: file ? file.name : "",  (and make sure you have file variable)
//   };

// if you want to print value of user.name then remove double quotation.
 

