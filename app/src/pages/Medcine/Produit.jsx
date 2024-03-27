import React, { useState } from 'react';
import Items from "./items";
import PaginationControl from './pagination';

const Produit = ({option}) => {
    const fakeItems = [
        {id:1, name: 'Item 1', number1: 23, number2: 17 },
        {id:2, name: 'Item 2', number1: 23, number2: 17 },
        {id:3, name: 'Item 3', number1: 23, number2: 17 },
        {id:4, name: 'Item 4', number1: 23, number2: 17 },
        {id:5, name: 'Item 5', number1: 23, number2: 17 },
        {id:6, name: 'Item 6', number1: 23, number2: 17 },
        {id:7, name: 'Item 7', number1: 23, number2: 17 },
        {id:8, name: 'Item 8', number1: 23, number2: 17 },
        {id:9, name: 'Item 9', number1: 23, number2: 17 },
        {id:10, name: 'Item 10', number1: 23, number2: 17 },
        {id:11, name: 'Item 11', number1: 23, number2: 17 },
        {id:12, name: 'Item 12', number1: 23, number2: 17 },
        {id:13, name: 'Item 13', number1: 23, number2: 17 },
      ]

      // Create a signaled state array
      const [signaled, setSignaled] = useState(new Array(fakeItems.length).fill(false));

      const itemsPerPage = 8;
      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = Math.ceil(fakeItems.length / itemsPerPage);
  
      const getPaginatedItems = () => {
          const startIndex = (currentPage - 1) * itemsPerPage;
          return fakeItems.slice(startIndex, startIndex + itemsPerPage);
      };
  
      const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  
      const handleSignal = (index) => {
          const newSignaled = [...signaled];
          newSignaled[index] = true;
          setSignaled(newSignaled);

          //function to backend
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
            <div className="grid grid-cols-4 gap-4 mt-10 place-items-center">
                {getPaginatedItems().map((item, index) => {
                    // Calculate the actual index of the item in fakeItems array
                    const actualIndex = index + (currentPage - 1) * itemsPerPage;
                    return (
                        <Items 
                            key={actualIndex} 
                            nom={item.name} 
                            ND={item.number1} 
                            NU={item.number2} 
                            option={option}
                            isSignaled={signaled[actualIndex]}
                            onSignal={() => handleSignal(actualIndex)}
                        />
                    );
                })}
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
