(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(50)},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(16),c=n.n(o),i=n(11),d=n(6),l=n(26),s=n(27),u=n(31),b=n(28),g=n(32),m=a.a.createContext({draggedObject:null,grabDraggable:function(){},registerAsDroppable:function(){}}),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={draggedObjectPosition:null},n.draggedObject=null,n.hoveredDroppable=null,n.droppables={},n.registerAsDroppable=function(e){n.droppables[e.id]=e},n.grabDraggable=function(e,t,r,a,o,c){if(null===n.draggedObject)if(a.current){var i=a.current.getBoundingClientRect();n.draggedObject={context:t,type:r,renderElement:o,onRelease:c,geometry:{width:i.right-i.left,height:i.bottom-i.top,grabShift:{x:i.left-e.x,y:i.top-e.y}},position:{x:i.left,y:i.top}},n.dndContext=Object(d.a)({},n.dndContext,{draggedObject:n.draggedObject}),n.manageDroppables(),n.setState({draggedObjectPosition:n.draggedObject.position},function(){document.addEventListener("mousemove",n.moveDraggable),document.addEventListener("mouseup",n.releaseDraggable)})}else console.error("Null ref to grabbed node");else console.error("Grabbing object while object already grabbed")},n.dndContext={draggedObject:null,grabDraggable:n.grabDraggable,registerAsDroppable:n.registerAsDroppable},n.moveDraggable=function(e){var t=e.clientX,r=e.clientY;if(null!==n.state.position){var a=n.draggedObject.geometry,o={x:t+a.grabShift.x,y:r+a.grabShift.y};n.draggedObject.position=o,n.manageDroppables(),n.setState({draggedObjectPosition:o})}else console.warn("Position is null in moveDraggable")},n.findDroppable=function(e){var t=n.draggedObject.node;t&&(t.style.visibility="hidden");var r=document.elementFromPoint(e.x,e.y);return t&&(t.style.visibility="visible"),null==r?null:r.closest(".droppable-".concat(n.draggedObject.type))},n.releaseDraggable=function(){var e=n.draggedObject,t=n.hoveredDroppable;document.removeEventListener("mousemove",n.moveDraggable),document.removeEventListener("mouseup",n.releaseDraggable),n.draggedObject=null,n.hoveredDroppable=null,n.dndContext.draggedObject=null,n.setState({draggedObjectPosition:null}),null!==e?null!==t?(e.onRelease({draggableContext:e.context,droppableContext:t.context}),t.onDraggableLeave()):console.error("Releasing draggable, which does not hover any droppable"):console.error("Releasing draggable while have not grabbed one yet")},n.setDraggedObjectRef=function(e){n.draggedObject&&(n.draggedObject.node=e)},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"manageDroppables",value:function(){var e=this.draggedObject,t=e.position,n=e.geometry,r=this.hoveredDroppable,a=this.findDroppable({x:t.x+n.width/2,y:t.y+n.height/2});a&&((!r||a.id!==r.id)&&(r&&r.onDraggableLeave(),this.hoveredDroppable=this.droppables[a.id],this.hoveredDroppable.onDraggableEnter(this.draggedObject)),this.hoveredDroppable.onDraggableHover(this.draggedObject))}},{key:"render",value:function(){var e=this.props.children,t=this.state.draggedObjectPosition,n=this.draggedObject,r=this.dndContext;return a.a.createElement(a.a.Fragment,null,n&&n.renderElement({clientPosition:t,draggedObjectRef:this.setDraggedObjectRef}),a.a.createElement(m.Provider,{value:r},e))}}]),t}(a.a.Component),f=n(7),E=n.n(f);function O(e){var t=e.context,n=e.type,a=e.node,o=e.dragHandle,c=e.renderElement,i=e.onRelease,d=Object(r.useContext)(m).grabDraggable;Object(r.useEffect)(function(){var e=function(e){var r=e.clientX,o=e.clientY;d({x:r,y:o},t,n,a,c,i),e.stopPropagation()},r=o.current;return r.addEventListener("mousedown",e),function(){r.removeEventListener("mousedown",e)}},[d,t,n,a,c,i,o])}var v={CARD:"CARD",LIST:"LIST"},j={REQUEST:"@@board/FETCH_BOARD_REQUEST",SUCCESS:"@@board/FETCH_BOARD_SUCCESS",ERROR:"@@board/FETCH_BOARD_ERROR"},h="@@board/MOVE_CARD",R="@@board/MOVE_LIST",x={REQUEST:"@@board/ADD_CARD_REQUEST",SUCCESS:"@@board/ADD_CARD_SUCCESS",ERROR:"@@board/ADD_CARD_ERROR"},C={REQUEST:"@@board/ADD_LIST_REQUEST",SUCCESS:"@@board/ADD_LIST_SUCCESS",ERROR:"@@board/ADD_LIST_ERROR"},S=function(e){return{type:j.SUCCESS,board:e}},y=function(e){return{type:j.ERROR,error:e}},D=function(e,t){return{type:x.SUCCESS,listId:e,card:t}},L=function(e){return{type:x.ERROR,error:e}},T=function(e,t){return{type:C.SUCCESS,boardId:e,list:t}},I=function(e){return{type:C.ERROR,error:e}};function w(e){var t=e.x,n=e.y;return{position:"fixed",left:"".concat(t,"px"),top:"".concat(n,"px")}}n(42);function N(e){var t=e.id,n=e.content,o=e.setCardRef,c=e.moveCardToList,i=e.className,d=Object(r.useRef)(null);O({context:{id:t},type:v.CARD,node:d,dragHandle:d,renderElement:function(e){var t=e.clientPosition,r=e.draggedObjectRef;return a.a.createElement("div",{ref:r,className:E()("card","dragged",i),style:w(t)},a.a.createElement("h4",{className:"card-content"},n))},onRelease:function(e){var t=e.draggableContext,n=e.droppableContext;c(t.id,n.id,n.index)}});return a.a.createElement("div",{id:t,ref:function(e){o(e),d.current=e},className:E()("card",i)},a.a.createElement("h4",{className:"card-content"},n))}N.defaultProps={className:""};var A={moveCardToList:function(e,t,n){return{type:h,cardId:e,destinationListId:t,indexInList:n}}},k=Object(i.b)(null,A)(N),U=n(13),_=n(14),B=n.n(_);n(44);function P(e){var t=e.openCreationFormBtnText,n=e.placeholderFormText,o=e.submitFormBtnText,c=e.onAdd,i=e.className,d=e.formClassName,l=Object(r.useState)(!1),s=Object(U.a)(l,2),u=s[0],b=s[1],g=Object(r.useState)(""),m=Object(U.a)(g,2),p=m[0],f=m[1],O=Object(r.useCallback)(function(e){var t=e.target.value;f(t)},[]),v=Object(r.useCallback)(function(){f(""),b(!1)},[]),j=Object(r.useCallback)(function(){c(p),v()},[p,v,c]),h=(Object(r.useRef)(null),Object(r.useCallback)(function(){b(!0)},[])),R=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)(function(){t.current=B.a.uniqueId(e)},[e]),t.current}("add-component");return function(e,t){var n=Object(r.useCallback)(function(n){!n.target.closest("#".concat(e))&&t()},[e,t]);Object(r.useEffect)(function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}},[n])}(R,Object(r.useCallback)(function(){b(!1)},[])),a.a.createElement("div",{id:R,className:E()("add-component-wrapper",i)},a.a.createElement("button",{className:E()("open-component-composer-btn",u&&"hidden"),onClick:h},a.a.createElement("h4",null,t)),a.a.createElement("div",{className:E()("component-composer",d,!u&&"hidden")},a.a.createElement("textarea",{autoFocus:!0,className:"component-content",value:p,placeholder:n,onChange:O}),a.a.createElement("div",{className:"component-composer-controls"},a.a.createElement("button",{className:"add-component-btn",onClick:j},o),a.a.createElement("button",{className:"close-btn",onClick:v}))))}P.defaultProps={formClassName:"",className:""};var F=P;var H={PLACEHOLDER:"PLACEHOLDER",REGULAR_ITEM:"REGULAR_ITEM"};function Q(e){var t=e.id,n=e.acceptedType,a=e.items,o=e.isPositionLess,c=Object(r.useRef)(null),i=Object(r.useRef)([]),d=Object(r.useRef)({id:t,index:null}),l=Object(r.useState)(null),s=Object(U.a)(l,2),u=s[0],b=s[1],g=Object(r.useState)(null),p=Object(U.a)(g,2),f=p[0],E=p[1],O=Object(r.useCallback)(function(e){E({width:e.geometry.width,height:e.geometry.height})},[]),v=Object(r.useCallback)(function(e){var t={x:e.position.x+e.geometry.width/2,y:e.position.y+e.geometry.height/2},n=function(e,t){for(var n=0,r=e.length-1;n<=r;){var a=Math.floor((n+r)/2);t(e[a])?r=a-1:n=a+1}return n<e.length?n:null}(i.current,function(e){var n=e.getBoundingClientRect(),r={x:n.left+n.width/2,y:n.top+n.height/2};return o(t,r)});n=null!==n?n:i.current.length,d.current.index=n,b(n)},[o]),j=Object(r.useCallback)(function(){E(null),b(null),d.current.index=null},[]),h=function(e){var t=e.id,n=e.context,a=e.node,o=e.acceptedType,c=e.onDraggableEnter,i=e.onDraggableHover,d=e.onDraggableLeave,l=Object(r.useContext)(m),s=l.draggedObject;return(0,l.registerAsDroppable)({id:t,node:a,context:n,onDraggableEnter:c,onDraggableHover:i,onDraggableLeave:d}),{draggableContext:s&&s.context,droppableClassName:"droppable-".concat(o)}}({id:t,context:d.current,node:c,acceptedType:n,onDraggableEnter:O,onDraggableHover:v,onDraggableLeave:j}),R=h.draggableContext,x=h.droppableClassName,C=Object(r.useCallback)(function(e,t){e&&(i.current[t]=e)},[]),S=a.map(function(e){return{type:H.REGULAR_ITEM,data:e}});if(null!==u&&S.splice(u,0,{type:H.PLACEHOLDER,index:u,geometry:f}),null!==R){var y=S.findIndex(function(e){return e.type===H.REGULAR_ITEM&&e.data.id===R.id});-1!==y&&S.splice(y,1)}return{listItems:S,listNode:c,setItemAt:C,droppableClassName:x}}n(45);function M(e){var t=e.id,n=e.name,o=e.cards,c=e.addCard,i=e.setListRef,d=e.moveList,l=e.className,s=Object(r.useCallback)(function(e,t){return e.y<=t.y},[]),u=Q({id:t,acceptedType:v.CARD,items:o,isPositionLess:s}),b=u.listNode,g=u.setItemAt,m=u.listItems,p=u.droppableClassName,f=Object(r.useRef)(null);O({context:{id:t},type:v.LIST,node:b,dragHandle:f,renderElement:function(e){var r=e.clientPosition,o=e.draggedObjectRef;return a.a.createElement("div",{id:t,ref:o,className:E()("card-list","dragged",l),style:w(r)},a.a.createElement("header",null,a.a.createElement("h2",{className:"list-title"},n)),Boolean(m.length)&&a.a.createElement("ul",{className:"list-cards"},m.map(function(e,t){return a.a.createElement(k,Object.assign({key:e.data.id},e.data,{className:"list-card",setCardRef:function(e){return g(e,t)}}))})),a.a.createElement("footer",null,a.a.createElement(F,{className:"add-card-btn",openCreationFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",placeholderFormText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",submitFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onAdd:c.bind(null,t)})))},onRelease:function(e){var t=e.draggableContext,n=e.droppableContext;d(t.id,n.id,n.index)}});return a.a.createElement("div",{id:t,ref:function(e){i(e),b.current=e},className:E()("card-list",p,l)},a.a.createElement("header",{ref:f},a.a.createElement("h2",{className:"list-title"},n)),Boolean(m.length)&&a.a.createElement("ul",{className:"list-cards"},m.map(function(e,t){switch(e.type){case H.REGULAR_ITEM:return a.a.createElement("li",{key:e.data.id},a.a.createElement(k,Object.assign({},e.data,{className:"list-card",setCardRef:function(e){return g(e,t)}})));case H.PLACEHOLDER:return a.a.createElement("li",{key:"placeholder_at_idx_".concat(e.index),ref:function(e){return g(e,t)},className:"placeholder list-card",style:{width:e.geometry&&e.geometry.width,height:e.geometry&&e.geometry.height}});default:console.error("Unknown item type",e.type)}return null})),a.a.createElement("footer",null,a.a.createElement(F,{className:"add-card-btn",openCreationFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",placeholderFormText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",submitFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onAdd:c.bind(null,t)})))}M.defaultProps={className:""};var G={addCard:function(e,t){return{type:x.REQUEST,listId:e,content:t}},moveList:function(e,t,n){return{type:R,listId:e,destinationBoardId:t,indexInBoard:n}}},q=Object(i.b)(null,G)(M),J=function(e){return e.board.board};n(46);function V(e){var t=e.id,n=e.background,o=e.lists,c=e.addList,i="img"===n.type?"url(".concat(n.url,") no-repeat"):n.color,d=Object(r.useMemo)(function(){return{background:i,backgroundSize:"cover"}},[i]),l=Object(r.useCallback)(function(e,t){return e.x<=t.x},[]),s=Q({id:t,acceptedType:v.LIST,items:o,isPositionLess:l}),u=s.listNode,b=s.setItemAt,g=s.listItems,m=s.droppableClassName;return a.a.createElement("div",{id:t,ref:u,className:E()("board",m),style:d},a.a.createElement("ul",{className:"board-lists"},g.map(function(e,t){switch(e.type){case H.REGULAR_ITEM:return a.a.createElement("li",{key:e.data.id},a.a.createElement(q,Object.assign({className:"board-list"},e.data,{setListRef:function(e){return b(e,t)}})));case H.PLACEHOLDER:return a.a.createElement("li",{key:"placeholder_at_idx_".concat(e.index),ref:function(e){return b(e,t)},className:"placeholder board-list",style:{width:e.geometry&&e.geometry.width,height:e.geometry&&e.geometry.height}});default:console.error("Unknown item type",e.type)}return null}),a.a.createElement(F,{className:"add-list-wrapper",formClassName:"add-list-form",openCreationFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443",placeholderFormText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438",submitFormBtnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443",onAdd:c.bind(null,t)})))}var W={fetchBoard:function(e){return{type:j.REQUEST,id:e}},addList:function(e,t){return{type:C.REQUEST,boardId:e,content:t}}},X=Object(i.b)(function(e){return{board:J(e)}},W)(function(e){var t=e.id,n=e.board,o=e.fetchBoard,c=e.addList;return Object(r.useEffect)(function(){o(t)},[o,t]),n&&a.a.createElement(V,Object.assign({addList:c},n))});var Y=function(){return a.a.createElement(p,null,a.a.createElement(X,{id:0}))},z=n(30),K=n(9),Z=n(29),$=n(19),ee={board:null},te=Object(K.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SUCCESS:return Object(d.a)({},e,{board:{id:t.board.id,name:t.board.name,lists:t.board.lists,background:t.board.background}});case h:var n=t.cardId,r=t.destinationListId,a=t.indexInList,o=null,c=e.board.lists.map(function(e){var t=e.cards.find(function(e){return e.id===n});return t?(o=t,Object(d.a)({},e,{cards:e.cards.filter(function(e){return e.id!==n})})):e});if(o){var i=c.find(function(e){return e.id===r});i?i.cards.splice(a,0,o):console.error("List with id",r,"not found")}else console.error("List containing card with id",n,"not found");return Object(d.a)({},e,{board:Object(d.a)({},e.board,{lists:c})});case R:var l=t.listId,s=t.destinationBoardId,u=t.indexInBoard;e.board.id!==s&&console.error("Board destination id does not match current board id");var b=e.board.lists.findIndex(function(e){return e.id===l});if(u===b)return e;var g=e.board.lists[b],m=b+(u<b?1:0),p=Object($.a)(e.board.lists);return p.splice(u,0,g),p.splice(m,1),Object(d.a)({},e,{board:Object(d.a)({},e.board,{lists:p})});case x.SUCCESS:var f=e.board.lists.map(function(e){return e.id===t.listId?Object(d.a)({},e,{cards:[].concat(Object($.a)(e.cards),[t.card])}):e});return Object(d.a)({},e,{board:Object(d.a)({},e.board,{lists:f})});case C.SUCCESS:return Object(d.a)({},e,{board:Object(d.a)({},e.board,{lists:[].concat(Object($.a)(e.board.lists),[t.list])})});default:return e}}}),ne=n(8),re=n.n(ne),ae=n(4),oe=0,ce={id:(oe++).toString(),name:"\u041c\u043e\u044f \u0434\u043e\u0441\u043a\u0430",background:{type:"img",url:"https://images.unsplash.com/photo-1508625935447-e0ebc2cdf6bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100"},lists:[{id:(oe++).toString(),name:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",cards:[{id:(oe++).toString(),content:"\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React"},{id:(oe++).toString(),content:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"},{id:(oe++).toString(),content:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u0436\u0438\u0442\u044c \u0432 \u041b\u043e\u043d\u0434\u043e\u043d"},{id:(oe++).toString(),content:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u044d\u043a\u0435\u043d\u0434 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 node.js"},{id:(oe++).toString(),content:"\u0421\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"},{id:(oe++).toString(),content:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u0443\u044e \u0441\u0442\u0430\u0442\u044c\u044e \u0432 \u0431\u043b\u043e\u0433"},{id:(oe++).toString(),content:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 \u043c\u043e\u0442\u043e\u0448\u043a\u043e\u043b\u0443. \u0425\u043e\u0442\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0448\u043d\u043e\u0432\u0430\u0442\u043e, \u043a\u043e\u043d\u0435\u0447\u043d\u043e. \u0414\u0440\u0443\u0437\u044c\u044f \u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u043f\u0440\u043e\u0442\u0438\u0432, \u043d\u043e \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0447\u0435\u0442\u0441\u044f. \u041d\u043e \u043a\u043e\u0433\u043e \u044f \u043e\u0431\u043c\u0430\u043d\u044b\u0432\u0430\u044e, \u0443\u0436\u0435 2 \u0433\u043e\u0434\u0430 \u0440\u0435\u0448\u0430\u044e\u0441\u044c \u043d\u0430 \u044d\u0442\u043e\u0442 \u0448\u0430\u0433 \ud83d\ude22 \u0415\u0449\u0435 \u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0443\u0441\u0442\u0438\u043a\u043e\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c. \u0412 \u043e\u0431\u0449\u0435\u043c, \u0445\u043e\u0442\u044f \u0431\u044b \u043f\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u043d\u0430\u0434 \u044d\u0442\u0438\u043c."},{id:(oe++).toString(),content:"\u041d\u0435\u0442, \u044f \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u0438\u0434\u0443 \u0432 \u043c\u043e\u0442\u043e\u0448\u043a\u043e\u043b\u0443. \u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0441\u044c!"},{id:(oe++).toString(),content:"\u0412\u044b\u0441\u043f\u0430\u0442\u044c\u0441\u044f"},{id:(oe++).toString(),content:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0433\u0440\u0443 \u043f\u0440\u0435\u0441\u0442\u043e\u043b\u043e\u0432"},{id:(oe++).toString(),content:"\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c"},{id:(oe++).toString(),content:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0443\u0431\u043e\u0440\u043a\u0443"},{id:(oe++).toString(),content:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043b"},{id:(oe++).toString(),content:"\u041a\u0443\u043f\u0438\u0442\u044c \u043e\u0431\u043e\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044c"}]},{id:(oe++).toString(),name:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043d\u0435\u0434\u0435\u043b\u044e",cards:[{id:(oe++).toString(),content:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c To-Do app"},{id:(oe++).toString(),content:"\u041e\u0442\u043b\u043e\u0436\u0438\u0442\u044c 2000 \u0440\u0443\u0431\u043b\u0435\u0439"},{id:(oe++).toString(),content:"\u041d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u043b\u0430\u043a\u0430\u0442 \xab\u041c\u0430\u0433\u0438\u0438 \u043d\u0435\u0442\xbb"}]},{id:(oe++).toString(),name:"\u041f\u043b\u0430\u043d \u043d\u0430 \u0434\u0435\u043d\u044c",cards:[{id:(oe++).toString(),content:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441 \u043f\u043e React"},{id:(oe++).toString(),content:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u0440 \u043d\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0443"},{id:(oe++).toString(),content:"\u041d\u0430\u043a\u0438\u0434\u0430\u0442\u044c \u0442\u0435\u043c \u0434\u043b\u044f \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0431\u043b\u043e\u0433"}]},{id:(oe++).toString(),name:"\u0418\u0442\u043e\u0433\u0438",cards:[]}]};function ie(e){return ce}function de(e,t){return{listId:e,card:{id:B.a.uniqueId("card"),content:t}}}function le(e,t){return{boardId:e,list:{id:B.a.uniqueId("list"),name:t,cards:[]}}}var se=re.a.mark(me),ue=re.a.mark(pe),be=re.a.mark(fe),ge=re.a.mark(Ee);function me(e){var t,n;return re.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(ae.b)(ie,t);case 4:return n=r.sent,r.next=7,Object(ae.c)(S(n));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(ae.c)(y(r.t0));case 13:case"end":return r.stop()}},se,null,[[1,9]])}function pe(e){var t,n,r;return re.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.listId,n=e.content,a.prev=1,a.next=4,Object(ae.b)(de,t,n);case 4:return r=a.sent,a.next=7,Object(ae.c)(D(r.listId,r.card));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(ae.c)(L(a.t0));case 13:case"end":return a.stop()}},ue,null,[[1,9]])}function fe(e){var t,n,r;return re.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.boardId,n=e.content,a.prev=1,a.next=4,Object(ae.b)(le,t,n);case 4:return r=a.sent,a.next=7,Object(ae.c)(T(r.boardId,r.list));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(ae.c)(I(a.t0));case 13:case"end":return a.stop()}},be,null,[[1,9]])}function Ee(){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)([Object(ae.d)(j.REQUEST,me),Object(ae.d)(x.REQUEST,pe),Object(ae.d)(C.REQUEST,fe)]);case 2:case"end":return e.stop()}},ge)}var Oe=re.a.mark(ve);function ve(){return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)([Object(ae.b)(Ee)]);case 2:case"end":return e.stop()}},Oe)}var je=Object(z.a)(),he=Object(K.createStore)(te,{},Object(Z.composeWithDevTools)(Object(K.applyMiddleware)(je)));je.run(ve);n(48),n(49);c.a.render(a.a.createElement(i.a,{store:he},a.a.createElement(Y,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cd0f7f03.chunk.js.map