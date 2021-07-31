let upload=document.getElementById("upload");
let container=document.querySelector(".container");
let deletes=document.querySelector(".delete")



upload.onclick=function(){

    this.nextElementSibling.click();
    
}


upload.nextElementSibling.onchange=function(e){
    for (let file of e.target.files) {
       
        let reader= new FileReader();
        reader.onloadend=function(e){

             let creadiv=document.createElement("div")
             creadiv.className="sekil";
             let img=document.createElement("img")
             img.setAttribute("src",e.target.result)
     
             creadiv.appendChild(img);

            

             let div=document.createElement("div");
             div.className="delete";
             div.innerHTML="delete"
             creadiv.appendChild(div)
 

             container.appendChild(creadiv)

             div.onclick=function(){
                 creadiv.style.display="none"
             }

         

            
        }
        reader.readAsDataURL(file)
    }

}
container.ondragover=function(e){

    e.preventDefault();
}

container.ondrop=function(e){

    e.preventDefault();
    for (let file of e.dataTransfer.files) {
       
        let reader= new FileReader();
        reader.onloadend=function(e){

             let creadiv=document.createElement("div")
             creadiv.className="sekil";
             let img=document.createElement("img")
             img.setAttribute("src",e.target.result)
     
             creadiv.appendChild(img);

            

             let div=document.createElement("div");
             div.className="delete";
             div.innerHTML="delete"
             creadiv.appendChild(div)
 

             container.appendChild(creadiv)

             div.onclick=function(){
                 creadiv.style.display="none"
             }

         

            
        }
        reader.readAsDataURL(file)
    }

}
