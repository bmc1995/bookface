(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{151:function(e,t,a){e.exports=a(165)},156:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(156),a(6)),l=a.n(s),i=a(10),u=a(8),m=a(15),p=(a(158),a(56)),f=a(201),d=a(222),h=a(221),b=a(207),E=a(224),g=a(26),j=a(24),y=Object(n.createContext)({user:null,setUser:function(){}}),v=Object(n.createContext)({accessToken:null,setAccessToken:function(){}}),O=a(116),k=Object(f.a)({signInContainer:{textAlign:"center","& Form":{padding:"1rem","& div":{margin:"0.5rem auto"}}}}),C=function(e){var t=e.placeholder,a=e.type,n=Object(p.a)(e,["placeholder","type"]),o=Object(g.c)(n),c=Object(u.a)(o,2),s=c[0],l=c[1],i=l.error&&l.touched?l.error:"";return r.a.createElement(d.a,Object.assign({},s,{type:a,placeholder:t,helperText:i,error:!!i}))},x=j.a({firstName:j.b().required().max(35),lastName:j.b().required().max(35),email:j.b().required().email("Please enter a valid email"),password:j.b().required().matches(/^[a-zA-Z_\-]{4,}$/m,"Must be atleast 4 characters, One uppercase, One lowercase, all letters."),passwordConfirm:j.b().required().test("passwords-match","Passwords don't match",(function(e){return this.parent.password===e}))});function I(){return(I=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:e.sent.json().then((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){var t=k();return r.a.createElement(h.a,{className:t.signInContainer},r.a.createElement(g.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",passwordConfirm:""},validationSchema:x,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm;n(!0),function(e,t){I.apply(this,arguments)}("https://bookface-auth.herokuapp.com/userauth/signup"),n(!1),e.handleClose(),r({})}},(function(e){var t=e.isSubmitting;return r.a.createElement(h.a,null,r.a.createElement(O.a,{variant:"h6"},"Sign Up"),r.a.createElement(g.a,null,r.a.createElement(C,{placeholder:"First Name..",name:"firstName",type:"input"}),r.a.createElement("div",null,r.a.createElement(C,{placeholder:"Last Name..",name:"lastName",type:"input"})),r.a.createElement("div",null,r.a.createElement(C,{placeholder:"E-mail..",name:"email",type:"email"})),r.a.createElement("div",null,r.a.createElement(C,{placeholder:"Password..",name:"password",type:"password"})),r.a.createElement("div",null,r.a.createElement(C,{placeholder:"Confirm Password..",name:"passwordConfirm",type:"password"})),r.a.createElement("div",null,r.a.createElement(b.a,{disabled:t,type:"submit"},"submit"))))})))},w=Object(f.a)({signInContainer:{display:"flex",flexDirection:"column",justifyContent:"center",width:"20rem",textAlign:"center","& Form":{padding:"1rem","& div":{margin:"0.5rem auto"}}}}),P=function(e){var t=e.placeholder,a=e.type,n=Object(p.a)(e,["placeholder","type"]),o=Object(g.c)(n),c=Object(u.a)(o,2),s=c[0],l=c[1],i=l.error&&l.touched?l.error:"";return r.a.createElement(d.a,Object.assign({},s,{type:a,helperText:i,error:!!i,variant:"outlined",label:t}))},S=j.a({email:j.b().required().email("Must be a valid e-mail"),password:j.b().required()}),U=function(){var e=w(),t=Object(m.g)(),a=Object(n.useContext)(y).setUser,o=Object(n.useContext)(v).setAccessToken,c=Object(n.useState)(!1),s=Object(u.a)(c,2),p=s[0],f=s[1],d=function(){f(!1)};function j(){return(j=Object(i.a)(l.a.mark((function e(n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:e.sent.json().then((function(e){var n=Object.entries(e.user)[0][1];console.log(n),a(n),o(e.token),t.push("/dashboard")})).catch((function(e){return console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(h.a,{className:e.signInContainer},r.a.createElement("h1",null,"Sign in"),r.a.createElement(g.b,{initialValues:{email:"",password:""},validationSchema:S,onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;a(!0),function(e,t){j.apply(this,arguments)}("https://bookface-auth.herokuapp.com/userauth/login",e),n(),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(P,{placeholder:"E-mail..",name:"email",type:"email"})),r.a.createElement("div",null,r.a.createElement(P,{placeholder:"Password..",name:"password",type:"password"})),r.a.createElement(b.a,{color:"primary",variant:"contained",disabled:t,type:"submit"},"submit")))})),r.a.createElement("p",null,"Not a member?"," ",r.a.createElement(b.a,{onClick:function(){f(!0)},color:"primary",variant:"text"},"Sign Up!")),r.a.createElement(E.a,{fullWidth:!0,open:p,handleClose:d,onClose:d},r.a.createElement(N,null)))},T=a(141),_=function(){return r.a.createElement(h.a,{paddingTop:"2rem",display:"flex",justifyContent:"center"},r.a.createElement(T.a,{elevation:5},r.a.createElement(U,null)))},B=a(208),A=a(209),R=a(167),L=a(138),z=a(210),F=a(132),D=a.n(F),q=a(27),J=function(){var e=r.a.useState(null),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(y),s=c.user,l=c.setUser,i=Object(n.useContext)(v).setAccessToken,m=function(){o(null)};return r.a.createElement(B.a,{position:"static"},r.a.createElement(A.a,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{edge:"start",className:"navMenuButton",color:"inherit","aria-label":"menu",onClick:function(e){o(e.currentTarget)}},r.a.createElement(D.a,null)),r.a.createElement(L.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:m},r.a.createElement(z.a,{color:"textPrimary",component:q.b,to:"/dashboard",onClick:m},"Timeline"),r.a.createElement(z.a,{color:"textPrimary",component:q.b,to:"/userIndex",onClick:m},"User List"),r.a.createElement(z.a,{color:"textPrimary",component:q.b,children:q.b,to:"/profile/".concat(s.userurl),onClick:m},"My Profile"),r.a.createElement(z.a,{color:"textPrimary",component:q.b,to:"/profile/".concat(s.first_name).concat(s.last_name,"/edit"),onClick:m},"Edit Profile"),r.a.createElement(z.a,{color:"textPrimary",component:q.b,onClick:function(){document.cookie="loggedIn=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",i(null),l(null),m()}},"Logout"))):null,r.a.createElement(O.a,{variant:"h6",color:"inherit"},document.title)))},W=function(){return r.a.createElement("div",null,r.a.createElement(J,null))},M=a(219),G=a(211),H=a(212),V=function(e){var t=e.placeholder,a=e.type,n=e.label,o=e.multiline,c=Object(p.a)(e,["placeholder","type","label","multiline"]),s=Object(g.c)(c),l=Object(u.a)(s,2),i=l[0],m=l[1],f=m.error&&m.touched?m.error:"";return r.a.createElement(d.a,Object.assign({},i,{type:a,helperText:f,error:!!f,variant:"outlined",placeholder:t,label:n,multiline:o}))},Y=j.a({message:j.b().required("Post cannot be empty.").min(5,"Post must be atleast 5 characters.").trim()}),$=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(y).user,m=Object(n.useContext)(v).accessToken,p=function(){c(!1)},f=function(){var t=Object(i.a)(l.a.mark((function t(a,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m)},body:JSON.stringify(n)});case 2:t.sent.json().then((function(t){console.log(t),p(),e.setRefreshInfo(e.refreshInfo+1)}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){c(!0)}},"Create new post"),r.a.createElement(E.a,{open:o,onClose:p},r.a.createElement(g.b,{initialValues:{message:"",userId:s._id},validationSchema:Y,onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;a(!0),f("https://bookymcbookface.herokuapp.com/posts/create",e),n(),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(G.a,null,r.a.createElement(V,{placeholder:"What's goin' on?",name:"message",multiline:!0})),r.a.createElement(H.a,null,r.a.createElement(b.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(b.a,{color:"primary",disabled:t,type:"submit"},"Post"))))}))))},Z=a(214),K=a(139),Q=a(218),X=a(226),ee=a(135),te=a.n(ee),ae=a(110),ne=a.n(ae),re=a(133),oe=a.n(re),ce=Object(f.a)({interactionButton:{padding:"0",margin:"0"}}),se=function(e){var t=e.placeholder,a=e.type,n=e.label,o=e.multiline,c=Object(p.a)(e,["placeholder","type","label","multiline"]),s=Object(g.c)(c),l=Object(u.a)(s,2),i=l[0],m=l[1],f=m.error&&m.touched?m.error:"";return r.a.createElement(d.a,Object.assign({},i,{type:a,helperText:f,error:!!f,variant:"outlined",placeholder:t,label:n,multiline:o}))},le=j.a({message:j.b().required("Comment cannot be empty.").trim()}),ie=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(y).user,m=Object(n.useContext)(v).accessToken,p=ce(),f=function(){c(!1)},d=function(){var e=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m)},body:JSON.stringify(a)});case 2:e.sent.json().then((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:p.interactionButton,onClick:function(){c(!0)}},r.a.createElement(oe.a,{fontSize:"small"}),e.postComments.length),r.a.createElement(E.a,{open:o,onClose:f},r.a.createElement(g.b,{initialValues:{author:"".concat(s._id),message:""},validationSchema:le,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm;n(!0),d("https://bookymcbookface.herokuapp.com/comments/".concat(e.postId),t),r(),n(!1),f(),e.setRefreshInfo(e.refreshInfo+1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(G.a,null,r.a.createElement(se,{placeholder:"Type your comment..",name:"message",multiline:!0})),r.a.createElement(H.a,null,r.a.createElement(b.a,{onClick:f,color:"primary"},"Cancel"),r.a.createElement(b.a,{color:"primary",disabled:t,type:"submit"},"Post"))))}))))},ue=a(225),me=a(213),pe=a(215),fe=a(134),de=a.n(fe),he=a(206),be=a(168),Ee=a(216),ge=a(217),je=Object(f.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},list:{display:"inline",width:"100%"},listItem:{margin:"2px 0"},avatarHover:{cursor:"pointer"}}}));function ye(e){var t=je(),a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1],p=Object(m.g)(),f=Object(n.useContext)(y).user;Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookymcbookface.herokuapp.com/comments/".concat(t),{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 2:e.sent.json().then((function(e){s(e.comments)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}})()(e.postId,e.token)}),[e.postId,e.token,e.refreshInfo]);var d=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bookymcbookface.herokuapp.com/comments/".concat(e.postId,"/").concat(a),{method:"DELETE",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}});case 2:t.sent.json().then((function(t){console.log(t),e.setRefreshInfo(e.refreshInfo+1)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:t.root},r.a.createElement(ue.a,{elevation:2},r.a.createElement(me.a,{expandIcon:r.a.createElement(de.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(O.a,{className:t.heading},"Comments")),r.a.createElement(Z.a,null),r.a.createElement(pe.a,{className:t.list},c.map((function(e,a){return r.a.createElement(he.a,{className:t.list},r.a.createElement(be.a,{className:t.listItem},r.a.createElement(h.a,{className:t.avatarHover,onClick:function(){return p.push("/profile/".concat(e.author.userurl))}},r.a.createElement(Ee.a,null,r.a.createElement(X.a,{src:e.author.profileImgUrl}))),r.a.createElement(ge.a,{primary:r.a.createElement(O.a,{variant:"caption"},"".concat(e.author.first_name," ").concat(e.author.last_name)),secondary:r.a.createElement(O.a,{variant:"body1"},e.message)}),function(e,t){if(t.includes(e))return r.a.createElement(R.a,{onClick:function(){return d(e)}},r.a.createElement(ne.a,null))}(e._id,f.comments)),a!==c.length-1?r.a.createElement(Z.a,{variant:"middle"}):null)})))))}var ve=Object(f.a)({postComponentStyles:{width:"95%",marginBottom:"3rem",border:"1px solid black"},avatarSmall:{height:"40px",width:"40px",marginRight:"1rem"},posterInfo:{display:"flex",alignItems:"center",borderBottom:"1px solid black"},postInteractions:{display:"flex",justifyContent:"end"},interactionButton:{padding:0,margin:"0 1rem"},avatarContainer:{cursor:"pointer"}}),Oe=function(e){var t=Object(n.useContext)(y).user,a=Object(n.useContext)(v).accessToken,o=Object(m.g)(),c=ve(),s=function(){var n=Object(i.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://bookymcbookface.herokuapp.com/posts/".concat(r,"/").concat(t._id),{method:"DELETE",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 2:n.sent.json().then((function(t){return e.setDeletedPosts((function(e){return[].concat(Object(K.a)(e),[t])})),console.log(t)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var t=Object(i.a)(l.a.mark((function t(n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bookymcbookface.herokuapp.com/likes",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({postId:n,userId:r})});case 2:t.sent.json().then((function(t){e.setLikes(t),console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(Q.a,{className:c.postComponentStyles,elevation:5},r.a.createElement(h.a,{className:c.posterInfo},r.a.createElement(h.a,{onClick:function(){return o.push("/profile/".concat(e.postProfileUrl))},className:c.avatarContainer},r.a.createElement(X.a,{className:c.avatarSmall,src:e.profilePic,alt:"".concat(e.firstName," ").concat(e.lastName)})),r.a.createElement(O.a,{variant:"overline"},e.firstName," ",e.lastName)),r.a.createElement(h.a,{padding:1},r.a.createElement(O.a,{variant:"body1",paragraph:!0},e.post),r.a.createElement(Z.a,null),r.a.createElement(h.a,{className:c.postInteractions},r.a.createElement(ie,{postComments:e.postComments,postId:e.postId,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo}),r.a.createElement(R.a,{onClick:function(){return u(e.postId,t._id)},className:c.interactionButton},r.a.createElement(te.a,{fontSize:"small"}),e.postLikes.length),t._id===e.postAuthorId?r.a.createElement(R.a,{onClick:function(){return s(e.postId)},className:c.interactionButton},r.a.createElement(ne.a,{fontSize:"small"})):null),r.a.createElement(ye,{postId:e.postId,token:a,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})))},ke=Object(f.a)({timelineContainer:{overflow:"auto",paddingBottom:"1rem",paddingTop:"1rem"},timelinePaper:{backgroundColor:"#ffffffbf"},title:{paddingLeft:"1rem"}}),Ce=function(e){var t=e.posts,a=ke();return r.a.createElement(M.a,{className:a.timelineContainer,maxWidth:"md"},r.a.createElement(T.a,{className:a.timelinePaper,elevation:15},r.a.createElement(Z.a,null),r.a.createElement(h.a,{paddingY:3,display:"flex",flexDirection:"column",alignItems:"center"},t.map((function(t,a){return r.a.createElement(Oe,{key:"".concat(t.author.first_name,"_").concat(t.author.last_name,"_").concat(t.author._id,"_").concat(a),firstName:t.author.first_name,lastName:t.author.last_name,profilePic:t.author.profileImgUrl,postAuthorId:t.author._id,post:t.message,setDeletedPosts:e.setDeletedPosts,postId:t._id,postLikes:t.likes,postComments:t.comments,setLikes:e.setLikes,postProfileUrl:t.author.userurl,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})})).reverse())))};function xe(){var e=Object(n.useContext)(y).user,t=Object(n.useContext)(v).accessToken,a=Object(n.useState)(),o=Object(u.a)(a,2),c=o[0],s=o[1],m=Object(n.useState)([]),p=Object(u.a)(m,2),f=p[0],d=p[1],b=Object(n.useState)([]),E=Object(u.a)(b,2),g=E[0],j=E[1],k=Object(n.useState)(0),C=Object(u.a)(k,2),x=C[0],I=C[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:e.sent.json().then((function(e){s(e.posts)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/posts")}),[t,g,f,x]),c&&c.length>0?r.a.createElement(M.a,null,r.a.createElement(h.a,{textAlign:"center"},r.a.createElement(O.a,{variant:"h6"},"Hello, ".concat(e.first_name,"!")),r.a.createElement($,{refreshInfo:x,setRefreshInfo:I})),r.a.createElement(Ce,{posts:c,deletedPosts:g,setDeletedPosts:j,setLikes:d,refreshInfo:x,setRefreshInfo:I})):r.a.createElement(M.a,null,r.a.createElement(h.a,null,"Hello, ".concat(e.first_name,"!")),r.a.createElement($,null),r.a.createElement(T.a,{elevation:10},r.a.createElement(O.a,null,"Nothing to see here...")))}var Ie=Object(f.a)({timelineContainer:{overflow:"auto",paddingBottom:"3rem",paddingTop:"1rem"},timelinePaper:{backgroundColor:"#ffffffbf"},title:{paddingLeft:"1rem"}}),Ne=function(e){var t=Ie(),a=e.posts;return r.a.createElement(M.a,{className:t.timelineContainer,maxWidth:"md"},r.a.createElement(T.a,{className:t.timelinePaper,elevation:15},r.a.createElement(O.a,{className:t.title,variant:"overline"},e.firstName,"'s Posts"),r.a.createElement(Z.a,null),r.a.createElement(h.a,{paddingY:3,display:"flex",flexDirection:"column",alignItems:"center"},a.map((function(t,a){return r.a.createElement(Oe,{key:"".concat(e.firstName,"_").concat(e.lastName,"_").concat(e.userId,"_").concat(a),firstName:e.firstName,lastName:e.lastName,profilePic:e.profilePic,postAuthorId:e.userId,post:t.message,postId:t._id,deletedPosts:e.deletedPosts,setDeletedPosts:e.setDeletedPosts,postLikes:t.likes,postComments:t.comments,postProfileUrl:e.userurl,likes:e.likes,setLikes:e.setLikes,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})})).reverse())))},we=a(137),Pe=a.n(we),Se=a(136),Ue=a.n(Se),Te=function(e){var t=Object(n.useContext)(v).accessToken,a=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/sendFriendReq",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/acceptFriendReq",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),c=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/unfriend",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return e.current.includes(e.authUser)?r.a.createElement(b.a,{onClick:c,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Unfriend")):e.pendIn.includes(e.authUser)?r.a.createElement(b.a,{disabled:!0,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Requested")):e.pendOut.includes(e.authUser)?r.a.createElement(b.a,{onClick:o,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Accept Friend Request")):e.profileUser!==e.authUser?r.a.createElement(b.a,{onClick:a,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Add Friend")):null},_e=a(205),Be=a(203);function Ae(){return(Ae=Object(i.a)(l.a.mark((function e(t,a,n,r){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("img",a),console.log(a),e.next=5,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{Authorization:"Bearer ".concat(n)},body:o});case 5:e.sent.json().then((function(e){console.log(e),console.log("end handleSubmit"),r.setRefresh(r.refreshInfo+1)})).catch((function(e){return console.log("Error",e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re=Object(f.a)({container:{display:"flex",flexDirection:"column",width:"min-width"}}),Le=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(v).accessToken,l=Re();return r.a.createElement(M.a,{className:l.container},r.a.createElement(O.a,{variant:"h6",align:"center"},"Upload Image"),r.a.createElement(Z.a,null),r.a.createElement(h.a,{margin:"2rem auto"},r.a.createElement(_e.a,{form:"file",htmlFor:"file"},"Profile Picture"),r.a.createElement("div",null,r.a.createElement(Be.a,{onChange:function(e){var t;t=e.target.files[0],c(t),console.log(t),console.log("end selectionChangeHandler"),console.log(o)},type:"file",name:"file"})),r.a.createElement(b.a,{onClick:function(t){!function(e,t,a,n){Ae.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/upload/s3ImgUpload",o,s,{setRefresh:e.setRefreshInfo,refreshInfo:e.refreshInfo}),e.handleClose()}},"Upload Photo")))},ze=Object(f.a)({userCard:{marginTop:"1rem",display:"flex"},infoBox:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100pc"},fullName:{alignSelf:"center",textAlign:"center"},ageLocation:{display:"flex",justifyContent:"space-around"},avatarPic:{height:"160px",width:"160px"},friendButton:{alignSelf:"center"}}),Fe=function(e){var t=ze(),a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],s=o[1],l=function(){s(!1)};return r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(Q.a,{elevation:10,className:t.userCard},r.a.createElement(X.a,{className:t.avatarPic,variant:"rounded",src:e.profilePic,alt:"".concat(e.firstName," ").concat(e.lastName)}),r.a.createElement(h.a,{className:t.infoBox},r.a.createElement(h.a,{className:t.fullName},r.a.createElement(O.a,{variant:"h6"},e.firstName," ",e.lastName)),r.a.createElement(h.a,{margin:"auto",onClick:function(){return e.setRefreshInfo(e.refreshInfo+1)},className:t.friendButton},r.a.createElement(Te,{authUser:e.authUser,profileUser:e.profileUser,current:e.friendsCurrent,pendIn:e.friendsPendIn,pendOut:e.friendsPendOut})),e.age&&e.city&&e.state?r.a.createElement(h.a,{className:t.ageLocation},r.a.createElement(O.a,{variant:"subtitle"},e.age,r.a.createElement(Ue.a,null)),r.a.createElement(O.a,null,e.city,", ",e.state,r.a.createElement(Pe.a,null))):null,e.authUser===e.profileUser?r.a.createElement(h.a,{margin:"auto"},r.a.createElement(b.a,{onClick:function(){s(!0)},variant:"contained"},"Edit Profile"),r.a.createElement(E.a,{open:c,onClose:l},r.a.createElement(Le,{currAge:e.age,currCity:e.city,currState:e.state,handleClose:l,setRefreshInfo:e.setRefreshInfo,refreshInfo:e.refreshInfo}))):null)))};function De(){var e=Object(m.h)().userurl,t=Object(n.useContext)(v).accessToken,a=Object(n.useContext)(y).user,o=Object(n.useState)(null),c=Object(u.a)(o,2),s=c[0],p=c[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),b=d[0],E=d[1],g=Object(n.useState)(0),j=Object(u.a)(g,2),k=j[0],C=j[1],x=Object(n.useState)([]),I=Object(u.a)(x,2),N=I[0],w=I[1],P=Object(n.useState)([]),S=Object(u.a)(P,2),U=S[0],T=S[1],_=a._id;return Object(n.useEffect)((function(){function a(){return(a=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:e.sent.json().then((function(e){p(e.result[0]),E(!1)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){a.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/users/find/".concat(e))}),[e,t,k,N,U]),void 0===s?r.a.createElement(O.a,null,"Not found..."):b?r.a.createElement(O.a,null,"Loading..."):r.a.createElement(M.a,{disableGutters:!0,maxWidth:"xl"},r.a.createElement(Fe,{age:s.age,firstName:s.first_name,lastName:s.last_name,city:s.city,state:s.state,profilePic:s.profileImgUrl,friendsCurrent:s.friends.current,friendsPendIn:s.friends.pendIn,friendsPendOut:s.friends.pendOut,profileUser:s._id,setRefreshInfo:C,refreshInfo:k,authUser:_}),r.a.createElement(h.a,null,r.a.createElement(Ne,{profilePic:s.profileImgUrl,posts:s.posts.map((function(e){return e})),firstName:s.first_name,lastName:s.last_name,userId:s._id,deletedPosts:N,setDeletedPosts:w,userurl:s.userurl,likes:U,setLikes:T,refreshInfo:k,setRefreshInfo:C})))}var qe=a(220),Je=Object(f.a)({cardStyles:{height:"15rem",width:"15rem"},avatarPic:{height:"125px",width:"125px",margin:"1rem auto",cursor:"pointer"},friendButton:{margin:"auto",textAlign:"center"}}),We=function(e){var t=Je(),a=Object(m.g)();return r.a.createElement(Q.a,{className:t.cardStyles},r.a.createElement(h.a,{onClick:function(){return a.push("/profile/".concat(e.profileUrl))}},r.a.createElement(X.a,{src:e.profilePic,className:t.avatarPic})),r.a.createElement(O.a,{align:"center"},"".concat(e.first_name," ").concat(e.last_name)),r.a.createElement(h.a,{className:t.friendButton,onClick:function(){return e.setPageUpdates(e.pageUpdates+1)}},r.a.createElement(Te,{authUser:e.authUser,profileUser:e.profileUser,current:e.friendsCurrent,pendIn:e.friendsPendIn,pendOut:e.friendsPendOut})))},Me=Object(f.a)({UserIndexContainer:{}}),Ge=function(e){var t=Object(n.useContext)(y).user,a=Object(n.useContext)(v).accessToken,o=Object(n.useState)([]),c=Object(u.a)(o,2),s=c[0],m=c[1],p=Object(n.useState)(0),f=Object(u.a)(p,2),d=f[0],h=f[1],b=Me();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookymcbookface.herokuapp.com/users",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 2:e.sent.json().then((function(e){console.log(e),m(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,d]),0!==s.length?r.a.createElement(qe.a,{sm:"12",spacing:"5",justify:"center",container:!0,className:b.UserIndexContainer},s.map((function(e,a){return e._id!==t._id?r.a.createElement(qe.a,{item:!0},r.a.createElement(We,{first_name:e.first_name,last_name:e.last_name,pageUpdates:d,setPageUpdates:h,authUser:t._id,profileUser:e._id,profilePic:e.profileImgUrl,friendsCurrent:e.friends.current,friendsPendOut:e.friends.pendOut,friendsPendIn:e.friends.pendIn,profileUrl:e.userurl})):null}))):r.a.createElement(qe.a,{sm:"12",spacing:"5",justify:"center",container:!0,className:b.UserIndexContainer},r.a.createElement(qe.a,{item:!0},r.a.createElement(O.a,{variant:"h4"},"Loading..")))},He=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),p=s[0],f=s[1],d=Object(n.useState)(!0),h=Object(u.a)(d,2),b=h[0],E=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookface-auth.herokuapp.com/userauth/curruser",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:e.sent.json().then((function(e){var t=e.user;console.log(t),o(t),f(e.token),E(!1)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.cookie.includes("loggedIn=true")?null==a&&(console.log(document.cookie.includes("loggedIn=true")),function(){e.apply(this,arguments)}()):E(!1)}),[a]),b?r.a.createElement(O.a,null,"Loading..."):r.a.createElement(y.Provider,{value:{user:a,setUser:o}},r.a.createElement(v.Provider,{value:{accessToken:p,setAccessToken:f}},r.a.createElement(W,null),a&&p?r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/auth",render:function(){return r.a.createElement("h1",null,"You're already logged in")}}),r.a.createElement(m.b,{path:"/logout",render:function(){return r.a.createElement("h1",null,"Logout route works")}}),r.a.createElement(m.b,{path:"/profile/:userurl",exact:!0,children:r.a.createElement(De,null)}),r.a.createElement(m.b,{path:"/dashboard",children:r.a.createElement(xe,null)}),r.a.createElement(m.b,{path:"/userIndex",children:r.a.createElement(Ge,null)}),r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:"/dashboard"})}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("h1",null,"404 Not Found")}})):r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",children:r.a.createElement(_,null)}),r.a.createElement(m.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.a,null,r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.8aeb7a84.chunk.js.map