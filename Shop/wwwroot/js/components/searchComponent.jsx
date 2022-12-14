class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }


    /*
        STAVLJA PROPERTY OD VARIJABLE "SEARCHITEMS" NA VRIJEDNOST SEARCH INPUTA
     */
    handleChangeSearch(event) {
        this.props.searchItems(event.target.value.toLowerCase());
    }

    render() {
        return (
            <div>
                <img alt="Search icon" src="/images/search.png" />
                <input onChange={this.handleChangeSearch} id="search-items-input" />
            </div>
        );
    }
}

export default Search;