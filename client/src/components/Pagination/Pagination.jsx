import "./Pagination.css";

export default function Pagination( { productsPerPage, totalProducts, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a 
                        href="#" 
                        className="page-link"
                        onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}