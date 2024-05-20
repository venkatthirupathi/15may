
const tabody = document.getElementById('tabody');
const rno = document.getElementById('rno')
const nam = document.getElementById('name')
const branch = document.getElementById('branch')
const  button = document.getElementById('button');

button.addEventListener('click', async (e) => {
   
    const newrno=rno.value;
    const newname=nam.value;
    const newbranch=branch.value;
    console.log("success") 
    try {
        const response = await axios.post(`http://localhost:3000/students`, {
            "rno":newrno,
            "name":newname,
            "branch":newbranch
        });

        const student = response.data;
 
        addRow(student.id,student.rno,student.name, student.branch);
    
    } catch (error) {
        console.error('Error ', error);
    }
});

async function fetchdata() {
    try {
        const response = await axios.get(`http://localhost:3000/students`);
        const students = response.data;
        console.log("fetched");
        
        students.forEach(student => {
            addRow(student.id,student.rno,student.name,student.branch);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function addRow(id,rno,name,branch) {
    const row = document.createElement('tr');
    const  rnocell= document.createElement('td');
    rnocell.textContent = rno;
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    const branchCell = document.createElement('td');
    branchCell.textContent = branch;
    const eb=document.createElement('button');
    eb.innerHTML='&#9998';
    const db=document.createElement('button');
    db.innerHTML='&#128465';
    eb.addEventListener('click', () => {
        editStudent(id,rno,name,branch);
    });

    db.addEventListener('click', () => {
        deleteStudent(id,rno,name,branch);
    });

    row.appendChild(rnocell);
    row.appendChild(nameCell);
    row.appendChild(branchCell);
    row.appendChild(eb);
    row.appendChild(db);
    tabody.appendChild(row);
}

async function editStudent(id,rno,name,branch) {
   const rollno=prompt("enter the rollno");
    try {
        const response = await axios.patch(`http://localhost:3000/students/${id}`, {
           "rno":rollno,
        });

        const updatedata= response.data;
      

        fetchdata();
    } catch (error) {
        console.error('Error', error);
    }
}

async function deleteStudent(id,rno,name,branch) {
    const rollno = confirm("Enter the roll number to delete:");
    if (true) {
        try {
            await axios.delete(`http://localhost:3000/students/${id}`);
            console.log(`Student with roll number ${rollno} deleted successfully.`);
            fetchdata();
        } catch (error) {
            console.error('Error deleting student: ', error);
        }
    }
}



fetchdata();
