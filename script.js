document.getElementById("form")?.addEventListener("submit",function(e){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    let error=document.getElementById("error");
    
    if(name===""||email===""||msg===""){
    e.preventDefault();
    error.innerText="Please fill all fields";
    error.style.color="red";
    }
    else{
    alert("Message sent!");
    }
    });
    
    function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill Name and Email");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
