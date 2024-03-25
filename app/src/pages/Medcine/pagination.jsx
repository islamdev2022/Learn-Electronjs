const PaginationControl = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className="flex items-center bottom-11 justify-center mt-6 space-x-1">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === 1 ? 'border-gray-300 text-gray-500' : 'border-gray-600 text-gray-900 hover:bg-gray-200'}`}
        >
          «
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === index + 1 ? 'bg-green text-white' : 'border-gray-600 text-gray-900 hover:bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === totalPages ? 'border-gray-300 text-gray-500' : 'border-gray-600 text-gray-900 hover:bg-gray-200'}`}
        >
          »
        </button>
      </div>
    );
  };
  export default PaginationControl
