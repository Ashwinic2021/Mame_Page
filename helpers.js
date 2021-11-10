export const onSearchChange = (event, props) => {
    if(event.clear){
        props.setSearch("")
    }else if (event.which === 13 ) {
        props.setSearch(event.target.value)
        .then(res => {
            if (window.location.pathname === '/'){
                props.history.push('/movies_by_title');
            }
            else{
                props.history.push('/search_movies');
            }
            
        })
    }

}