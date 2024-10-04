console.log("Welcome to spotify");
let songIndex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif')
let mastersongname=document.getElementById('mastersongname')
let songItems= Array.from(document.getElementsByClassName('songitem'));
    let songs = [
        {songName: "Warriyo-mortals", filePath: '1.mp3', coverPath: "1.jpg"},
        {songName: "cielo", filePath: '2.mp3', coverPath: "2.jpg"},
        {songName: "Deaf kev", filePath: '3.mp3', coverPath: "3.jpg"},
        {songName: "Different neaven", filePath: '4.mp3', coverPath: "4.jpg"},
        {songName: "janji-heroes", filePath: '5.mp3', coverPath: "5.jpg"},
        {songName: "hello", filePath: '6.mp3', coverPath: "6.jpg"},
        {songName: "rabba", filePath: '7.mp3', coverPath: "7.jpg"},
        {songName: "bhula dena", filePath: '8.mp3', coverPath: "8.jpg"},
        {songName: "Love you", filePath: '9.mp3', coverPath: "9.jpg"},
        {songName: "honey", filePath: '9.mp3', coverPath: "10.jpg"}
    ];
    songItems.forEach((element,i)=>{
        element.getElementsByTagName('img')[0].src=songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    })


//handle play pause click
masterplay.addEventListener("click",()=>{
    if(audioelement.paused||audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})

//listen to events
audioelement.addEventListener('timeupdate',()=>{
//update seekebar
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogressbar.value=progress;
})
myprogressbar.addEventListener("change",()=>{
  audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); // Removed leading space
    });
};


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
 makeAllplays();
 songIndex=parseInt(e.target.id);
 e.target.classList.remove('fa-circle-play')
 e.target.classList.add('fa-circle-pause');
 audioelement.src=`${songIndex+1}.mp3`;
 mastersongname.innerHTML=songs[songIndex].songName;
 audioelement.currentTime=0;
 audioelement.play();
 gif.style.opacity=1;
 masterplay.classList.remove('fa-circle-play')
 masterplay.classList.add('fa-circle-pause')
})

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1
    }
    
 audioelement.src=`${songIndex+1}.mp3`;
 mastersongname.innerHTML=songs[songIndex].songName

 audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-circle-play')
 masterplay.classList.add('fa-circle-pause')
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1
    }
 audioelement.src=`${songIndex+1}.mp3`;
 mastersongname.innerHTML=songs[songIndex].songName
 audioelement.currentTime=0;
 audioelement.play();
 masterplay.classList.remove('fa-circle-play')
 masterplay.classList.add('fa-circle-pause')
})