/*
// self.addEventListener("install",(event)=>{

//     console.log("service worker installed!!!!!");
//     // self.skipWaiting()
//     event.waitUntil( 
//         caches.open("simpleApp-1").then(cache=>{
//            return cache.addAll(["index.html","styles/index.css","js/main.js","other.html","styles/other.css","js/other.js"])
//         }).catch(err=>console.log("cache error",err))
//      )
// })


// self.addEventListener("activate",()=>{
//     console.log("service worker activate!!!!!");
// })

// self.addEventListener("fetch",(event)=>{
//     console.log("Network request :",event.request.url);
//     event.respondWith(
//         caches.match(event.request).then((file)=>{
//             if(file){
//                 console.log("Found in cache",event.request.url);
//                 return file
//             }
//             console.log("Network request :",event.request.url);
//            return fetch(event.request.url)

//         }).catch(err=>console.log(err))
//     )

// })
*/

//My Solution:

self.addEventListener('install', function(e){
    //console.log('install is done.');
    self.skipWaiting();
    e.waitUntil(
        caches.open('fileName').then(cache => {
            return cache.addAll(['/','index.html', 'styles/index.css', 'js/main.js'])
        })
    )
});

self.addEventListener('activate', function(){
    //console.log('active is done.');
});

self.addEventListener('fetch', function(e){
    console.log(`Request: ${e.request.url}`);
    e.respondWith(caches.match(e.request.url).then(file => {
        if(file){
            console.log(`File in cache ${e.request.url}`);
            return file;
        }else{
            console.log(`File not in cache ${e.request.url}`);
            return fetch(e.request.url);
        }
    }));
})