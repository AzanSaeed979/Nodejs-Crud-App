import url from 'url';

const myurl = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(myurl, true);

console.log(q.host);       // 'localhost:8080'
console.log(q.pathname);   // '/default.htm'
console.log(q.search);     // '?year=2017&month=february'

const qdata = q.query;
console.log(qdata.month);  // 'february'


// const urlObject = {
//     protocol: 'http:',
//     host: 'localhost:8080',
//     pathname: '/default.htm',
//     query: { year: 2024, month: 'april' }
//   };
  
//   const formattedUrl = url.format(urlObject);
//   console.log(formattedUrl);
//   // Output: http://localhost:8080/default.htm?year=2024&month=april
  