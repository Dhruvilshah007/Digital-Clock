let a;
  let date;
  let time;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  setInterval(()=> {
  a=new Date();

  time=a.getHours() + ':' + a.getMinutes()+ ':' + a.getSeconds();
  date=a.toLocaleDateString(undefined,options);
  document.getElementById('time').innerHTML=time + " <br>on " + date;

},1000);