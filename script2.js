 // Retrieve data from session storage
 var studentName = sessionStorage.getItem("studentName") || "Not available";
 var fatherName = sessionStorage.getItem("fatherName") || "Not available";
 var rollNo = sessionStorage.getItem("rollNo") || "Not available";
 var classValue = sessionStorage.getItem("class") || "Not available";
 var address = sessionStorage.getItem("address") || "Not available";
 var pincode = sessionStorage.getItem("pincode") || "Not available";
 var science = sessionStorage.getItem("science") || "Not available";
 var social = sessionStorage.getItem("social") || "Not available";
 var maths = sessionStorage.getItem("maths") || "Not available";
 var hindi = sessionStorage.getItem("hindi") || "Not available";
 var english = sessionStorage.getItem("english") || "Not available";

 // Display the data
 document.write("<p>Student Name: " + studentName + "</p>");
 document.write("<p>Father Name: " + fatherName + "</p>");
 document.write("<p>Roll No.: " + rollNo + "</p>");
 document.write("<p>Class: " + classValue + "</p>");
 document.write("<p>Address: " + address + "</p>");
 document.write("<p>Pincode: " + pincode + "</p>");
 document.write("<p>Science" + science + "</p>");
 document.write("<p>social science" + social + "</p>");
 document.write("<p>maths" + maths + "</p>");
 document.write("<p>hindi" + hindi + "</p>");
 document.write("<p>english" + english + "</p>");