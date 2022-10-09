import { useEffect } from "react";

import s from "./_pagination.module.scss";

const paginationList = [1, 2, 3, 4];


const Pagination = ({ currentPage, onChangePage }) => {


    return (
        <>
            <hr />
            <ul className={s.list}>
                <li className={currentPage === 1 ? s.item__active : s.item}>
                    <button type="button"
                    onClick={() => onChangePage(1)}>
                        1
                    </button>
                </li>
                <li className={currentPage === 2 ? s.item__active : s.item}>
                    <button type="button"
                    onClick={() => onChangePage(2)}>
                        2
                    </button>
                </li>
                <li className={currentPage === 3 ? s.item__active : s.item}>
                    <button type="button"
                    onClick={() => onChangePage(3)}>
                        3
                    </button>
                </li>
                <li className={currentPage === 4 ? s.item__active : s.item}>
                    <button type="button"
                    onClick={() => onChangePage(4)}>
                        4
                    </button>
                </li>
            </ul>
        </>
    )
};

export default Pagination;
