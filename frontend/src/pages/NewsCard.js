import React from 'react';
import img3 from '../assets/Linkedin.png'
const NewsCard = () => {
  return (
    <>
    <aside className="common-properties" id="righh-card">
      <div id="news-views" className="flex justify-between items-center">
        <span>Today's news and views</span>
       
      </div>

      <ul id="news-section" className="mt-4">
        <li className="mb-2">
          <a href="#" className="flex flex-col">
            <div className="flex items-center">
              
              <span className="ml-2">News Headline 1</span>
            </div>
            <span className="text-gray-500 text-sm p-1">
              1d ago&nbsp;
              <i
                className="fas fa-circle text-gray-500 text-[4px]"
                aria-hidden="true"
              ></i>
              &nbsp;1,706 readers
            </span>
          </a>
        </li>

        <li className="mb-2">
          <a href="#" className="flex flex-col">
            <div className="flex items-center">
              
              <span className="ml-2">News Headline 2</span>
            </div>
            <span className="text-gray-500 text-sm p-1">
              2d ago&nbsp;
              <i
                className="fas fa-circle text-gray-500 text-[4px]"
                aria-hidden="true"
              ></i>
              &nbsp;11,255 readers
            </span>
          </a>
        </li>

        <li className="mb-2">
          <a href="#" className="flex flex-col">
            <div className="flex items-center">
             
              <span className="ml-2">News Headline 3</span>
            </div>
            <span className="text-gray-500 text-sm p-1">
              2d ago&nbsp;
              <i
                className="fas fa-circle text-gray-500 text-[4px]"
                aria-hidden="true"
              ></i>
              &nbsp;4,666 readers
            </span>
          </a>
        </li>

        <li className="mb-2">
          <a href="#" className="flex flex-col">
            <div className="flex items-center">
              
              <span className="ml-2">News Headline 4</span>
            </div>
            <span className="text-gray-500 text-sm p-1">
              2d ago&nbsp;
              <i
                className="fas fa-circle text-gray-500 text-[4px]"
                aria-hidden="true"
              ></i>
              &nbsp;1,714 readers
            </span>
          </a>
        </li>

        <li className="mb-2">
          <a href="#" className="flex flex-col">
            <div className="flex items-center">
             
              <span className="ml-2">News Headline 5</span>
            </div>
            <span className="text-gray-500 text-sm p-1">
              3d ago&nbsp;
              <i
                className="fas fa-circle text-gray-500 text-[4px]"
                aria-hidden="true"
              ></i>
              &nbsp;1,727 readers
            </span>
          </a>
        </li>

        <li id="dropdown-news" className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle text-blue-400 p-1"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
           share option 
          </a>

          <div
            className="dropdown-menu text-blue-600"
            aria-labelledby="navbarDropdownMenuLink"
            id="dropdown-item-color"
          >
            <a className="dropdown-item" href="#">
              <div className="flex items-center">
                <i
                  className="fas fa-circle text-blue-500 text-[9px] ml-3"
                  aria-hidden="true"
                ></i>
                <span className="ml-2">News Headline 6</span>
              </div>
              <span className="text-gray-500 text-sm p-1">
                3d ago&nbsp;
                <i
                  className="fas fa-circle text-gray-500 text-[4px]"
                  aria-hidden="true"
                ></i>
                &nbsp;1,727 readers
              </span>
            </a>

            <a className="dropdown-item" href="#">
              <div className="flex items-center">
                <i
                  className="fas fa-circle text-blue-500 text-[9px] ml-3"
                  aria-hidden="true"
                ></i>
                <span className="ml-2">News Headline 7</span>
              </div>
              <span className="text-gray-500 text-sm p-1">
                3d ago&nbsp;
                <i
                  className="fas fa-circle text-gray-500 text-[4px]"
                  aria-hidden="true"
                ></i>
                &nbsp;1,727 readers
              </span>
            </a>

            <a className="dropdown-item" href="#">
              <div className="flex items-center">
                <i
                  className="fas fa-circle text-blue-500 text-[9px] ml-3"
                  aria-hidden="true"
                ></i>
                <span className="ml-2">News Headline 8</span>
              </div>
              <span className="text-gray-500 text-sm p-1">
                3d ago&nbsp;
                <i
                  className="fas fa-circle text-gray-500 text-[4px]"
                  aria-hidden="true"
                ></i>
                &nbsp;1,727 readers
              </span>
            </a>

            <a className="dropdown-item" href="#">
              <div className="flex items-center">
                <i
                  className="fas fa-circle text-blue-500 text-[9px] ml-3"
                  aria-hidden="true"
                ></i>
                <span className="ml-2">News Headline 9</span>
              </div>
              <span className="text-gray-500 text-sm p-1">
                3d ago&nbsp;
                <i
                  className="fas fa-circle text-gray-500 text-[4px]"
                  aria-hidden="true"
                ></i>
                &nbsp;1,727 readers
              </span>
            </a>

            <a className="dropdown-item" href="#">
              <div className="flex items-center">
                <i
                  className="fas fa-circle text-blue-500 text-[9px] ml-3"
                  aria-hidden="true"
                ></i>
                <span className="ml-2">News Headline 10</span>
              </div>
              <span className="text-gray-500 text-sm p-1">
                3d ago&nbsp;
                <i
                  className="fas fa-circle text-gray-500 text-[4px]"
                  aria-hidden="true"
                ></i>
                &nbsp;1,727 readers
              </span>
            </a>
          </div>
        </li>
      </ul>
    </aside>


     
     <div>
        <div className='border border-b-2'></div>
     <div className='overflow-hidden mt-4 shadow-lg rounded'>
      <img className='w-full h-52' src={img3} alt="" />
     </div>
     </div>
    </>
  );
};

export default NewsCard;
