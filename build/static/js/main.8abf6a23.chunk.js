(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],[,,,,,,,,,,function(A,e,c){},function(A,e,c){},function(A,e,c){},,function(A,e,c){},function(A,e,c){},function(A,e,c){},function(A,e,c){},function(A,e,c){},function(A,e,c){},function(A,e,c){"use strict";c.r(e);var a=c(2),t=c(4),i=c.n(t),s=(c(10),c(11),c(5)),n=c(1),r=c.n(n),o=[{id:0,type:"Home",info:["Patrick Grady","Full Stack Developer"]},{id:1,type:"Languages",area:"Back End",info:["Node","Rails","Sinatra","Django","Flask"]},{id:2,type:"Languages",area:"Front End",info:["Javascript","JQuery","React","Angular","Vue"]},{id:3,type:"Project",idName:"Mini",name:"MiniJs",briefDesc:"A list of mini javascript projects",fullDescription:"These vanilla javascript projects are little projects \nshowing off basic HTML, javascript and css",languages:["HTML","CSS","Javascript"],demoBack:null,demoFront:"https://patrickrgrady81.github.io/MiniJS/",back:null,front:"https://github.com/patrickrgrady81/MiniJS",image:"MiniJs"},{id:4,type:"Project",idName:"Recipe",name:"Recipe Revamp",briefDesc:"Recipes App",fullDescription:"Search allrecipes.com or create your own recipe. Then save and edit them in your profile",languages:["Sinatra"],demoBack:"https://reciperevamp.herokuapp.com/users/pat",demoFront:null,back:"https://github.com/patrickrgrady81/Sinatra-App",front:null,image:"RecipeRevamp.png"},{id:5,type:"Project",idName:"Novel",name:"Novel Ideas",briefDesc:"Book App",fullDescription:"Search , save, and chat about books. Save books to your profile for later viewing. See descriptions of books. Use the built in forums to discuss, share and review books.",languages:["Ruby on Rails"],demoBack:"https://novel-ideas.herokuapp.com/",demoFront:null,back:"https://github.com/patrickrgrady81/novel-ideas",front:null,image:"NovelIdeas.png"},{id:6,type:"Project",idName:"Snake",name:"PaddySnake",briefDesc:"Snake Game",fullDescription:"Classic Snake game with a few tweaks. Play with your friends to see who can get the highest score. There is a scoreboard to keep track of all the high scores",languages:["Ruby on Rails","Javascript"],demoBack:"https://paddysnake.herokuapp.com/",demoFront:"https://patrickrgrady81.github.io/Snake/",back:"https://github.com/patrickrgrady81/Peeker-back",front:"https://github.com/patrickrgrady81/Snake",image:"PaddySnake.png"},{id:7,type:"Project",idName:"Peeker",name:"Peeker",briefDesc:"Video Poker",fullDescription:"Try your luck with this video poker game. Bet up to 5 credits, discard the ones you don't want and try to get the best hand. Good Luck!",languages:["Ruby on Rails","React"],demoBack:"https://pg-peeker.herokuapp.com/",demoFront:"https://patrickrgrady81.github.io/Peeker-front/",back:"https://github.com/patrickrgrady81/Peeker-back",front:"https://github.com/patrickrgrady81/weather",image:"Peeker.png"},{id:8,type:"Project",idName:"Info",name:"City Info",briefDesc:"Get information about any city",fullDescription:"Choose any city in the world. Get weather, food and current events from that city",languages:["Ruby on Rails","React","APIs"],demoBack:"https://pg-city-info.herokuapp.com/",demoFront:"https://patrickrgrady81.github.io/weather/",back:"https://github.com/patrickrgrady81/weather-back",front:"https://github.com/patrickrgrady81/weather",image:"Peeker.png"}],l=(c(12),c.p+"static/media/MiniJs.6ec3eac2.png"),d=c.p+"static/media/RecipeRevamp.ae31812c.png",m=c.p+"static/media/NovelIdeas.7b0d9690.png",j=c.p+"static/media/PaddySnake.da66028e.png",b=c.p+"static/media/Peeker.fbf9aee8.png",g=c.p+"static/media/CityInfo.a1ca01ca.png",h=c(0),p=function(){var A=o.length-1,e=Object(a.useState)(0),c=Object(s.a)(e,2),t=c[0],i=c[1],n=function(e){i(0!==e?e-1:A)},p=function(e){i(e!==A?e+1:0)};switch(o[t].type){case"Home":return Object(h.jsx)("div",{className:"outer",children:Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("div",{className:"previous",onClick:function(){return n(t)},children:"<"}),Object(h.jsxs)("div",{className:"home-card",children:[Object(h.jsx)("h1",{className:".underline",children:o[t].info[0]}),Object(h.jsx)("h3",{children:o[t].info[1]})]}),Object(h.jsx)("div",{className:"next",onClick:function(){return p(t)},children:">"})]})});case"Languages":return Object(h.jsx)("div",{className:"outer",children:Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("div",{className:"previous",onClick:function(){return n(t)},children:"<"}),Object(h.jsxs)("div",{className:"home-card",children:[Object(h.jsx)("h1",{className:"underline",children:o[t].area}),Object(h.jsx)("ul",{children:o[t].info.map((function(A){return Object(h.jsx)("li",{className:"list",children:Object(h.jsx)("h3",{children:A})},r()())}))})]}),Object(h.jsx)("div",{className:"next",onClick:function(){return p(t)},children:">"})]})});case"Project":var u;switch(o[t].id){case 3:u=l;break;case 4:u=d;break;case 5:u=m;break;case 6:u=j;break;case 7:u=b;break;case 8:u=g;break;default:throw new Error("No such image")}return Object(h.jsx)("div",{className:"outer",children:Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("div",{className:"previous",onClick:function(){return n(t)},children:"<"}),Object(h.jsxs)("div",{className:"home-card project-card",children:[Object(h.jsxs)("div",{className:"project-image",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"p1 item underline",children:"Projects"}),Object(h.jsx)("h2",{className:"title",children:o[t].name})]}),Object(h.jsx)("img",{className:"item project-pic",src:u,alt:"MiniJs"})]}),Object(h.jsx)("div",{className:"item bottom",children:o[t].briefDesc}),Object(h.jsx)("a",{className:"item bottom pad",href:"/#".concat(o[t].idName),children:"(Click Here For More Information)"})]}),Object(h.jsx)("div",{className:"next",onClick:function(){return p(t)},children:">"})]})});default:throw new Error("Error: No Such Card")}},u=(c(14),function(){return Object(h.jsx)("div",{className:"carousel-container",id:"Home",children:Object(h.jsx)(p,{})})}),k=(c(15),function(){return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("div",{className:"logo",children:[" ",Object(h.jsx)("a",{href:"https://github.com/patrickrgrady81",children:" Patrick Grady "})]}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)("a",{href:"/#Home",children:"Home"}),Object(h.jsx)("a",{href:"/#Projects",children:"Projects"}),Object(h.jsx)("a",{href:"/#About",children:"About"})]}),Object(h.jsxs)("div",{className:"hamburger",children:[Object(h.jsx)("span",{className:"bar"}),Object(h.jsx)("span",{className:"bar"}),Object(h.jsx)("span",{className:"bar"})]})]})}),w=(c(16),c(17),[null,null,null,null,"https://www.youtube.com/watch?v=bmmeJO4AaBg&t=3s","https://www.youtube.com/watch?v=Ho-NgldkZ7Y&t=2s]","https://www.youtube.com/watch?v=OLrSQ4sMKso&t=2s",null,"https://www.youtube.com/watch?v=vXUJWl9necw"]),f=function(A){return Object(h.jsxs)("div",{className:"individual",id:A.info.idName,children:[Object(h.jsxs)("div",{className:"name-desc",children:[Object(h.jsx)("div",{className:"name underline",children:A.info.name}),Object(h.jsx)("div",{className:"desc",children:A.info.fullDescription})]}),0!==A.info.id&&1!==A.info.id&&2!==A.info.id&&3!==A.info.id&&7!==A.info.id?Object(h.jsxs)("a",{className:"tooltips_cls",href:w[A.info.id],target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("img",{className:"project-page-image",src:A.image,alt:""}),Object(h.jsx)("span",{children:"Click for Video Demo"})]}):Object(h.jsx)("img",{className:"project-page-image",src:A.image,alt:""}),Object(h.jsxs)("div",{className:"languages",children:[Object(h.jsx)("div",{className:"lang",children:"Languages"}),Object(h.jsx)("ul",{className:"lang-list",children:A.info.languages.map((function(A){return Object(h.jsx)("li",{className:"li",children:A},r()())}))})]}),Object(h.jsxs)("div",{className:"demo-code",children:[Object(h.jsxs)("div",{children:["Start Backend: ",Object(h.jsx)("a",{href:A.info.demoBack,className:"ilinks",children:A.info.demoBack})]}),Object(h.jsxs)("div",{children:["Start Frontend: ",Object(h.jsx)("a",{href:A.info.demoFront,className:"ilinks",children:A.info.demoFront})]}),Object(h.jsxs)("div",{children:["Backend code: ",Object(h.jsx)("a",{href:A.info.back,className:"ilinks",children:A.info.back})]}),Object(h.jsxs)("div",{children:["Backend code: ",Object(h.jsx)("a",{href:A.info.front,className:"ilinks",children:A.info.front})]})]})]})},O=function(){var A=[null,null,null,l,d,m,j,b,g];return Object(h.jsxs)("div",{className:"projects-page",id:"Projects",children:[Object(h.jsx)("div",{className:"note",children:Object(h.jsxs)("div",{className:"message",children:["Note: All backends are hosted on Heroku. ",Object(h.jsx)("br",{}),"Please give the backend up to 30 seconds to load. ",Object(h.jsx)("br",{})," Thank you."]})}),Object(h.jsx)("div",{className:"project-list",children:o.map((function(e){return e.id>2?Object(h.jsx)(f,{info:e,cls:"card".concat(e.id),image:A[e.id]},r()()):null}))})]})},N=(c(18),function(){return Object(h.jsxs)("div",{className:"about about-container",id:"About",children:[Object(h.jsx)("div",{className:"me me-container",children:Object(h.jsxs)("div",{className:"me-item",children:[Object(h.jsx)("p",{children:"I am Patrick Grady"}),Object(h.jsx)("p",{children:"I do Full Stack Web Design"}),Object(h.jsx)("p",{children:"I\u2019m from Pottstown, PA"}),Object(h.jsx)("p",{children:"Active for 3 years"}),Object(h.jsx)("p",{children:"Learning for 20+ years"})]})}),Object(h.jsxs)("div",{className:"ed",children:[Object(h.jsx)("p",{className:"boot",children:"Education: Flatiron Bootcamp "}),Object(h.jsx)("p",{className:"dates",children:"(11/2019 - 7/2021)"})]}),Object(h.jsxs)("form",{className:"my-form",children:[Object(h.jsx)("p",{className:"more-info",children:"Want to know leave a comment"},r()()),Object(h.jsx)("p",{className:"more-info",children:"or know more about me?"},r()()),Object(h.jsx)("input",{type:"text",defaultValue:"Name",placeholder:"Name"},r()()),Object(h.jsx)("input",{type:"text",placeholder:"Company"},r()()),Object(h.jsx)("input",{type:"text",placeholder:"Email"},r()()),Object(h.jsx)("textarea",{placeholder:"Comment",cols:"5",rows:"10"},r()()),Object(h.jsx)("button",{onClick:function(A){A.preventDefault(),console.log("clicked")},children:"Send"},r()())]},r()()),Object(h.jsx)("div",{className:"more more-container",children:"Also a family man with a wife and twin boys. Hobbies besides programming include video games, roller blading, editing videos, reading and writing fiction."})]})}),x=(c(19),c.p+"static/media/Patrick.Grady.012.3d52654f.pdf"),v=function(){return Object(h.jsxs)("div",{className:"myLinks",children:[Object(h.jsx)("a",{href:"https://github.com/patrickrgrady81",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"github",className:"github"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/patgrady64/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"linkedin",className:"linkedin"})}),Object(h.jsx)("span",{onClick:function(){window.open(x)},target:"_blank",children:Object(h.jsx)("div",{className:"resume",rel:"noopener noreferrer",children:"Resume"})})]})};var B=function(){return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)(k,{}),Object(h.jsx)(v,{}),Object(h.jsx)("a",{href:"#Home",children:Object(h.jsx)(u,{})}),Object(h.jsx)("a",{href:"#Projects",children:Object(h.jsx)(O,{})}),Object(h.jsx)("a",{href:"#About",children:Object(h.jsx)(N,{})})]})};i.a.render(Object(h.jsx)(B,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8abf6a23.chunk.js.map