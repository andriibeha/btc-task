import s from "./headlaybel.module.scss";

const HeadLaybel = () => {
    return (
        <div className={s.root}>
            <ul className={s.root__list}>
                <li className={s.root__item}>
                    Coin
                </li>
                <li className={s.root__item}>
                    Price
                </li>
                <li className={s.root__item}>
                    Mkt Cap
                </li>
                <li className={s.root__item}>
                    24h %
                </li>
                <li className={s.root__item}>
                    7d %
                </li>
            </ul>
            <hr />
        </div>
    )
};

export default HeadLaybel;


