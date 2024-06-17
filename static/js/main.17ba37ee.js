(()=>{var e={9361:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var n=a(467),i=a(5544),r=a(6665),l=a(9558),s=a(6283),o=a(3929),d=a(5991),c=a(7640),u=a(5708),f=a(530),g=a(7074),h=a(8833),y=a(1171),m=a(3117),p=a(8966),v=a(1063),x=a(9972),j=a(6773),b=a(8511),w=a(1385),S=a(4467),_=a(5149),O=a(8359),k=a(7869),C=a(9887),L=a(2604),M=a(8878),N=a(302),A=a(397),I=function(e){var t=(0,M.polygonCenter)(e.positions.latlng,N.EPSG3857),a=[{shapeType:"polyline",color:"#123123",id:"1",positions:e.positions.latlng.map((function(e){return{lat:e[0],lng:e[1]}}))},{shapeType:"polyline",color:"#fc5200",id:"2",positions:e.positions.fastestLatlng.map((function(e){return{lat:e[0],lng:e[1]}}))}],n={lat:t.lat,lng:t.lng};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"}),(0,A.jsx)(u.default,{onPressOut:function(e){return console.log(e)},style:{width:"100%",height:260},children:(0,A.jsx)(L.ExpoLeaflet,{loadingIndicator:function(){return(0,A.jsx)(f.default,{})},onMessage:function(){},mapCenterPosition:n,mapLayers:[{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',baseLayerIsChecked:!0,baseLayerName:"OpenStreetMap",layerType:"TileLayer",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}],mapOptions:{zoomControl:!1},mapShapes:a})})]})};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){(0,S.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e){(0,r.useEffect)((function(){b.default.configureNext(b.default.Presets.easeInEaseOut),x(!1),d(""),L(e.distanceMeasure),z(e.timeMeasure),y(!1),D({latlng:[],fastestLatlng:[]})}),[e.distanceMeasure,e.timeMeasure]);var t=(0,r.useState)(""),a=(0,i.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),g=(0,i.default)(c,2),h=g[0],y=g[1],m=(0,r.useState)(!1),p=(0,i.default)(m,2),v=p[0],x=p[1],j=(0,r.useState)("1000"),w=(0,i.default)(j,2),S=w[0],L=w[1],M=(0,r.useState)(""),N=(0,i.default)(M,2),T=N[0],z=N[1],E=(0,r.useState)({latlng:[],fastestLatlng:[]}),R=(0,i.default)(E,2),F=R[0],D=R[1];function W(){return(W=(0,n.default)((function*(){var t={start:{distance:0,time:0},end:{distance:0,time:0},distance:0,time:999999999999999,heartrate:0,elevation:{gain:0,loss:0},range:{start:0,end:0}};if(0===S||0===T)d(t);else if(l||"0"===S||""===S||!1!==h){if(!l&&"0"!==T&&""!==T&&!1===h){var a,n,i,r,s;y(!0);var o=yield U(e.activity.id),c=null==(a=o.altitude)?void 0:a.data,u=null==(n=o.distance)?void 0:n.data,f=null==(i=o.time)?void 0:i.data,g=null==(r=o.heartrate)?void 0:r.data,m=null==(s=o.latlng)?void 0:s.data;m&&D($($({},F),{},{latlng:m}));var p=t;if(e.activity.total_elevation_gain=Math.round(null==c?void 0:c.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==c?void 0:c.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),T>=e.activity.elapsed_time)return void d(void 0);if(u&&f){for(var v=f.slice(-1)-T,x=function*(e){var t=f.indexOf(f.slice(e).find((function(t){return t-f[e]>=T})));if(-1!==t){var a={distance:Math.round(10*(u[t]-u[e]))/10,time:f[t]-f[e],range:{start:e,end:t}};(a.time<p.time||a.time===p.time&&a.distance>p.distance)&&(p=a)}},j=0;f[j]<v;j++)yield*x(j);if(p){p.start={distance:u[p.range.start],time:f[p.range.start]},p.end={distance:u[p.range.end],time:f[p.range.end]},p.pace=B(Math.round(1e3/(u[p.range.end]-u[p.range.start])*(f[p.range.end]-f[p.range.start]))),p.heartrate=Math.round((null==g?void 0:g.slice(p.range.start,p.range.end+1).reduce((function(e,t){return e+t}),0))/(null==g?void 0:g.slice(p.range.start,p.range.end+1).length));var w=null==c?void 0:c.slice(p.range.start,p.range.end+1);p.elevation={gain:Math.round(null==w?void 0:w.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==w?void 0:w.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if(F.latlng.length>0){var _=m.slice(p.range.start,p.range.end+1);D($($({},F),{},{fastestLatLng:_}))}y(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(p===t?void 0:p)}else d(void 0)}}else{var O,k,C,L,M;y(!0);var N=yield U(e.activity.id),A=null==(O=N.altitude)?void 0:O.data,I=null==(k=N.distance)?void 0:k.data,z=null==(C=N.time)?void 0:C.data,P=null==(L=N.heartrate)?void 0:L.data,E=null==(M=N.latlng)?void 0:M.data;E&&D($($({},F),{},{latlng:E}));var R=t;if(e.activity.total_elevation_gain=Math.round(null==A?void 0:A.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==A?void 0:A.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),S>=e.activity.distance)return void d(void 0);if(I&&z){for(var W=I.slice(-1)-S,X=function*(e){var t=I.indexOf(I.slice(e).find((function(t){return t-I[e]>=S})));if(-1!==t){var a={distance:Math.round(10*(I[t]-I[e]))/10,time:z[t]-z[e],range:{start:e,end:t}};(a.time<R.time||a.time===R.time&&a.distance>R.distance)&&(R=a)}},H=0;I[H]<W;H++)yield*X(H);if(R){R.start={distance:I[R.range.start],time:z[R.range.start]},R.end={distance:I[R.range.end],time:z[R.range.end]},R.pace=B(Math.round(1e3/(I[R.range.end]-I[R.range.start])*(z[R.range.end]-z[R.range.start]))),R.heartrate=Math.round((null==P?void 0:P.slice(R.range.start,R.range.end+1).reduce((function(e,t){return e+t}),0))/(null==P?void 0:P.slice(R.range.start,R.range.end+1).length));var q=null==A?void 0:A.slice(R.range.start,R.range.end+1);R.elevation={gain:Math.round(null==q?void 0:q.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==q?void 0:q.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if(F.latlng.length>0){var J=E.slice(R.range.start,R.range.end+1);D($($({},F),{},{fastestLatLng:J}))}y(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(R===t?void 0:R)}else d(void 0)}}))).apply(this,arguments)}function B(e){var t=Math.floor(e/3600),a=e-3600*t,n=Math.floor(a/60);return`${0!==t?`${t}:`<10?`0${t}:`:`${t}:`:""}${n<10?`0${n}`:n}:${(a=e-60*n-3600*t)<10?`0${a}`:a} ${t>0?"h":"min"}`}(0,r.useEffect)((function(){F.latlng.length>0&&0===F.fastestLatlng.length&&D($($({},F),{},{fastestLatlng:F.latlng.slice(l.range.start,l.range.end+1)}))}),[F]);function U(e){return X.apply(this,arguments)}function X(){return(X=(0,n.default)((function*(t){return fetch(`https://www.strava.com/api/v3/activities/${t}/streams?access_token=${e.credentials.accessToken}&keys=time,distance,heartrate,altitude,latlng&key_by_type=true`).then((function(e){return e.json()}))}))).apply(this,arguments)}return console.log(F),(0,A.jsxs)(u.default,{style:P.item,onPressIn:function(){!function(){W.apply(this,arguments)}(e.activity),b.default.configureNext(b.default.Presets.easeInEaseOut),x(!v)},children:[(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${e.activity.name}`}),(0,A.jsx)(s.default,{children:`${new Date(e.activity.start_date).toLocaleDateString()}`}),(0,A.jsx)(u.default,{onPress:function(){return C.openURL(`https://www.strava.com/activities/${e.activity.id}`)},children:(0,A.jsx)(s.default,{style:{color:"blue",textDecorationColor:"blue",textDecorationLine:"underline"},children:"View on Strava"})}),v&&"0"!==S&&"0"!==T?(0,A.jsxs)(o.default,{style:{width:"100%"},children:[(0,A.jsx)(o.default,{style:P.separator}),(0,A.jsx)((function(){return void 0===l||"0"===S||"0"===T?(0,A.jsx)(o.default,{style:P.modalContainer,children:(0,A.jsxs)(o.default,{style:[P.modalLine,{justifyContent:"space-evenly"}],children:[(0,A.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,A.jsx)(_.default,{style:{textAlign:"center",alignSelf:"center"},name:"timer",size:28}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,A.jsx)(k.default,{style:{textAlign:"center",alignSelf:"center"},name:"map-marker-distance",size:28}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,A.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,A.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,A.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[m]"})]}),(0,A.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${B(e.activity.elapsed_time)}`}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:Math.round(e.activity.distance/10)/100+" km"}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${B(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${Math.round(e.activity.average_heartrate)}`}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,A.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]})]})}):l?(0,A.jsxs)(o.default,{style:P.modalContainer,children:[(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.distance} m`}),(0,A.jsx)(k.default,{style:{display:"flex",alignItems:"center"},name:"map-marker-distance",size:28}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:Math.round(e.activity.distance/10)/100+" km"})]}),(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${B(l.time)}`}),(0,A.jsx)(_.default,{style:{display:"flex",alignItems:"center"},name:"timer",size:28}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(e.activity.elapsed_time)}`})]}),(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.pace.replace(" min","").replace(" h","")}`}),(0,A.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`})]}),(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:""+Math.round((l.end.distance-l.start.distance)/(l.end.time-l.start.time)*3.6*10)/10}),(0,A.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(l.heartrate)&&(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.heartrate}`}),(0,A.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${Math.round(e.activity.average_heartrate)}`})]}),!isNaN(l.elevation.gain)&&!isNaN(l.elevation.loss)&&(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`+${l.elevation.gain} / -${l.elevation.loss}`}),(0,A.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[m]"}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]}),(0,A.jsx)(o.default,{style:{width:"100%"},children:(0,A.jsx)(o.default,{style:P.separator})}),F.latlng.length>0?(0,A.jsx)(I,{positions:F}):(0,A.jsx)(A.Fragment,{}),(0,A.jsxs)(o.default,{style:[P.modalLine,{display:"flex",marginTop:8}],children:[(0,A.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:Math.round(l.start.distance)/1e3+" km"}),(0,A.jsx)(O.default,{style:{display:"flex",alignItems:"center"},name:"at",size:24}),(0,A.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(l.start.time)}`})]})]}):h?(0,A.jsx)(f.default,{color:"black"}):null}),{})]}):null]})}var P=l.default.create({item:{marginHorizontal:16,marginTop:16,alignItems:"center",backgroundColor:"#fc5200",borderRadius:20,padding:10,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},modalContainer:{flex:1,justifyContent:"center",alignItems:"center"},modal:{width:"90%",marginLeft:"5%",backgroundColor:"#fc5200",borderRadius:20,padding:35,alignItems:"center",justifyContent:"center",boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4,elevation:5},modalLine:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},separator:{height:2,backgroundColor:"black",marginTop:8,marginBottom:8},name:{fontSize:24}});function E(e){var t=(0,r.useState)([]),a=(0,i.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),g=(0,i.default)(c,2),h=g[0],y=g[1],m=(0,r.useState)(!0),p=(0,i.default)(m,2),v=p[0],S=p[1],_=(0,r.useState)(1),O=(0,i.default)(_,2),k=O[0],C=O[1],L=(0,r.useState)("1000"),M=(0,i.default)(L,2),N=M[0],I=M[1],T=(0,r.useState)(""),$=(0,i.default)(T,2),P=$[0],E=$[1];function F(e){return D.apply(this,arguments)}function D(){return(D=(0,n.default)((function*(t){t?y(!0):S(!0),fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${e.credentials.accessToken}&per_page=10&page=${t?1:k}`).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.isExpanded=!1})),d(t?e:l.concat(e)),C(k+1)})).catch((function(e){return console.log(e)})).finally((function(){y(!1),S(!1)}))}))).apply(this,arguments)}return(0,r.useEffect)((function(){void 0!==e.credentials.accessToken&&F(!1)}),[e.credentials]),(0,A.jsx)(A.Fragment,{children:v&&0===l.length?(0,A.jsx)(f.default,{style:{marginTop:16},size:"large",color:"black"}):(0,A.jsx)(x.default,{style:{alignSelf:"center",width:"100%",maxWidth:700},data:l,renderItem:function(t){var a=t.item;return(0,A.jsx)(z,{activity:a,distanceMeasure:N,timeMeasure:P,credentials:e.credentials})},keyExtractor:function(e){return e.id},keyboardDismissMode:"onDrag",onRefresh:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),F(!0)},refreshing:h,ListHeaderComponent:(0,A.jsxs)(o.default,{style:R.item,children:[(0,A.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,A.jsx)(s.default,{style:{fontSize:24},children:"Distance [m]"}),(0,A.jsx)(j.default,{style:R.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?I(0):E(""),I(t)},value:N.toString()})]}),(0,A.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between",marginTop:5},children:[(0,A.jsx)(s.default,{style:{fontSize:24},children:"Time [s]"}),(0,A.jsx)(j.default,{style:R.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?E(""):I(""),E(t)},value:P.toString()})]})]}),ListFooterComponent:(0,A.jsx)(u.default,{style:[R.item,{marginBottom:16,alignItems:"center"}],onPress:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),F(!1)},children:v?(0,A.jsx)(f.default,{style:{marginTop:19,marginBottom:19},color:"black"}):(0,A.jsxs)(o.default,{style:{flexDirection:"row",marginTop:13,marginBottom:13},children:[(0,A.jsx)(w.default,{name:"reload-circle",size:28,color:"black"}),(0,A.jsx)(s.default,{style:{fontSize:24},children:" Load more"})]})})})})}var R=l.default.create({item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}}),F=a(2291),D=a(4081),W=a(4056),B=a(2858),U=a(6787),X=a(3718);p.maybeCompleteAuthSession();var H={authorizationEndpoint:"https://www.strava.com/oauth/mobile/authorize",tokenEndpoint:"https://eou0f5t5ol4avvx.m.pipedream.net",revocationEndpoint:"https://www.strava.com/oauth/deauthorize"};function q(){var e=(0,r.useState)(!1),t=(0,i.default)(e,2),a=t[0],l=t[1],p=(0,r.useState)({}),x=(0,i.default)(p,2),j=x[0],b=x[1],w=(0,r.useState)(!0),S=(0,i.default)(w,2),_=S[0],O=S[1],k=(0,r.useState)(""),C=(0,i.default)(k,2),L=C[0],M=C[1],N=(0,r.useState)(!1),I=(0,i.default)(N,2),T=I[0],$=I[1],z=function(){var e=(0,n.default)((function*(){(0,v.exchangeCodeAsync)({clientId:null==q?void 0:q.clientId,redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:null==V?void 0:V.params.code},H).then((function(e){"web"!==d.default.OS&&F.setItemAsync("credentials",JSON.stringify(e)),b(e),O(!1),l(!0)})).catch((function(){M("rate_limit"),O(!1)}))}));return function(){return e.apply(this,arguments)}}(),P=(0,v.useAuthRequest)({clientId:"80072",scopes:["activity:read_all"],redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"})},H),R=(0,i.default)(P,3),q=R[0],V=R[1],G=R[2],K=function(){var e=(0,n.default)((function*(){"web"!==d.default.OS&&(yield F.deleteItemAsync("credentials")),yield fetch(`https://www.strava.com/oauth/deauthorize?access_token=${j.accessToken}`,{method:"POST"}),l(!1),O(!1)}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){O(!0);var e=function(){var e=(0,n.default)((function*(){return yield F.isAvailableAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,n.default)((function*(){return yield F.getItemAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),a=JSON.parse(yield t());if((yield e())&&null!==a){if(!v.TokenResponse.isTokenFresh(a)){var i=yield(0,v.refreshAsync)({clientId:"80072",refreshToken:a.refreshToken},H);return b(i),l(!0),void O(!1)}b(a),l(!0),O(!1)}}));return function(){return e.apply(this,arguments)}}();"web"!==d.default.OS&&e()}),[]),(0,r.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){O(!0),$(!0);var e=new URLSearchParams(window.location.search),t={};for(var a of e){var n=(0,i.default)(a,2),r=n[0],s=n[1];t[r]=s}var o=location.href.split("?")[0];window.history.pushState("object",document.title,o),void 0!==t.code&&void 0!==t.scope&&void 0!==t.state?"read,activity:read_all"===t.scope||"activity:read_all,read"===t.scope?(0,v.exchangeCodeAsync)({clientId:"80072",redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:t.code},H).then((function(e){b(e),O(!1),M(""),l(!0)})).catch((function(){M("rate_limit"),O(!1)})):(M("wrong_scope"),O(!1)):void 0!==t.error?(M("wrong_scope"),O(!1)):(M(""),O(!1))}));return function(){return e.apply(this,arguments)}}();"web"===d.default.OS&&e()}),[]),(0,r.useEffect)((function(){"success"===(null==V?void 0:V.type)?"read,activity:read_all"===(null==V?void 0:V.params.scope)||"activity:read_all,read"===(null==V?void 0:V.params.scope)?(M(""),z()):(M("wrong_scope"),O(!1)):"error"===(null==V?void 0:V.type)?(M("wrong_scope"),O(!1)):null===q||T||(M(""),O(!1))}),[V]),(0,r.useEffect)((function(){console.log({Platform:d.default,loggedIn:a,credentials:j,loading:_,errorState:L,request:q,response:V})})),"android"===d.default.OS&&c.default.setLayoutAnimationEnabledExperimental(!0),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m.default,{backgroundColor:"#fc5200"}),(0,A.jsx)(h.SafeAreaProvider,{children:(0,A.jsxs)(y.SafeAreaView,{style:{flex:1},children:[(0,A.jsx)(o.default,{style:[J.topBar,{flexDirection:"row",justifyContent:"center"}],children:(0,A.jsxs)(o.default,{style:{alignItems:"center",flexDirection:"row",width:"100%",maxWidth:700,justifyContent:"space-between"},children:[(0,A.jsx)(s.default,{style:J.title,children:"FastestX"}),a&&!L&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g.Image,{style:{height:43,width:104},contentFit:"contain",source:W}),(0,A.jsx)(u.default,{onPress:function(){O(!0),K()},style:{marginRight:16,justifyContent:"center"},children:(0,A.jsx)(D.default,{name:"logout",size:24,color:"black"})})]})]})}),_?(0,A.jsxs)(o.default,{style:{marginTop:16,justifyContent:"space-between",flex:1},children:[(0,A.jsx)(f.default,{size:"large",color:"black"}),(0,A.jsx)(g.Image,{style:{width:"100%",height:63,marginTop:16},contentFit:"contain",source:U})]}):a&&!L?(0,A.jsx)(E,{credentials:j}):(0,A.jsxs)(o.default,{style:{flex:1,justifyContent:"space-between",alignSelf:"stretch",justifySelf:"stretch"},children:[(0,A.jsxs)(o.default,{children:["wrong_scope"===L?(0,A.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX needs the permission to read all of your activities' data to work."}):(0,A.jsx)(A.Fragment,{}),"rate_limit"===L?(0,A.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX reached it's usage limit. It will work again tomorrow."}):(0,A.jsx)(A.Fragment,{}),(0,A.jsx)(u.default,{style:{marginTop:16},onPress:function(){O(!0),G()},children:(0,A.jsx)(g.Image,{style:{height:48},contentFit:"contain",source:B})}),(0,A.jsx)(o.default,{style:{marginTop:16},children:(0,A.jsx)(s.default,{style:{textAlign:"center"},children:"Log in to see your activities"})}),(0,A.jsx)(g.Image,{style:{height:500,marginTop:16},contentFit:"contain",source:X})]}),(!a||L)&&(0,A.jsx)(g.Image,{style:{width:"100%",height:63},contentFit:"contain",source:U})]})]})})]})}var J=l.default.create({container:{display:"flex"},topBar:{height:43,backgroundColor:"#fc5200"},title:{paddingLeft:16,fontSize:32},item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}})},6787:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_light.761875a979df9ddcff63.svg"},4056:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_white.a3a1cb97b4c52945cd53.svg"},2858:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/btn_strava_connectwith_orange.d61a51baedcfa2ed1280.svg"},3718:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/demo.a225dedf09db6a0446c9.jpg"},2634:()=>{}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,(()=>{var e=[];a.O=(t,n,i,r)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,i,r]=e[c],s=!0,o=0;o<n.length;o++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](n[o])))?n.splice(o--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/FastestX/",(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[l,s,o]=n,d=0;if(l.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(o)var c=o(a)}for(t&&t(n);d<l.length;d++)r=l[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[25],(()=>a(605)));var n=a.O(void 0,[25],(()=>a(5036)));n=a.O(n)})();
//# sourceMappingURL=main.17ba37ee.js.map