"use strict";var precacheConfig=[["/taopp/index.html","e1de22f6e802babe8e09413e04206f0c"],["/taopp/static/css/main.b07d2d19.css","d52c48d7561eb849d038be5fc3907404"],["/taopp/static/js/main.963841f4.js","495e033af152b10d8a7e859b26a788ab"],["/taopp/static/media/arrow-r.57e4ebeb.svg","57e4ebeb0ce802d1be62b9ddfc812376"],["/taopp/static/media/back-black.395294e0.svg","395294e051947ce07c7bccb02019cc44"],["/taopp/static/media/back.4ea269b1.svg","4ea269b1de8507c812252ea1acf0fdd6"],["/taopp/static/media/heart.88c530fb.svg","88c530fb685eb877e5d2ab19b28fa136"],["/taopp/static/media/message.f973a2f1.svg","f973a2f11cbc5dce08614bf08f39d0b5"],["/taopp/static/media/scan.3220df66.svg","3220df66cd21d234fd016392f0b357e9"],["/taopp/static/media/seats.a9487fdb.svg","a9487fdbc6196ca819606de1f1a1b6d8"],["/taopp/static/media/setting.82051390.svg","82051390e31c4c14d89beaf8946f58d8"],["/taopp/static/media/share-black.6ca2192e.svg","6ca2192eda47df80fcbddc1d7ebfe7bf"],["/taopp/static/media/share.6fdeeb03.svg","6fdeeb03ecb14be56e20bbfbb151b806"],["/taopp/static/media/star-o.46d07c39.svg","46d07c394dd7c35fa96ba8fbaaf4a620"],["/taopp/static/media/star.9354869d.svg","9354869d7c3a7e3882805f1c1cc58a43"],["/taopp/static/media/zan-o.e76a3e77.svg","e76a3e77cbe5d3ef5b44c974f7e252d0"],["/taopp/static/media/zan-solid.f993be53.svg","f993be5368644a078033dcb313c0091e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
