const Search = ({handleSearch}) => {
    return (
			<div className="blog-search">
				<input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)}/>
			</div>
		);
}
 
export default Search;