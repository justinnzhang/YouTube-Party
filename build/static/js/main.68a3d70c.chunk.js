(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{172:function(e,t,a){e.exports=a(275)},195:function(e,t,a){},269:function(e,t){},272:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),s=a.n(o),i=a(99),l=a.n(i),c=a(158),m=a(8),u=a(9),d=a(11),p=a(10),g=(a(67),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.change=function(t){e.setState({term:t.target.value})},e.submit=function(t){t.preventDefault(),e.props.Search(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"style"},r.a.createElement("form",{onSubmit:this.submit,className:"ui form rounded"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search by Title/URL"),r.a.createElement("input",{onChange:this.change,value:this.state.term,type:"text"}))))}}]),a}(r.a.Component)),f=a(159),h=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),v=(a(195),function(e){var t=e.vid,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"  ",t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(v,{vid:e,onVideoSelect:a})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)},b=a(160),y=a(288),S=a(290),w=(r.a.Component,function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={id:0,player:[],duration:0},e.internalChange=!1,e.started=!1,e.newMemberPause=!1,e.internalStart=1,e.videochange=function(t){3==t.target.playerInfo.playerState&&0==e.started&&(e.props.play(t.target.playerInfo.currentTime,e.state.id),e.started=!0,e.messageSent=!0,e.internalStart=0)},e.onPlay=function(t){!1===e.internalChange&&1==e.started&&1==e.internalStart?e.props.play(t.target.playerInfo.currentTime,e.state.id):(0==e.internalStart&&(e.internalStart=1),0==e.started&&(e.started=!0),!0===e.internalChange&&(e.internalChange=!1))},e.onPause=function(t){!1===e.internalChange&&1==e.started&&1==e.internalStart?(console.log("This should not be seen, in the other window"),e.props.pause(e.state.id)):(0==e.internalStart&&(e.internalStart=1),0==e.started&&(e.started=!0),1==e.newMemberPause&&(e.newMemberPause=!1),!0===e.internalChange&&(e.internalChange=!1))},e.componentWillReceiveProps=function(t){null!=e.props.video&&e.props.video.id.videoId!=t.video.id.videoId&&(e.started=!1),console.log(t.nPause),null!=e.state.player[0]&&1==t.nPause&&-1!=e.state.player[0].playerInfo.playerState&&null!=e.state.player[0]&&(e.props.StateReset(),e.internalChange=!0,console.log("IT HAS BEEN PAUSED: nPause == 1"),e.state.player[0].pauseVideo(),e.props.reset(e.state.player[0].getCurrentTime()),e.props.Reset()),null!=e.state.player[0]&&(e.internalChange=!0,1==t.joined?(console.log(""),e.props.joinedReset(),e.state.player[0].seekTo(t.time).pauseVideo(),e.started=!0):"PLAY"==t.PlayerState?(console.log("It got here... it played even when a new member joined"),e.props.StateReset(),e.state.player[0].seekTo(t.time).playVideo()):"PAUSE"==t.PlayerState&&(console.log("It got here... it played even when a new member joined"),e.props.StateReset(),e.state.player[0].pauseVideo()))},e.Ready=function(t){var a=e.state.player;a.push(t.target),e.setState({player:a,duration:a[0].getDuration(),id:e.props.id}),console.log("Ready: Video-Detail -> This should come second"),e.props.loaded()},e}return Object(u.a)(a,[{key:"render",value:function(){return null==this.props.video?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement(b.a,{onStateChange:this.videochange,onPlay:this.onPlay,onPause:this.onPause,onReady:this.Ready,videoId:this.props.video.id.videoId,opts:{height:"390",width:"640",playerVars:{enablejsapi:1}}}),";"),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},this.props.video.snippet.title),r.a.createElement("p",null,this.props.video.snippet.description)))}}]),a}(r.a.Component)),j=a(100),N=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("a",{className:"avatar"},r.a.createElement(j.a,{size:"40",color:j.a.getRandomColor("sitebase",["red","green","blue"]),name:e.name})),r.a.createElement("div",{className:"content"},r.a.createElement("a",{className:"author"}," ",e.name,"    "),r.a.createElement("div",{class:"metadata"},r.a.createElement("div",{className:"Date"},e.time)),r.a.createElement("div",{class:"text"},e.content)))},P=a(166),C=a.n(P),T=(r.a.Component,a(272),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={term:""},e.change=function(t){e.setState({term:t.target.value})},e.submit=function(t){t.preventDefault(),e.props.enter(e.state.term)},e.submitName=function(t){t.preventDefault(),e.props.nameSubmission(e.state.term)},e.createRoom=function(){e.props.createRoom()},e.determineRender=function(){return null==e.props.roomStatus?r.a.createElement("div",{class:"ui middle aligned center aligned grid"},r.a.createElement("div",{class:"column log"},r.a.createElement("h2",{class:"ui image header"},r.a.createElement("div",{class:"content"},"YouTube Party!")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://img.icons8.com/clouds/150/000000/youtube-play.png"}),r.a.createElement("div",{className:"search-bar"},r.a.createElement("form",{onSubmit:e.submit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{class:"ui left icon input"},r.a.createElement("i",{class:"terminal icon"}),r.a.createElement("input",{id:"searchid",onChange:e.change,value:e.state.term,type:"text",placeholder:"Enter Code"})))))),r.a.createElement("div",{style:{marginTop:"10px"},onClick:e.submit,class:"ui fluid large red submit button"},"Join Session"),r.a.createElement("div",{style:{marginTop:"10px"},onClick:e.createRoom,class:"ui fluid large white submit button"},"Create Session"))):r.a.createElement("div",{class:"ui middle aligned center aligned grid"},r.a.createElement("div",{class:"column log"},r.a.createElement("h2",{class:"ui image header"},r.a.createElement("div",{class:"content"},"YouTube Party!")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://img.icons8.com/clouds/150/000000/youtube-play.png"}),r.a.createElement("div",{className:"search-bar"},r.a.createElement("form",{onSubmit:e.submitName,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{class:"ui left icon input"},r.a.createElement("i",{class:"user icon"}),r.a.createElement("input",{onChange:e.change,value:e.state.term,type:"text",placeholder:"Enter Name"})))))),r.a.createElement("div",{style:{marginTop:"10px"},onClick:e.submitName,class:"ui fluid large green submit button"},"Continue!")))},e}return Object(u.a)(a,[{key:"render",value:function(){return this.determineRender()}}]),a}(r.a.Component)),R=function(e){var t=e.msglist.map((function(e){if(console.log(e),null!=e)return r.a.createElement(N,{content:"joined",name:e})}));return r.a.createElement("div",{className:"ui comments"}," ",t)},O=a(66),x=(a(273),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentWillReceiveProps=function(e){null!=e&&null!=e.newText&&""!=e.newText&&""!=e.newText&&Object(O.addResponseMessage)(e.newText)},e.handleNewUserMessage=function(t){console.log("New message incomig! ".concat(t)),e.props.text(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){Object(O.addResponseMessage)("Welcome to this awesome chat!")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.Widget,{handleNewUserMessage:this.handleNewUserMessage,title:"Welcome to the Chat!",subtitle:"Have Fun!"}))}}]),a}(n.Component)),M=a(169),k=a(168),V=a(167),A={type:"spring",damping:20,stiffness:300},I=["#f70d1a","#ff726f","#ffc0cb","#ffcccb "],D=function(){var e=Object(n.useState)(I),t=Object(M.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout((function(){return r(Object(V.shuffle)(a))}),1e3)}),[a]),n.createElement("ul",null,a.map((function(e){return n.createElement(k.a.li,{key:e,layoutTransition:A,style:{background:e}})})))},U=C()("https://agile-mountain-68964.herokuapp.com/"),Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={videos:[],selectedVideo:null,data:null,socketId:null,id:Math.floor(1e5*Math.random()),members:[],messages:[],newTime:0,time:0,onChange:-1,PlayerState:"",target:[],room:null,loaded:!1,error:0,newMessage:null,newMemberPause:0,name:null},e.joined=!1,e.called=!1,e.loaded=function(){e.setState({loaded:!0}),console.log("This loaded:"),1==e.called&&(console.log("This loaded: this.state.joined == true"),U.emit("newMemberPause",e.state.room),e.called=!1)},e.send=function(t){U.emit("change color",t,e.state.room)},e.EmitSearch=function(t){U.emit("search",t,e.state.room)},e.componentWillMount=function(){U.on("change color",(function(t){e.setState({messages:t})})),U.on("search",(function(t){e.setState({videos:t.data.items,selectedVideo:t.data.items[0]})})),U.on("select",(function(t){e.setState({selectedVideo:t})})),U.on("play",(function(t,a){console.log("From APP.js: Play will now setState"),e.setState({time:t,PlayerState:"PLAY",id:a})})),U.on("pause",(function(t){e.setState({PlayerState:"PAUSE",id:t})})),U.on("memberTime",(function(t){1==e.state.joined&&(console.log(t),e.setState({time:t}))})),U.on("newTime",(function(t){e.setState({newTime:t})})),U.on("onChange",(function(t){e.setState({onChange:t})})),U.on("newMemberPause",(function(){e.setState({newMemberPause:1})})),U.on("n",(function(t){e.state.selectedVideo!=t&&(e.setState({selectedVideo:t}),console.log("n: setting joined:true, this should come first"),e.joined=!0)})),U.on("newMember",(function(t){null!=e.state.selectedVideo&&e.newMemberVideo(),console.log(t),e.setState({members:t})})),U.on("remove",(function(t){console.log(t),e.setState({members:t})})),U.on("text",(function(t){console.log(t),e.setState({newMessage:String(t)})})),U.on("enter",(function(t,a){"FAIL"!=t?(e.setState({room:t}),e.setState({socketId:a})):(console.log("The code you have entered does not exist in the data base, please try again"),e.setState({error:1}),document.getElementById("searchid").style.borderColor="red")}))},e.newMemberVideo=function(){console.log(e.state.room),U.emit("n",e.state.selectedVideo,e.state.room)},e.sendMessage=function(t){var a=e.state.messages;a.push(t),e.send(a)},e.pressPlay=function(t,a){U.emit("play",t,a,e.state.room)},e.pressPause=function(t){U.emit("pause",t,e.state.room)},e.newTime=function(t){U.emit("newTime",t,e.state.room)},e.Reset=function(){e.setState({newMemberPause:0})},e.search=function(){var t=Object(c.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:5,key:"AIzaSyBSAzBSy4bhfG8JaCmptEDdreLpQXdAAbQ"}});case 2:n=t.sent,console.log(n),e.EmitSearch(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.enter=function(e){console.log(e),U.emit("enter",e)},e.nameSubmission=function(t){e.setState({name:t}),U.emit("newMember",t,e.state.socketId,e.state.room)},e.onChange=function(t){U.emit("onChange",t,e.state.room)},e.reset=function(t){U.emit("memberTime",t,e.state.room)},e.StateReset=function(){e.setState({PlayerState:""})},e.createRoom=function(){console.log("Ive been clic"),U.emit("createRoom")},e.onVideoSelect=function(t){U.emit("select",t,e.state.room)},e.close=function(){e.setState({error:0})},e.Header=function(){return r.a.createElement("div",{class:"ui fixed inverted menu red"},r.a.createElement("left",null,r.a.createElement("div",{class:"ui container"},r.a.createElement("a",{href:"#",class:"header item"}),r.a.createElement("img",{src:"https://img.icons8.com/clouds/150/000000/youtube-play.png"}),"YouTube Party!")))},e.ErrMsg=function(){return r.a.createElement("div",{class:"ui negative message"},r.a.createElement("i",{onClick:e.close,class:"close icon"}),r.a.createElement("div",{class:"header"},"Invalid room code!"),r.a.createElement("p",null,"Try again, or create new session."))},e.Footer=function(){return r.a.createElement("div",{class:"ui red inverted vertical footer segment form-page"},r.a.createElement("div",{class:"ui container"},r.a.createElement("left",null," YouTube Party by David George")))},e.ErrorDecider=function(){return r.a.createElement(T,{incor:0,enter:e.enter,createRoom:e.createRoom,roomStatus:null})},e.newText=function(t){console.log("from App.js:"),console.log(t),U.emit("text",t,e.state.room)},e.joinedReset=function(){console.log("joinedReset: Called"),e.joined=!1,e.called=!0},e.textReset=function(){e.setState({newMessage:""})},e.joined=function(){U.emit("joined",e.state.room)},e.EnterName=function(){return null==e.state.name?r.a.createElement(T,{nameSubmission:e.nameSubmission,roomStatus:e.state.room}):null==e.state.selectedVideo?r.a.createElement("div",{class:"ui container middle aligned center aligned grid"},r.a.createElement("div",{id:"R",className:"ui container middle aligned center aligned grid"},r.a.createElement("h4",{className:"ui header "}," ROOM CODE: ",e.state.room),r.a.createElement("div",{id:"utube",className:"ui container middle aligned center aligned grid"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://img.icons8.com/clouds/300/000000/youtube-play.png"}))),r.a.createElement("div",{className:"ui container middle aligned center aligned grid"}," ",r.a.createElement("h1",{style:{marginTop:"80px"}},"YouTube Party!")),r.a.createElement(g,{Search:e.search}),r.a.createElement(D,null))):r.a.createElement("div",null,r.a.createElement("div",{className:"ui container",style:{marginTop:"80px"}},r.a.createElement("h4",{className:"ui header"}," ROOM CODE: ",e.state.room),r.a.createElement(g,{style:{marginBottom:"10px"},Search:e.search}),r.a.createElement("div",{style:{marginTop:"10px"},className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(w,{loaded:e.loaded,Reset:e.Reset,joined:e.joined,joinedReset:e.joinedReset,StateReset:e.StateReset,reset:e.reset,nPause:e.state.newMemberPause,onChange:e.onChange,PlayerState:e.state.PlayerState,State:e.state.onChange,updatedTime:e.state.newTime,newTime:e.newTime,id:e.state.id,time:e.state.time,pause:e.pressPause,play:e.pressPlay,video:e.state.selectedVideo}),e.state.data,r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"}," Connected members"),r.a.createElement(R,{msglist:e.state.members,name:e.state.name}))),r.a.createElement("div",{className:"five wide column"},r.a.createElement(E,{videos:e.state.videos,onVideoSelect:e.onVideoSelect})))),r.a.createElement(x,{textReset:e.textReset,text:e.newText,newtext:e.state.newMessage})))},e}return Object(u.a)(a,[{key:"render",value:function(){return null==this.state.room?r.a.createElement("div",{class:"ui middle aligned center aligned grid"},this.ErrorDecider()):this.EnterName()}}]),a}(r.a.Component);s.a.render(r.a.createElement(Y,null),document.querySelector("#root"))},67:function(e,t,a){}},[[172,1,2]]]);
//# sourceMappingURL=main.68a3d70c.chunk.js.map