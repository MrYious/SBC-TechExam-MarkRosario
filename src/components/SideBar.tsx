import { FilterByFavorites } from "./FilterByFavorites"
import { SortByTitle } from "./SortByTitle"

export const SideBar = () => {

    return (
        <aside id="sidebar">
            <SortByTitle />

            <div className="preference">
                <h4>Filter</h4>
                <div id="filterGroup">
                    <FilterByFavorites />
                </div>
            </div>
        </aside>
    )
}