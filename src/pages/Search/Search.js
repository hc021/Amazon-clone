import React, { useEffect } from 'react'
import { useStateValue } from '../../data/StateProvider'

function Search({ match }) {
    const [{ search }, dispatch] = useStateValue();
    useEffect( () => {
         dispatch({
            type: "SET_SEARCHVALUE",
            search: match.params.parmas,
        })
    },[])

    return (
        <div>
            search {match.params.parmas}
        </div>
    )
}
export default Search
