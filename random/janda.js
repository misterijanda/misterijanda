var pages = [ 

"https://carijandaonline.blogspot.com",
"https://jandacantikkaya.blogspot.com",
"https://jandamudaseksi.blogspot.com",
"https://jutaanjanda.blogspot.com",
"https://sijandakembang.blogspot.com",
"https://surgajanda.blogspot.com",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 
