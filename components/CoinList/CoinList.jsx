import Link from 'next/link';


import s from "./_coinlist.module.scss";

const CoinList = () => {


    return (
        <>
            <div className={s.root}>
                <ul className={s.root__list}>
                    <li className={s.root__item}>
                        #
                    </li>
                    <li className={s.root__item}>
                        Coin
                    </li>
                    <li className={s.root__item}>
                        Price
                    </li>
                </ul>
                <hr />
            </div>
            
            <div className={s.container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        1
                    </li>
                    <li className={s.item}>
                        <Link href="coinInfo">
                            <b>Bitcoin</b>
                        </Link>
                    </li>
                    <li className={s.item}>
                        $19,965.48
                    </li>
                </ul>
            </div>
        </>
    )
};

export default CoinList;