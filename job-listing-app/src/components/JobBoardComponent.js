import React from "react";

const JobBoardComponent = ({
  job: {
    id, company, logo, isNew, featured, position, role,
    level, postedAt, contract, location, languages, tools, 
    },handleClickTag
}) => {
    const tags = [role,level];
    if (tools){
        tags.push(...tools);
    }
    if (languages){
        tags.push(...languages);
    }
    return(
        <div className={`flex flex-col bg-white shadow-lg my-16 mx-10 p-6 rounded 
        ${featured && 'border-l-4 border-teal-500 '} lg:flex-row lg:my-4`}>
        <div>
          <img className="-mt-8 mb-4 w-20 h-20 lg:my-0 lg:w-24 sm:h-24" src={logo} alt={company} />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <h3 className="font-bold text-teal-500">
            {company}
            {isNew && (<span className="bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">New</span>)}
            {featured && (<span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full uppercase text-sm">Featured</span>)}
        </h3>
          <h2 className="font-bold text-xl my-2 lg:my-0">{position}</h2>
          <p className="text-gray-700">
            {postedAt} · {contract} · {location}
          </p>
        </div>
        <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0"> 
        {tags ? tags.map((tag)=> 
        (<span onClick={()=> handleClickTag(tag)} className="text-teal-500 bg-teal-100 font-bold  cursor-pointer mr-4 mb-4 p-2 rounded lg:mb-0">{tag}</span>)) : ''}
        </div>
      </div>
    )}

export default JobBoardComponent;