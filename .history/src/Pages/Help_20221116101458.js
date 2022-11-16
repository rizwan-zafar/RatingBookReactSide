import React from "react";
   const allFaqs = [
  {
    question: "Who we are ",
    answer: "Screen reader users have the option to pull up a list of titles for all frames on a page. Adding descriptive, unique titles allows users to quickly find the frame they need. If no titles are present, navigating through frames can quickly become difficult and confusing. If no title is listed, screen readers will instead give information like “frame,” “javascript,” the filename, or the URL. In most cases, this information won’t be very helpful.",
  },
  {
    question: "Is we also can purchase the books from here?",
    answer: "Yes, Screen reader users have the option to pull up a list of titles for all frames on a page. Adding descriptive, unique titles allows users to quickly find the frame they need. If no titles are present, navigating through frames can quickly become difficult and confusing. If no title is listed, screen readers will instead give information like “frame,” “javascript,” the filename, or the URL. In most cases, this information won’t be very helpful.",
  },
  {
    question: "What is return policy ?",
    answer: "Screen reader users have the option to pull up a list of titles for all frames on a page. Adding descriptive, unique titles allows users to quickly find the frame they need. If no titles are present, navigating through frames can quickly become difficult and confusing. If no title is listed, screen readers will instead give information like “frame,” “javascript,” the filename, or the URL. In most cases, this information won’t be very helpful.",
  },
  {
    question: "Are you doing Home Delivery ?",
    answer: "No, Screen reader users have the option to pull up a list of titles for all frames on a page. Adding descriptive, unique titles allows users to quickly find the frame they need. If no titles are present, navigating through frames can quickly become difficult and confusing. If no title is listed, screen readers will instead give information like “frame,” “javascript,” the filename, or the URL. In most cases, this information won’t be very helpful.",
  }

]
function Help() {
  return (
    <>
       {allFaqs ? allFaqs.map((question, key) => {
        return (<div className="container help" style={{ marginTop: "10vh" }} key={key}>
          <h1 ><strong>. {question.question}</strong></h1>
          <p>{question.answer}</p>
        </div>)
      }) : "Loading..."}

 
    </>
  );
}


export default Help;
