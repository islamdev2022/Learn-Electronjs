import React, { useState } from 'react';
import Items from "./items";
import PaginationControl from './pagination';

const Produit = ({option}) => {
    const fakeItems = [
        { name: 'Item 1', number1: 23, number2: 17 },
        { name: 'Item 2', number1: 23, number2: 17 },
        { name: 'Item 3', number1: 23, number2: 17 },
        { name: 'Item 4', number1: 23, number2: 17 },
        { name: 'Item 5', number1: 23, number2: 17 },
        { name: 'Item 6', number1: 23, number2: 17 },
        { name: 'Item 7', number1: 23, number2: 17 },
        { name: 'Item 8', number1: 23, number2: 17 },
        { name: 'Item 9', number1: 23, number2: 17 },
        { name: 'Item 10', number1: 23, number2: 17 },
        { name: 'Item 11', number1: 23, number2: 17 },
        { name: 'Item 12', number1: 23, number2: 17 },
        { name: 'Item 13', number1: 23, number2: 17 },
      ];
      

    // Pagination state
    const itemsPerPage = 8; // Items per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(fakeItems.length / itemsPerPage);

    // Function to get the items for the current page
    const getPaginatedItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return fakeItems.slice(startIndex, startIndex + itemsPerPage);
    };

    // Function to change the current page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            
            <p className="text-2xl text-green font-bold relative top-3">Liste des Produits</p>
            {option ==="p" && <>
            <div className="grid grid-cols-4 gap-4 mt-10 place-items-center ">
                {getPaginatedItems().map((item, index) => (
                    <Items key={index} nom={item.name} ND={item.number1} NU={item.number2} option="p"/>
                ))}
            </div>
            </>}
            {option ==="declarer" && <>
            <div className="grid grid-cols-4 gap-4 mt-10 place-items-center ">
                {getPaginatedItems().map((item, index) => (
                    <Items key={index} nom={item.name} NU={item.number2} option="declarer"/>
                ))}
            </div>
            </>}
            {option ==="signaler" && <>
            <div className="grid grid-cols-4 gap-4 mt-10 place-items-center ">
                {getPaginatedItems().map((item, index) => (
                    <Items key={index} nom={item.name} ND={item.number1} option="signaler"/>
                ))}
            </div>
            </>}
            <PaginationControl
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
        </div>
    );
}

export default Produit;
