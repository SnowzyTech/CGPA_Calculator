const addbtn = document.getElementById('add');
const couserCode = document.getElementById('course-code');
const courseUnit = document.getElementById('course-unit');
const grade = document.getElementById('grade');
const tbody = document.getElementById("tbody");
const table = document.getElementById("table");
const tfoot = document.getElementById("tfoot");
const clear = document.getElementById('clear');
var num = 0
let GpArray = [];

addbtn.addEventListener('click',()=>{
  console.log(num)
    if(couserCode.value === '' || courseUnit.value <= 0 || grade.selectedIndex === 0) {
        alert("Wrong Input Check And Try Again")
        // num = 0
    }else if(num>=15){
         alert('not more than 15 courses')
    } else {
  num ++
        const tr = document.createElement('tr');
   const tdCourseCode = document.createElement('td');
   const tdunitLoad = document.createElement('td');
   const tdGrade = document.createElement('td');
tdCourseCode.innerHTML = couserCode.value;
tdunitLoad.innerHTML = courseUnit.value;
tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
tr.appendChild(tdCourseCode);
tr.appendChild(tdunitLoad);
tr.appendChild(tdGrade);
tbody.appendChild(tr)
table.classList.remove("display-none")
GpArray.push({'unitLoad': courseUnit.value, 'grade': grade.options[grade.selectedIndex].value})//getting user data
// clea up
couserCode.value=''
courseUnit.value=''
grade.selectedIndex='0'
clear.classList.remove("display-none");
let unitLoads = 0, productOfUnitLoadsAndGrades = 0, sumOfUnitsLoadsAndGrades = 0;

//calculating result
GpArray.forEach(result => {
    unitLoads += parseInt(result.unitLoad);
    productOfUnitLoadsAndGrades = parseInt(result.unitLoad) * parseInt(result.grade);
    sumOfUnitsLoadsAndGrades += productOfUnitLoadsAndGrades;
});

// adding table foot data
const tr2 = document.createElement('tr');
tdTUL = document.createElement("td");
tdTUL.innerHTML = `Total Unit Load : ${unitLoads}`;
tdGpa= document.createElement("td");
tdGpa.setAttribute('colspan', 2);
tdGpa.innerHTML = ` GPA : ${(sumOfUnitsLoadsAndGrades / unitLoads).toFixed(2)}`;
tr2.appendChild(tdTUL);
tr2.appendChild(tdGpa);
tfoot.innerHTML = ''
tfoot.appendChild(tr2);
}
})

// clearBtn
clear.addEventListener('click',()=>{
   GpArray=[];
   num=0
   tbody.querySelectorAll('*').forEach(child=> child.remove());
   if(tfoot.querySelector('tr') !== null ) {
    tfoot.querySelector('tr').remove();
   }
   table.classList.add('display-none');
   clear.classList.add('display-none');
   

})



//  AVERGAE CGPA CALCULATOR SECTION


const addbtn2 = document.getElementById('add2');
// const couserCode = document.getElementById('course-code');
const courseUnit2 = document.getElementById('course-unit2');
// const grade = document.getElementById('grade');
const tbody2 = document.getElementById("tbody2");
const table2 = document.getElementById("table2");
const tfoot2 = document.getElementById("tfoot2");
// const calculateGp = document.getElementById('calc-gp');
const clear2 = document.getElementById('clear2')
var num = 0
let GpArray2 = [];

addbtn2.addEventListener('click',()=>{
  console.log(num)
    if(courseUnit2.value <= 0) {
        alert("Wrong Input Check And Try Again")
        // num = 0
    }else if(num>=10){
         alert('not more than 10 semesters')
    } else {
  num ++
        const tr = document.createElement('tr');
  //  const tdCourseCode = document.createElement('td');
   const tdunitLoad2 = document.createElement('td');
  //  const tdGrade = document.createElement('td');
// tdCourseCode.innerHTML = couserCode.value;
tdunitLoad2.innerHTML = courseUnit2.value;
// tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
// tr.appendChild(tdCourseCode); 
tr.appendChild(tdunitLoad2);
// tr.appendChild(tdGrade);
tbody2.appendChild(tr)
table2.classList.remove("display-none")
GpArray2.push({'unitLoad': courseUnit2.value})//getting user data
// clea up
// couserCode.value=''
courseUnit2.value=''
// grade.selectedIndex='0'
clear2.classList.remove("display-none");
let unitLoads2 = 0, productOfUnitLoadsAndGrades2 = 0, sumOfUnitsLoadsAndGrades2 = 0;

//calculating result
GpArray2.forEach(result => {
  arrL = GpArray2.length
    unitLoads2 += parseFloat(result.unitLoad);
    // productOfUnitLoadsAndGrades = parseInt(result.unitLoad) * parseInt(result.grade);
    // sumOfUnitsLoadsAndGrades += productOfUnitLoadsAndGrades;
});

// adding table foot data
const tr3 = document.createElement('tr');

tdTUL2 = document.createElement("td");
tdTUL2.innerHTML = ` GPA : ${(unitLoads2 / arrL).toFixed(2)}`;
// tdGpa= document.createElement("td");
// tdGpa.setAttribute('colspan', 1);
// tdGpa.innerHTML = ` GPA : ${(unitLoads / arrL).toFixed(2)}`;
tr3.appendChild(tdTUL2);
// tr2.appendChild(tdGpa);
tfoot2.innerHTML = ''
tfoot2.appendChild(tr3);
}
})

// clearBtn
clear2.addEventListener('click',()=>{
   GpArray2=[];
   num=0
   tbody2.querySelectorAll('*').forEach(child=> child.remove());
   if(tfoot2.querySelector('tr') !== null ) {
    tfoot2.querySelector('tr').remove();
   }
   table2.classList.add('display-none');
   clear2.classList.add('display-none');
   

})


const lineSection = document.querySelector('.line1')
const lineSection2 = document.querySelector('.line2')
const wrapper1 = document.querySelector('.wrapper')
const wrapper2sec = document.querySelector('.wrapper2')
const h1 = document.querySelector('.h1')
lineSection2.addEventListener('click', () => {
       wrapper2sec.style.display = 'block'
       wrapper1.style.display = 'none'
       wrapper2sec.classList.add('animate')
       wrapper1.classList.remove('animate')
       h1.style.paddingTop = '20px'
      //  wrapper2sec.style.marginTop = '10px'

})

lineSection.addEventListener('click', () => {
  wrapper2sec.style.display = 'none'
  wrapper1.style.display = 'block'
  wrapper1.classList.add('animate')
  wrapper2sec.classList.remove('animate')

})



