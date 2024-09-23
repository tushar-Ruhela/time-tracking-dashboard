let dailyBtn = document.getElementById("day");
let weekBtn = document.getElementById("week");
let monthBtn = document.getElementById("month");
let workCard = document.getElementById("work");
let playCard = document.getElementById("play");
let studyCard = document.getElementById("study");
let exerciseCard = document.getElementById("exercise");
let socialCard = document.getElementById("social");
let selfCard = document.getElementById("selfcare");


async function timechange(time) {
  const data = await fetch("./data.json");
  const res = await data.json();
  console.log(res);

  const currentTime = workCard.children[0]; 
  const previousTime = workCard.children[1];
  currentTime.innerHTML = res[0].timeframes[time].current + "hrs";
  previousTime.innerHTML = `${time === 'daily' ? 'yesterday'  : time === 'weekly' ? 'last week' : 'last month'} =` +res[0].timeframes[time].previous + "hrs";


  const currentTime_1 = playCard.children[0]; 
  const previousTime_1 = playCard.children[1];
  currentTime_1.innerHTML = res[1].timeframes[time].current + "hrs";
   previousTime_1.innerHTML = `${time === 'daily' ? 'yesterday' : time === 'weekly' ? 'last week' : 'last month'} =` +res[1].timeframes[time].previous + "hrs"

const currentTime_2 = studyCard.children[0]; 
  const previousTime_2 = studyCard.children[1];
  currentTime_2.innerHTML = res[2].timeframes[time].current + "hrs";
  previousTime_2.innerHTML = `${time === 'daily' ? 'yesterday' : time === 'weekly' ? 'last week' : 'last month'} =` +res[2].timeframes[time].previous + "hrs"

const currentTime_3 = exerciseCard.children[0]; 
  const previousTime_3 = exerciseCard.children[1];
  currentTime_3.innerHTML = res[3].timeframes[time].current + "hrs";
  previousTime_3.innerHTML = `${time === 'daily' ? 'yesterday' : time === 'weekly' ? 'last week' : 'last month'} =` +res[3].timeframes[time].previous + "hrs"

  const currentTime_4 = socialCard.children[0]; 
  const previousTime_4 = socialCard.children[1];
  currentTime_4.innerHTML = res[4].timeframes[time].current + "hrs";
  previousTime_4.innerHTML = `${time === 'daily' ? 'yesterday' : time === 'weekly' ? 'last week' : 'last month'} =` +res[4].timeframes[time].previous + "hrs"


  const currentTime_5 = selfCard.children[0]; 
  const previousTime_5 = selfCard.children[1];
  currentTime_5.innerHTML = res[5].timeframes[time].current + "hrs";
  previousTime_5.innerHTML = `${time === 'daily' ? 'yesterday' : time === 'weekly' ? 'last week' : 'last month'} =` +res[5].timeframes[time].previous + "hrs"

  if(time==='daily'){
    dailyBtn.style.textDecoration="underline";
    dailyBtn.style.color="hsl(236, 100%, 87%)";
    weekBtn.style.color="white";
    monthBtn.style.color="white";
    weekBtn.style.textDecoration="none";
    monthBtn.style.textDecoration="none";
  }
  else if(time==='weekly'){
    dailyBtn.style.textDecoration="none";
    weekBtn.style.textDecoration="underline";
    weekBtn.style.color="hsl(236, 100%, 87%)";
    monthBtn.style.textDecoration="none";
    dailyBtn.style.color="white";
    monthBtn.style.color="white";

  }
  else if(time==='monthly'){
    dailyBtn.style.textDecoration="none";
    weekBtn.style.textDecoration="none";
    monthBtn.style.textDecoration="underline";
    monthBtn.style.color="hsl(236, 100%, 87%)";
    weekBtn.style.color="white";
    dailyBtn.style.color="white";
  }
}


dailyBtn.addEventListener("click", ()=>timechange("daily"));

weekBtn.addEventListener("click", ()=>timechange("weekly"));

monthBtn.addEventListener("click", ()=>timechange("monthly"));
