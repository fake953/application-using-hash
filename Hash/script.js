window.addEventListener('hashchange',e=>{
	router()
})
function router(){
	switch(location.hash){
		case '':
			render({title:'HOME',color:"red",href:'#home'})
			break;
		case '#home':
			render({title:'HOME',color:"red",href:'#home'})
			break;
		case '#search':
			render({title:'SEARCH',color:"yellow",href:'#search'})
			break;
		case '#like':
			render({title:'LIKE',color:"yellow",href:'#like'})
			break;
		case '#person':
			render({title:'PERSON',color:"pink",href:'#person'})
			break;
				
	}
}
function render(request){
	document.querySelector('h1').innerText = request.title;
	document.querySelector('main').style.backgroundColor = request.color
	document.querySelectorAll('a').forEach(e=>{
		if(e.href.includes(request.href)){
			e.style.color='black'
		}else{
			e.style.color='#666'
		}
	})
}