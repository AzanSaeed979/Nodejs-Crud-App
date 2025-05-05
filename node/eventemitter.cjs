const Event = require('events');
const { emit } = require('process');

const motorkaevent  = new Event();
const bikekaevent = new Event();

motorkaevent.on('motor', (shuru , akhir ) => {
  console.log(`started from ${shuru} to ${akhir}`);
  // jab sara kch run hoga tub run hoga
  setTimeout(()=>{
    console.log("jaldi kr ........")
  },3600)
});

bikekaevent.on('bike', (shuru , akhir ) => {
  console.log(`started from ${shuru} to ${akhir}`);
  // jab sara kch run hoga tub run hoga
  setTimeout(()=>{
    console.log("jaldi kr ........")
  },3600)
});
bikekaevent.emit('bike','1km  ', '2km ');
motorkaevent.emit('motor','1bjy  ', '2 bjy ');



