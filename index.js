let form = document.getElementById('form')
let input =document.getElementById('input')
let msg =document.getElementById('message')
let post = document.getElementById('posts')
let data={};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("butten clicked");
    formValidation();
});

let formValidation=()=>{
    if(input.value === ''){
        msg.innerHTML="post cannot be blank ";
        console.log("error")
    }else{
        console.log("success");
        msg.innerHTML="";
        savemessage();
    }
}

let savemessage=()=>{
    data['text']=input.value;
    console.log(data);
    createpost()
}
let createpost=()=>{
    post.innerHTML +=`<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
    `;
    input.value = "";
}

let editPost=(e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
}