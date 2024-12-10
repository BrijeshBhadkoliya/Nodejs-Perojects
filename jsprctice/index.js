let record = [];

const viewRecord = () => {
  document.getElementById('edit').style.display = "none";
  document.getElementById('add').style.display = "block";

  let alldata = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  let tbl = "";
  alldata.map((item, i) => {
    tbl += `
            <tr>
                <td>${++i}</td>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>
                    <button onclick="deleteRecord(${item.userid})">Delete</button> ||
                    <button onclick="editRecord(${item.userid})">Edit</button>
                </td>
            </tr>
        `;
  });
  document.getElementById("users").innerHTML = tbl;
};
viewRecord();

const saveRecord = () => {
  let username = document.getElementById("name").value;
  let userphone = document.getElementById("phone").value;
  let editid = document.getElementById("editid").value;

  let obj = {
    userid: Math.floor(Math.random() * 10000),
    name: username,
    phone: userphone,
  };
  
  if(editid){
    document.getElementById('edit').style.display = "none";
    let alldata = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    
      let up = alldata.map((val)=>{
          if(val.userid == editid){
            val.name = username;
            val.phone = userphone
          }
          return val;
      })

      localStorage.setItem('users',JSON.stringify(up));
      alert("record update");
      viewRecord();
      document.getElementById('editid').value = "";
  }else{
    if (
      localStorage.getItem("users") === null ||
      localStorage.getItem("users") === undefined
    ) {
      record.push(obj);
      localStorage.setItem("users", JSON.stringify(record));
      alert("Record add");
      viewRecord();
    }else{
      let alldata = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
      alldata.push(obj);
      localStorage.setItem('users',JSON.stringify(alldata));
      alert("record add");
      viewRecord();
    }
  }

  

  
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
};

const deleteRecord = (id) => {
  let alldata = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  
    let d = alldata.filter(val => val.userid != id)
    localStorage.setItem('users',JSON.stringify(d));
    alert("record delete");
    viewRecord();
}

const editRecord = (id) => {
  document.getElementById('add').style.display = "none"
  document.getElementById('edit').style.display = "block"

  let alldata = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

  let single = alldata.find(val => val.userid == id);
  document.getElementById('name').value = single.name
  document.getElementById('phone').value = single.phone
  document.getElementById('editid').value = single.userid


  
}

