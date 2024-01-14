
let main = document.querySelector("#main");

let list = [
    {name : "Miss Beautiful", img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"},
    {name : "Harsh Kumar", img:"./mypic.jpg  ", status:"Stranger"},
    {name : "Mr. Robot", img:"https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"}
];

 function print(){
    let clutter ="";
list.forEach((el, index)=>{
      clutter += ` <div id="card">
      <div class="img">
          <img src="${el.img}" alt="profile">
      </div>
      <h1>${el.name}</h1>
      <h2 id="${el.status}">${el.status}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis est accusamus quaerat officia. Fuga!</p>
      <button class="${el.status === "Stranger" ? "green" : "red"}" id="${index}">${el.status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
  </div>`;

});

main.innerHTML = clutter;
 }
print();

main.addEventListener("click", (details)=>{
    // console.log(details)
    // console.log(details.target)
    list[details.target.id].status = "Friends";
    print();

})