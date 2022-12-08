import WatchlistTableItem from "./watchlist-table-item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findWatchlistThunk} from "../services/watchlist-thunks";

const WatchListTable = ({uid, allowedToRemove}) => {
    const {watchlist, loading} = useSelector(state => state.watchlist)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findWatchlistThunk(uid))
    }, [uid])
    return (
        <div className="wd-bg-watchlist rounded-3">
            <h3 className="text-decoration-underline fw-bold pt-2 text-center">
                WatchList
            </h3>
            <table className="table table-responsive table-hover border-dark mb-0">
                <thead>
                <tr>
                    <th scope="col" className={'text-center'}>
                        Coin
                    </th>
                    <th scope="col" className={'text-center'}>
                        24H Change
                    </th>
                    <th scope="col" className={'text-center'}>
                        Current Price
                    </th>
                    {
                        allowedToRemove &&
                        <th scope="col" className={'text-center'}>
                            Remove
                        </th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    loading &&
                    <tr>
                        <td>Loading...</td>
                    </tr>
                }
                {
                    watchlist.map(
                        item =>
                            <WatchlistTableItem key={item._id}
                                                item={item}
                                                allowedToRemove={allowedToRemove}/> )
                }
                </tbody>
            </table>
        </div>
    )
}

export default WatchListTable