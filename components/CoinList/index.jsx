
import s from "./_coinlist.module.scss";

const CoinList = ({ name, price, priceChange1d, priceChange1w, marketCap }) => {

    return (
        <>
            <ul className={s.list}>
                <li className={s.item}>
                    <b>{name}</b>
                </li>

                <li className={s.item}>
                    ${price.toFixed(2)}
                </li>
                <li className={s.item}>
                    ${marketCap.toFixed(2)}
                </li>
                <li className={priceChange1d > 0 ? s.item__green : s.item__red}>
                    {priceChange1d}%
                </li>
                <li className={priceChange1w > 0 ? s.item__green : s.item__red}>
                    {priceChange1w}%
                </li>
            </ul>
        </>
    )
};

export default CoinList;