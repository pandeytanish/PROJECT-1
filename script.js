function myData() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("third").value;
    var c = document.getElementById("fourth").value;
    var d = document.getElementById("fifth").value;
    var e = document.getElementById("sixth").value;
    var f = document.getElementById("seventh").value;
    var g = document.getElementById("science").value;
    var h = document.getElementById("social").value;
    var i = document.getElementById("maths").value;
    var j = document.getElementById("hindi").value;
    var k = document.getElementById("english").value;

    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "") {
      alert("All fields are compulsory");
      return false;
    } else {
      // Store data in session storage
      sessionStorage.setItem("studentName", a);
      sessionStorage.setItem("fatherName", b);
      sessionStorage.setItem("rollNo", c);
      sessionStorage.setItem("class", d);
      sessionStorage.setItem("address", e);
      sessionStorage.setItem("pincode", f);
      sessionStorage.setItem("science",g);
      sessionStorage.setItem("social",h);
      sessionStorage.setItem("maths",i);
      sessionStorage.setItem("hindi",j);
      sessionStorage.setItem("english",k);
      return true;
    }
  }