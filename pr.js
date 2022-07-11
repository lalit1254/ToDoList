function update(){
    console.log("updating list...");
        tit = document.getElementById('title').value;
        desc=document.getElementById('description').value;

        if (localStorage.getItem('itemsJson')==null){
            itemJsonArray=[];
            itemJsonArray.push([tit,desc]);
            localStorage.setItem('itemsJSon', JSON.stringify(itemJsonArray))
        }
        else{
          itemJsonArrayStr = localStorage.getItem('itemsJSON')
          itemJsonArray= JSON.parse(itemJsonArrayStr);
          itemJsonArray.push([tit,desc]);
          localstorage,setItem('itemsJson', JSON.stringify(itemJsonArray))


       }

      //populate the Table

      let tableBody = document.getElementById("tableBody");
       let str = "";
      itemJsonArray.forEach((element, index ) => {
              str += `
          <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
          </tr>`
               });
               tableBody.innerHTML=str;

    
   }
    add=document.getElementById("add");
    add.addEventListener("click",update);
    update();
    function deleted(itemIndex){
      console.log("Delete",itemIndex);
      itemJsonArray = localStorage.getItem('itemsJSON')
          itemJsonArray= JSON.parse(itemJsonArrayStr);
          itemJsonArray.splice(itemIndex,1);
          localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
          update();
    }