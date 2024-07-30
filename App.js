// import React from 'react';
// import StartPage from './recipieserach/startpage';

// const Apps = () => {
//   return (
//     <div>
//       <StartPage />
//     </div>
//   );
// };

// export default Apps;
import React, { useState } from 'react';
import StartPage from './recipieserach/startpage';
import RecipeSearch from './recipieserach/recipiesearch';

const Found = () => {
  const [currentPage, setCurrentPage] = useState('start');

  return (
    <div>
      {currentPage === 'start' ? (
        <StartPage onPageChange={setCurrentPage} />
      ) : (
        <RecipeSearch />
      )}
    </div>
  );
};

export default Found;