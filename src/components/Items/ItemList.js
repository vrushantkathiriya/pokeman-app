import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "./pokemonSlice";
import "./ItemList.css";
import moonicon from '../images/moon.png'
import sunicon from '../images/sun.png'
import { Link, useNavigate } from 'react-router-dom'
// import PokemonDetail from './ItemDetail'

function ItemList() {
    const [darkmode, setDarkmode] = useState(false);
    const Navigate = useNavigate();

    const dispatch = useDispatch();
    const allPokemon = useSelector((state) => {
        const { pokemonItems } = state.pokemon;
        return pokemonItems || [];
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [isSliceUpdated, setIsSliceUpdated] = useState(false); // added flag

    const filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFetchAllPokemon = () => {
        const pokemonIds = Array.from({ length: 300 }, (_, index) => index + 1);
        pokemonIds.map((id) => dispatch(getItemById(id)));
    };

    const itemsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
        const newPageNumber = Math.min(Math.max(1, pageNumber), totalPages);
        setCurrentPage(newPageNumber);
    };

    const handlePrevPage = () => {
        const newPageNumber = Math.max(1, currentPage - 1);
        setCurrentPage(newPageNumber);
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
        const newPageNumber = Math.min(currentPage + 1, totalPages);
        setCurrentPage(newPageNumber);
    };

    const getPokemonForCurrentPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredPokemon.slice(startIndex, endIndex);
    };
    const getPageNumbers = () => {
        const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
        const pageNumbers = [];

        pageNumbers.push(1);

        let start = Math.max(2, currentPage - 2);
        let end = Math.min(totalPages - 1, currentPage + 2);

        if (start > 2) {
            pageNumbers.push("...");
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        if (end < totalPages - 1) {
            pageNumbers.push("...");
        }

        pageNumbers.push(totalPages);

        return pageNumbers;
    };

    useEffect(() => {
        handleFetchAllPokemon();
    }, []);

    useEffect(() => {
        if (allPokemon.length > 0) {
            setIsSliceUpdated(true);
        }
    }, [allPokemon]);

    return (
        <div className={`Item-List-Container ${darkmode ? "header_darkmode_active" : ""}`}>
            <div className={`header ${darkmode ? "header_darkmode_active" : ""}`}>
                Items
                <button onClick={() => setDarkmode(!darkmode)}>
                    {darkmode ? <div><img src={moonicon} /></div> : <div><img src={sunicon} /></div>}
                </button>
            </div>
            <div className="search-items">
                <input type="text" placeholder="Search Item" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="pokemon-container">
                {getPokemonForCurrentPage().map((pokemon) => (

                    <Link to={`/item/${pokemon.id}`} key={pokemon.id} className={`pokemon-card ${darkmode ? "pokemon-card-dark" : ""}`}>
                        <span className="card-name">#{pokemon.id}</span>
                        <h3>{pokemon.name}</h3>
                        <div className="item-img">
                            <img className="inner-img-1" src={pokemon.sprites.default} />
                            <img className="inner-img-2" src={pokemon.sprites.default} />
                            <img className="inner-img-3" src={pokemon.sprites.default} />
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination-wrap">
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Prev
                    </button>
                    {getPageNumbers().map((pageNumber, index, array) => (
                        <button
                            key={pageNumber + index}
                            onClick={() => handlePageChange(pageNumber)}
                            className={currentPage === pageNumber ? "active" : ""}
                        >
                            {typeof pageNumber === "number" ? pageNumber : "..."}
                        </button>
                    ))}

                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredPokemon.length / itemsPerPage)}>
                        Next
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ItemList;

