import React from 'react';
import useDrop from './useDrop';
import './Nested.css'
import {categories} from './categories';
const Nested = () => {
  const [_category, set_category] = useDrop('');
  const [_subCategory, set_subCategory] = useDrop('');
  return (
    <div className="dropdown">
      <label style={{ fontSize:'30px',color:"white",padding:"15px" }}>Category:</label>
      <select value={_category} onChange={(e) => set_category(e.target.value)} className="drop">
        <option>
          Select category
        </option>
        {categories.map((category, aya) => (
          <option key={aya} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      {_category && (
        <div>
          <select value={_subCategory} onChange={(e) => set_subCategory(e.target.value)} className="drop">
            <option>
              Select subcategory
            </option>
            {
            categories.find(category => category.name === _category).subcategories.map((subcategory, aya) => 
            (
              <option key={aya} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
export default Nested;
