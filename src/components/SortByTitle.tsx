import { SortOrder, updateSortOrder } from "../slicers/UserPreferenceSlicer";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks"

import { ChangeEvent } from "react";

export const SortByTitle = () => {

    const sortOrder = useAppSelector(state => state.userPreference.sortOrder);
    const dispatch = useAppDispatch();

    const handleSelectSortOrder = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateSortOrder(e.target.value as SortOrder));
    }

    return (
        <div className="preference">
            <h4>Sort by Title</h4>
            <select name="sortTitle" id="sortTitle" value={sortOrder} onChange={handleSelectSortOrder}>
                <option disabled value={''} >Select</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    )
}

