export const SortByTitle = () => {

    return (
        <div className="preference">
            <h4>Sort by Title</h4>
            <select name="sortTitle" id="sortTitle">
                <option disabled >Select</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    )
}

