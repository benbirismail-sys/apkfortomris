// Native alarms via Capacitor Local Notifications (no-op in a normal browser).
(function(){
  const LN = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications;
  if(!LN) return;
  let id = Date.now() % 1000000;
  document.addEventListener('click', async e=>{
    const el = e.target.closest('.al'); if(!el || el.id==='sy') return;
    const title = (el.closest('.row,.g')||{}).innerText||'Tomris';
    const v = prompt('Alarm saati (SS:DD)', '09:00'); if(!v) return;
    const [h,m] = v.split(':').map(Number); if(isNaN(h)||isNaN(m)) return;
    const perm = await LN.requestPermissions(); if(perm.display!=='granted') return;
    const at = new Date(); at.setHours(h,m,0,0); if(at<=new Date()) at.setDate(at.getDate()+1);
    await LN.schedule({notifications:[{id:++id,title:'Tomris',body:title.split('\n')[0],
      schedule:{at,allowWhileIdle:true},channelId:'tomris'}]});
    el.textContent = '⏰ '+v;
  });
  LN.createChannel && LN.createChannel({id:'tomris',name:'Tomris Hatırlatıcılar',importance:5,visibility:1,vibration:true});
})();
