(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{151:function(e,t,a){e.exports=a(165)},156:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(156),a(6)),l=a.n(s),i=a(10),u=a(8),m=a(15),f=(a(158),a(56)),p=a(201),d=a(222),h=a(221),b=a(207),E=a(224),g=a(26),j=a(20),v=Object(n.createContext)({user:null,setUser:function(){}}),y=Object(n.createContext)({accessToken:null,setAccessToken:function(){}}),O=a(116),k=Object(p.a)({signInContainer:{textAlign:"center","& Form":{padding:"1rem","& div":{margin:"0.5rem auto"}}}}),x=function(e){var t=e.placeholder,a=e.type,n=Object(f.a)(e,["placeholder","type"]),o=Object(g.c)(n),c=Object(u.a)(o,2),s=c[0],l=c[1],i=l.error&&l.touched?l.error:"";return r.a.createElement(d.a,Object.assign({},s,{type:a,helperText:i,error:!!i,variant:"outlined",label:t}))},C=j.a({first_name:j.c().required().max(35),last_name:j.c().required().max(35),email:j.c().required().email("Please enter a valid email"),password:j.c().required().matches(/^[a-zA-Z0-9_\-]{4,}$/m,"Must be atleast 4 characters, alphanumeric."),userurl:j.c().required().lowercase().matches(/^[a-zA-Z_\-]{5,}$/m,"Must be atleast 5 characters, letters"),passwordConfirm:j.c().required().oneOf([j.b("password"),null],"Passwords must match")}),I=function(e){var t=k();function a(){return(a=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:e.sent.json().then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(h.a,{className:t.signInContainer},r.a.createElement(g.b,{initialValues:{first_name:"",last_name:"",email:"",password:"",passwordConfirm:"",userurl:""},validationSchema:C,onSubmit:function(t,n){var r=n.setSubmitting,o=n.resetForm;r(!0),function(e,t){a.apply(this,arguments)}("https://bookface-auth.herokuapp.com/userauth/signup",t),o(),r(!1),e.handleDialogClose()}},(function(e){var t=e.isSubmitting;return r.a.createElement(h.a,null,r.a.createElement(O.a,{variant:"h6"},"Sign Up"),r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(x,{placeholder:"First Name..",name:"first_name",type:"text"})),r.a.createElement("div",null,r.a.createElement(x,{placeholder:"Last Name..",name:"last_name",type:"text"})),r.a.createElement("div",null,r.a.createElement(x,{placeholder:"E-mail..",name:"email",type:"email"})),r.a.createElement("div",null,r.a.createElement(x,{placeholder:"Password..",name:"password",type:"password"})),r.a.createElement("div",null,r.a.createElement(x,{placeholder:"Confirm Password..",name:"passwordConfirm",type:"password"})),r.a.createElement("div",null,r.a.createElement(x,{placeholder:"Profile Url",name:"userurl",type:"text"})),r.a.createElement("div",null,r.a.createElement(b.a,{disabled:t,type:"submit"},"Create Account"))))})))},w=Object(p.a)({signInContainer:{display:"flex",flexDirection:"column",justifyContent:"center",width:"20rem",textAlign:"center","& Form":{padding:"1rem","& div":{margin:"0.5rem auto"}}}}),P=function(e){var t=e.placeholder,a=e.type,n=Object(f.a)(e,["placeholder","type"]),o=Object(g.c)(n),c=Object(u.a)(o,2),s=c[0],l=c[1],i=l.error&&l.touched?l.error:"";return r.a.createElement(d.a,Object.assign({},s,{type:a,helperText:i,error:!!i,variant:"outlined",label:t}))},S=j.a({email:j.c().required().email("Must be a valid e-mail"),password:j.c().required()}),N=function(){var e=w(),t=Object(m.g)(),a=Object(n.useContext)(v).setUser,o=Object(n.useContext)(y).setAccessToken,c=Object(n.useState)(!1),s=Object(u.a)(c,2),f=s[0],p=s[1],d=function(){p(!1)};function j(){return(j=Object(i.a)(l.a.mark((function e(n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:e.sent.json().then((function(e){var n=Object.entries(e.user)[0][1];a(n),o(e.token),t.push("/dashboard")})).catch((function(e){return console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(h.a,{className:e.signInContainer},r.a.createElement("h1",null,"Sign in"),r.a.createElement(g.b,{initialValues:{email:"",password:""},validationSchema:S,onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;a(!0),function(e,t){j.apply(this,arguments)}("https://bookface-auth.herokuapp.com/userauth/login",e),n(),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(P,{placeholder:"E-mail..",name:"email",type:"email"})),r.a.createElement("div",null,r.a.createElement(P,{placeholder:"Password..",name:"password",type:"password"})),r.a.createElement(b.a,{color:"primary",variant:"contained",disabled:t,type:"submit"},"submit")))})),r.a.createElement(h.a,{textAlign:"right"},r.a.createElement(b.a,{onClick:function(){p(!0)},color:"primary",variant:"text"},"Sign Up!")),r.a.createElement(E.a,{fullWidth:!0,open:f,onClose:d},r.a.createElement(I,{handleDialogClose:d})))},U=a(141),T=function(){return r.a.createElement(h.a,{paddingTop:"2rem",display:"flex",justifyContent:"center"},r.a.createElement(U.a,{elevation:5},r.a.createElement(N,null)))},_=a(208),A=a(209),B=a(167),R=a(138),L=a(210),z=a(132),F=a.n(z),D=a(27),q=function(){var e=r.a.useState(null),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(v),s=c.user,l=c.setUser,i=Object(n.useContext)(y).setAccessToken,m=function(){o(null)};return r.a.createElement(_.a,{position:"static"},r.a.createElement(A.a,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{edge:"start",className:"navMenuButton",color:"inherit","aria-label":"menu",onClick:function(e){o(e.currentTarget)}},r.a.createElement(F.a,null)),r.a.createElement(R.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:m},r.a.createElement(L.a,{color:"textPrimary",component:D.b,to:"/dashboard",onClick:m},"Timeline"),r.a.createElement(L.a,{color:"textPrimary",component:D.b,to:"/userIndex",onClick:m},"User List"),r.a.createElement(L.a,{color:"textPrimary",component:D.b,children:D.b,to:"/profile/".concat(s.userurl),onClick:m},"My Profile"),r.a.createElement(L.a,{color:"textPrimary",component:D.b,onClick:function(){document.cookie="loggedIn=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",i(null),l(null),m()}},"Logout"))):null,r.a.createElement(O.a,{variant:"h6",color:"inherit"},document.title)))},J=function(){return r.a.createElement("div",null,r.a.createElement(q,null))},W=a(219),M=a(211),G=a(212),H=function(e){var t=e.placeholder,a=e.type,n=e.label,o=e.multiline,c=Object(f.a)(e,["placeholder","type","label","multiline"]),s=Object(g.c)(c),l=Object(u.a)(s,2),i=l[0],m=l[1],p=m.error&&m.touched?m.error:"";return r.a.createElement(d.a,Object.assign({},i,{type:a,helperText:p,error:!!p,variant:"outlined",placeholder:t,label:n,multiline:o}))},V=j.a({message:j.c().required("Post cannot be empty.").min(5,"Post must be atleast 5 characters.").trim()}),Y=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(v).user,m=Object(n.useContext)(y).accessToken,f=function(){c(!1)},p=function(){var t=Object(i.a)(l.a.mark((function t(a,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m)},body:JSON.stringify(n)});case 2:t.sent.json().then((function(t){console.log(t),f(),e.setRefreshInfo(e.refreshInfo+1)}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){c(!0)}},"Create new post"),r.a.createElement(E.a,{open:o,onClose:f},r.a.createElement(g.b,{initialValues:{message:"",userId:s._id},validationSchema:V,onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;a(!0),p("https://bookymcbookface.herokuapp.com/posts/create",e),n(),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(M.a,null,r.a.createElement(H,{placeholder:"What's goin' on?",name:"message",multiline:!0})),r.a.createElement(G.a,null,r.a.createElement(b.a,{onClick:f,color:"primary"},"Cancel"),r.a.createElement(b.a,{color:"primary",disabled:t,type:"submit"},"Post"))))}))))},$=a(214),Z=a(139),K=a(218),Q=a(226),X=a(135),ee=a.n(X),te=a(110),ae=a.n(te),ne=a(133),re=a.n(ne),oe=Object(p.a)({interactionButton:{padding:"0",margin:"0"}}),ce=function(e){var t=e.placeholder,a=e.type,n=e.label,o=e.multiline,c=Object(f.a)(e,["placeholder","type","label","multiline"]),s=Object(g.c)(c),l=Object(u.a)(s,2),i=l[0],m=l[1],p=m.error&&m.touched?m.error:"";return r.a.createElement(d.a,Object.assign({},i,{type:a,helperText:p,error:!!p,variant:"outlined",placeholder:t,label:n,multiline:o}))},se=j.a({message:j.c().required("Comment cannot be empty.").trim()}),le=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(v).user,m=Object(n.useContext)(y).accessToken,f=oe(),p=function(){c(!1)},d=function(){var e=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m)},body:JSON.stringify(a)});case 2:e.sent.json().then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:f.interactionButton,onClick:function(){c(!0)}},r.a.createElement(re.a,{fontSize:"small"}),e.postComments.length),r.a.createElement(E.a,{open:o,onClose:p},r.a.createElement(g.b,{initialValues:{author:"".concat(s._id),message:""},validationSchema:se,onSubmit:function(t,a){var n=a.setSubmitting,r=a.resetForm;n(!0),d("https://bookymcbookface.herokuapp.com/comments/".concat(e.postId),t),r(),n(!1),p(),e.setRefreshInfo(e.refreshInfo+1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(M.a,null,r.a.createElement(ce,{placeholder:"Type your comment..",name:"message",multiline:!0})),r.a.createElement(G.a,null,r.a.createElement(b.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(b.a,{color:"primary",disabled:t,type:"submit"},"Post"))))}))))},ie=a(225),ue=a(213),me=a(215),fe=a(134),pe=a.n(fe),de=a(206),he=a(168),be=a(216),Ee=a(217),ge=Object(p.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},list:{display:"inline",width:"100%"},listItem:{margin:"2px 0"},avatarHover:{cursor:"pointer"}}}));var je=function(e){var t=ge(),a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1],f=Object(m.g)(),p=Object(n.useContext)(v).user,d=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bookymcbookface.herokuapp.com/comments/".concat(e.postId,"/").concat(a),{method:"DELETE",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}});case 2:t.sent.json().then((function(t){e.setRefreshInfo(e.refreshInfo+1)})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookymcbookface.herokuapp.com/comments/".concat(t),{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 2:e.sent.json().then((function(e){s(e.comments)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}})()(e.postId,e.token)}),[e.postId,e.token,e.refreshInfo]),r.a.createElement("div",{className:t.root},r.a.createElement(ie.a,{elevation:2},r.a.createElement(ue.a,{expandIcon:r.a.createElement(pe.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(O.a,{className:t.heading},"Comments")),r.a.createElement($.a,null),r.a.createElement(me.a,{className:t.list},c.map((function(e,a){return r.a.createElement(de.a,{className:t.list},r.a.createElement(he.a,{className:t.listItem},r.a.createElement(h.a,{className:t.avatarHover,onClick:function(){return f.push("/profile/".concat(e.author.userurl))}},r.a.createElement(be.a,null,r.a.createElement(Q.a,{src:e.author.profileImgUrl}))),r.a.createElement(Ee.a,{primary:r.a.createElement(O.a,{variant:"caption"},"".concat(e.author.first_name," ").concat(e.author.last_name)),secondary:r.a.createElement(O.a,{variant:"body1"},e.message)}),function(e,t){if(t.includes(e))return r.a.createElement(B.a,{onClick:function(){return d(e)}},r.a.createElement(ae.a,null))}(e._id,p.comments)),a!==c.length-1?r.a.createElement($.a,{variant:"middle"}):null)})))))},ve=Object(p.a)({postComponentStyles:{width:"95%",marginBottom:"3rem",border:"1px solid black"},avatarSmall:{height:"40px",width:"40px",marginRight:"1rem"},posterInfo:{display:"flex",alignItems:"center",borderBottom:"1px solid black"},postInteractions:{display:"flex",justifyContent:"end"},interactionButton:{padding:0,margin:"0 1rem"},avatarContainer:{cursor:"pointer"}}),ye=function(e){var t=Object(n.useContext)(v).user,a=Object(n.useContext)(y).accessToken,o=Object(m.g)(),c=ve(),s=function(){var n=Object(i.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://bookymcbookface.herokuapp.com/posts/".concat(r,"/").concat(t._id),{method:"DELETE",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 2:n.sent.json().then((function(t){return e.setDeletedPosts((function(e){return[].concat(Object(Z.a)(e),[t])})),console.log(t)}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var t=Object(i.a)(l.a.mark((function t(n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://bookymcbookface.herokuapp.com/likes",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({postId:n,userId:r})});case 2:t.sent.json().then((function(t){e.setLikes(t),console.log(t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(K.a,{className:c.postComponentStyles,elevation:5},r.a.createElement(h.a,{className:c.posterInfo},r.a.createElement(h.a,{onClick:function(){return o.push("/profile/".concat(e.postProfileUrl))},className:c.avatarContainer},r.a.createElement(Q.a,{className:c.avatarSmall,src:e.profilePic,alt:"".concat(e.firstName," ").concat(e.lastName)})),r.a.createElement(O.a,{variant:"overline"},e.firstName," ",e.lastName)),r.a.createElement(h.a,{padding:1},r.a.createElement(O.a,{variant:"body1",paragraph:!0},e.post),r.a.createElement($.a,null),r.a.createElement(h.a,{className:c.postInteractions},r.a.createElement(le,{postComments:e.postComments,postId:e.postId,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo}),r.a.createElement(B.a,{onClick:function(){return u(e.postId,t._id)},className:c.interactionButton},r.a.createElement(ee.a,{fontSize:"small"}),e.postLikes.length),t._id===e.postAuthorId?r.a.createElement(B.a,{onClick:function(){return s(e.postId)},className:c.interactionButton},r.a.createElement(ae.a,{fontSize:"small"})):null),r.a.createElement(je,{postId:e.postId,token:a,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})))},Oe=Object(p.a)({timelineContainer:{overflow:"auto",paddingBottom:"1rem",paddingTop:"1rem"},timelinePaper:{backgroundColor:"#ffffffbf"},title:{paddingLeft:"1rem"}}),ke=function(e){var t=e.posts,a=Oe();return r.a.createElement(W.a,{className:a.timelineContainer,maxWidth:"md"},r.a.createElement(U.a,{className:a.timelinePaper,elevation:15},r.a.createElement($.a,null),r.a.createElement(h.a,{paddingY:3,display:"flex",flexDirection:"column",alignItems:"center"},t.map((function(t,a){return r.a.createElement(ye,{key:"".concat(t.author.first_name,"_").concat(t.author.last_name,"_").concat(t.author._id,"_").concat(a),firstName:t.author.first_name,lastName:t.author.last_name,profilePic:t.author.profileImgUrl,postAuthorId:t.author._id,postProfileUrl:t.author.userurl,postId:t._id,post:t.message,postLikes:t.likes,postComments:t.comments,setDeletedPosts:e.setDeletedPosts,setLikes:e.setLikes,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})})).reverse())))};function xe(){var e=Object(n.useContext)(v).user,t=Object(n.useContext)(y).accessToken,a=Object(n.useState)(),o=Object(u.a)(a,2),c=o[0],s=o[1],m=Object(n.useState)([]),f=Object(u.a)(m,2),p=f[0],d=f[1],b=Object(n.useState)([]),E=Object(u.a)(b,2),g=E[0],j=E[1],k=Object(n.useState)(0),x=Object(u.a)(k,2),C=x[0],I=x[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:e.sent.json().then((function(e){s(e.posts)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/posts")}),[t,g,p,C]),c&&c.length>0?r.a.createElement(W.a,null,r.a.createElement(h.a,{textAlign:"center"},r.a.createElement(O.a,{variant:"h6"},"Hello, ".concat(e.first_name,"!")),r.a.createElement(Y,{refreshInfo:C,setRefreshInfo:I})),r.a.createElement(ke,{posts:c,deletedPosts:g,setDeletedPosts:j,setLikes:d,refreshInfo:C,setRefreshInfo:I})):r.a.createElement(W.a,null,r.a.createElement(h.a,null,"Hello, ".concat(e.first_name,"!")),r.a.createElement(Y,null),r.a.createElement(U.a,{elevation:10},r.a.createElement(O.a,null,"Nothing to see here...")))}var Ce=Object(p.a)({timelineContainer:{overflow:"auto",paddingBottom:"3rem",paddingTop:"1rem"},timelinePaper:{backgroundColor:"#ffffffbf"},title:{paddingLeft:"1rem"}}),Ie=function(e){var t=Ce(),a=e.posts;return r.a.createElement(W.a,{className:t.timelineContainer,maxWidth:"md"},r.a.createElement(U.a,{className:t.timelinePaper,elevation:15},r.a.createElement(O.a,{className:t.title,variant:"overline"},e.firstName,"'s Posts"),r.a.createElement($.a,null),r.a.createElement(h.a,{paddingY:3,display:"flex",flexDirection:"column",alignItems:"center"},a.map((function(t,a){return r.a.createElement(ye,{key:"".concat(e.firstName,"_").concat(e.lastName,"_").concat(e.userId,"_").concat(a),firstName:e.firstName,lastName:e.lastName,profilePic:e.profilePic,postAuthorId:e.userId,post:t.message,postId:t._id,deletedPosts:e.deletedPosts,setDeletedPosts:e.setDeletedPosts,postLikes:t.likes,postComments:t.comments,postProfileUrl:e.userurl,likes:e.likes,setLikes:e.setLikes,refreshInfo:e.refreshInfo,setRefreshInfo:e.setRefreshInfo})})).reverse())))},we=a(137),Pe=a.n(we),Se=a(136),Ne=a.n(Se),Ue=function(e){var t=Object(n.useContext)(y).accessToken,a=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/sendFriendReq",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/acceptFriendReq",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),c=function(){var a=Object(i.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://bookymcbookface.herokuapp.com/users/unfriend",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({profileUser:e.profileUser,authUser:e.authUser})});case 2:a.sent.json().then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return e.current.includes(e.authUser)?r.a.createElement(b.a,{onClick:c,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Unfriend")):e.pendIn.includes(e.authUser)?r.a.createElement(b.a,{disabled:!0,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Requested")):e.pendOut.includes(e.authUser)?r.a.createElement(b.a,{onClick:o,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Accept Friend Request")):e.profileUser!==e.authUser?r.a.createElement(b.a,{onClick:a,variant:"outlined"},r.a.createElement(O.a,{variant:"caption"},"Add Friend")):null},Te=a(205),_e=a(203),Ae=Object(p.a)({container:{display:"flex",flexDirection:"column",width:"min-width"}});function Be(){return(Be=Object(i.a)(l.a.mark((function e(t,a,n,r){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("img",a),e.next=4,fetch(t,{method:"POST",mode:"cors",credentials:"include",headers:{Authorization:"Bearer ".concat(n)},body:o});case 4:e.sent.json().then((function(e){console.log(e),console.log("end handleSubmit"),r.setRefresh(r.refreshInfo+1)})).catch((function(e){return console.log("Error",e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useContext)(y).accessToken,l=Ae();return r.a.createElement(W.a,{className:l.container},r.a.createElement(O.a,{variant:"h6",align:"center"},"Upload Image"),r.a.createElement($.a,null),r.a.createElement(h.a,{margin:"2rem auto"},r.a.createElement(Te.a,{form:"file",htmlFor:"file"},"Profile Picture"),r.a.createElement("div",null,r.a.createElement(_e.a,{onChange:function(e){var t;t=e.target.files[0],c(t)},type:"file",name:"file"})),r.a.createElement(b.a,{onClick:function(){!function(e,t,a,n){Be.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/upload/s3ImgUpload",o,s,{setRefresh:e.setRefreshInfo,refreshInfo:e.refreshInfo}),e.handleClose()}},"Upload Photo")))},Le=Object(p.a)({userCard:{marginTop:"1rem",display:"flex"},infoBox:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100pc"},fullName:{alignSelf:"center",textAlign:"center"},ageLocation:{display:"flex",justifyContent:"space-around"},avatarPic:{height:"160px",width:"160px"},friendButton:{alignSelf:"center"}}),ze=function(e){var t=Le(),a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],s=o[1],l=function(){s(!1)};return r.a.createElement(W.a,{maxWidth:"md"},r.a.createElement(K.a,{elevation:10,className:t.userCard},r.a.createElement(Q.a,{className:t.avatarPic,variant:"rounded",src:e.profilePic,alt:"".concat(e.firstName," ").concat(e.lastName)}),r.a.createElement(h.a,{className:t.infoBox},r.a.createElement(h.a,{className:t.fullName},r.a.createElement(O.a,{variant:"h6"},e.firstName," ",e.lastName)),r.a.createElement(h.a,{margin:"auto",onClick:function(){return e.setRefreshInfo(e.refreshInfo+1)},className:t.friendButton},r.a.createElement(Ue,{authUser:e.authUser,profileUser:e.profileUser,current:e.friendsCurrent,pendIn:e.friendsPendIn,pendOut:e.friendsPendOut})),e.age&&e.city&&e.state?r.a.createElement(h.a,{className:t.ageLocation},r.a.createElement(O.a,{variant:"subtitle"},e.age,r.a.createElement(Ne.a,null)),r.a.createElement(O.a,null,e.city,", ",e.state,r.a.createElement(Pe.a,null))):null,e.authUser===e.profileUser?r.a.createElement(h.a,{margin:"auto"},r.a.createElement(b.a,{onClick:function(){s(!0)},variant:"contained"},"Edit Profile"),r.a.createElement(E.a,{open:c,onClose:l},r.a.createElement(Re,{currAge:e.age,currCity:e.city,currState:e.state,handleClose:l,setRefreshInfo:e.setRefreshInfo,refreshInfo:e.refreshInfo}))):null)))};function Fe(){var e=Object(m.h)().userurl,t=Object(n.useContext)(y).accessToken,a=Object(n.useContext)(v).user,o=Object(n.useState)(null),c=Object(u.a)(o,2),s=c[0],f=c[1],p=Object(n.useState)(!0),d=Object(u.a)(p,2),b=d[0],E=d[1],g=Object(n.useState)(0),j=Object(u.a)(g,2),k=j[0],x=j[1],C=Object(n.useState)([]),I=Object(u.a)(C,2),w=I[0],P=I[1],S=Object(n.useState)([]),N=Object(u.a)(S,2),U=N[0],T=N[1],_=a._id;return Object(n.useEffect)((function(){function a(){return(a=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:e.sent.json().then((function(e){f(e.result[0]),E(!1)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){a.apply(this,arguments)}("https://bookymcbookface.herokuapp.com/users/find/".concat(e))}),[e,t,k,w,U]),void 0===s?r.a.createElement(O.a,null,"Not found..."):b?r.a.createElement(O.a,null,"Loading..."):r.a.createElement(W.a,{disableGutters:!0,maxWidth:"xl"},r.a.createElement(ze,{age:s.age,firstName:s.first_name,lastName:s.last_name,city:s.city,state:s.state,profilePic:s.profileImgUrl,friendsCurrent:s.friends.current,friendsPendIn:s.friends.pendIn,friendsPendOut:s.friends.pendOut,profileUser:s._id,setRefreshInfo:x,refreshInfo:k,authUser:_}),r.a.createElement(h.a,null,r.a.createElement(Ie,{profilePic:s.profileImgUrl,posts:s.posts.map((function(e){return e})),firstName:s.first_name,lastName:s.last_name,userId:s._id,deletedPosts:w,setDeletedPosts:P,userurl:s.userurl,likes:U,setLikes:T,refreshInfo:k,setRefreshInfo:x})))}var De=a(220),qe=Object(p.a)({cardStyles:{height:"15rem",width:"15rem"},avatarPic:{height:"125px",width:"125px",margin:"1rem auto",cursor:"pointer"},friendButton:{margin:"auto",textAlign:"center"}}),Je=function(e){var t=qe(),a=Object(m.g)();return r.a.createElement(K.a,{className:t.cardStyles},r.a.createElement(h.a,{onClick:function(){return a.push("/profile/".concat(e.profileUrl))}},r.a.createElement(Q.a,{src:e.profilePic,className:t.avatarPic})),r.a.createElement(O.a,{align:"center"},"".concat(e.first_name," ").concat(e.last_name)),r.a.createElement(h.a,{className:t.friendButton,onClick:function(){return e.setPageUpdates(e.pageUpdates+1)}},r.a.createElement(Ue,{authUser:e.authUser,profileUser:e.profileUser,current:e.friendsCurrent,pendIn:e.friendsPendIn,pendOut:e.friendsPendOut})))},We=Object(p.a)({UserIndexContainer:{}}),Me=function(){var e=Object(n.useContext)(v).user,t=Object(n.useContext)(y).accessToken,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1],m=Object(n.useState)(0),f=Object(u.a)(m,2),p=f[0],d=f[1],h=We();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookymcbookface.herokuapp.com/users",{method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:e.sent.json().then((function(e){s(e)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,p]),0!==c.length?r.a.createElement(De.a,{sm:"12",spacing:"5",justify:"center",container:!0,className:h.UserIndexContainer},c.map((function(t){return t._id!==e._id?r.a.createElement(De.a,{item:!0},r.a.createElement(Je,{first_name:t.first_name,last_name:t.last_name,pageUpdates:p,setPageUpdates:d,authUser:e._id,profileUser:t._id,profilePic:t.profileImgUrl,friendsCurrent:t.friends.current,friendsPendOut:t.friends.pendOut,friendsPendIn:t.friends.pendIn,profileUrl:t.userurl})):null}))):r.a.createElement(De.a,{sm:"12",spacing:"5",justify:"center",container:!0,className:h.UserIndexContainer},r.a.createElement(De.a,{item:!0},r.a.createElement(O.a,{variant:"h4"},"Loading..")))},Ge=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),f=s[0],p=s[1],d=Object(n.useState)(!0),h=Object(u.a)(d,2),b=h[0],E=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bookface-auth.herokuapp.com/userauth/curruser",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:e.sent.json().then((function(e){var t=e.user;console.log(t),o(t),p(e.token),E(!1)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.cookie.includes("loggedIn=true")?null==a&&function(){e.apply(this,arguments)}():E(!1)}),[a]),b?r.a.createElement(O.a,null,"Loading..."):r.a.createElement(v.Provider,{value:{user:a,setUser:o}},r.a.createElement(y.Provider,{value:{accessToken:f,setAccessToken:p}},r.a.createElement(J,null),a&&f?r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/auth",render:function(){return r.a.createElement("h1",null,"You're already logged in")}}),r.a.createElement(m.b,{path:"/logout",render:function(){return r.a.createElement("h1",null,"Logout route works")}}),r.a.createElement(m.b,{path:"/profile/:userurl",exact:!0,children:r.a.createElement(Fe,null)}),r.a.createElement(m.b,{path:"/dashboard",children:r.a.createElement(xe,null)}),r.a.createElement(m.b,{path:"/userIndex",children:r.a.createElement(Me,null)}),r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:"/dashboard"})}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("h1",null,"404 Not Found")}})):r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",children:r.a.createElement(T,null)}),r.a.createElement(m.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D.a,null,r.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.50849f64.chunk.js.map