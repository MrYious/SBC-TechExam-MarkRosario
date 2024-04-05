export const FilterByFavorites = () => {

    var data = true;

    return (
        <div>
            <span>Favorites?</span>
            <div className="customRadioGroupCheckBox">
                <label htmlFor="favoriteYes">
                    <input type="checkbox" name="favoriteYes" checked={data}/>
                    Yes
                </label>
                <label htmlFor="favoriteNo">
                    <input type="checkbox" name="favoriteNo" checked={!data}/>
                    No
                </label>
            </div>
        </div>
    )
}

