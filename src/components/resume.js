import React from "react";
// import resume from "https://drive.google.com/file/d/1QGGNdvhHxktihxbq0X4RZS4llMOs6PqQ/view?usp=sharing";
import "../styles/app.css"

class Resume extends React.Component {

  render() {
   return (
   <object
    // data={resume} 
    href = "https://drive.google.com/file/d/1QGGNdvhHxktihxbq0X4RZS4llMOs6PqQ/view?usp=sharing"
   type="application/pdf" width="100%" height="800px"> 
      <p>It appears you don't have a PDF plugin for this browser.
       No biggie... you can <a href="https://drive.google.com/file/d/1QGGNdvhHxktihxbq0X4RZS4llMOs6PqQ/view?usp=sharing">click here to
         download the PDF file.</a></p>  
   </object>
   );
  };
 }

 export default Resume;