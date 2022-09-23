import css from './Paginator.module.css';


export const Paginator = (props)=>{

    let pagesCount = props.totalUsersCount/props.pageSize;
    let pages = [];
    for (let i =1; i <= pagesCount+1; i++) {
        pages.push(i);
    }

    return  (
        <div className={css.pages_select}>
            {pages.map(i => <div
                className={props.currentPage === i ? css.selected_page : ''}
                key={i}
                onClick={() => props.onSetCurrentPage(i)}
            >{i}</div>)}
        </div>
    )

}