import Hero from './Hero';


const MovieCard = ({movie}) => {
    const posterUrl = `${movie.snippet.url}`
    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.snippet.title}/>
        <div className="card-body">
        <h5 className="card-title">{movie.snippet.title}</h5>
        <a href="gosomewhere" className="btn btn-primary">Show details</a>
        </div>
        </div>
        </div>
    )
}

const SearchView = ({keyword, searchResults}) => {
    console.log("keyword value is",keyword)
    const title =`You are searching for ${keyword}`
    console.log(searchResults,"are the search results")
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })
    return(
        <div>
            <Hero text={title}/>
            {resultsHtml && 
            <div className="container">
                <div className="row">
                    {resultsHtml}
                    </div>
            </div>}
        </div>
        
    )
}
export default SearchView;