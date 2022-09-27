import { useState } from 'react';
import css from './Paginator.module.css';


export const Paginator = ({totalItemsCount,pageSize,currentPage,onSetCurrentPage,portionSize=10})=>{

    let pagesCount = totalItemsCount/pageSize;
    let pages = [];
    for (let i =1; i <= pagesCount+1; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber-1)*portionSize+1;
    let rightPortionNumber = portionNumber*portionSize;

    return  (
        <div className={css.pages_select}>
            {portionNumber>1?
                <>
                <div onClick={() => setPortionNumber(1)}  className="first"> First </div>
                <div onClick={() => setPortionNumber(portionNumber-1)}  className="prev"> prev </div>
                </>
            :''}
            {pages
                .filter(i=>i>=leftPortionNumber&&i<=rightPortionNumber)
                .map(i => <span
                    className={currentPage === i ? css.selected_page : ''}
                    key={i}
                    onClick={() => onSetCurrentPage(i)}
            >{i}</span>)}
            {portionNumber<portionCount?
                <>
                <div onClick={() => setPortionNumber(portionNumber+1)} className="next"> next </div>
                <div onClick={() => setPortionNumber(portionCount)} className="last" > Last </div>
                </>
            :''}
        </div>
    )

}