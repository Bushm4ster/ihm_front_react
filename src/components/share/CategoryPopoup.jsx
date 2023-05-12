import React, { useState, useEffect, useRef } from "react";
import "./CategoriesPopup.css";

export default function CategoriesPopup({ onSelect }) {
  const [isOpen, setIsOpen] = useState(true);
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategorySelect = (category) => {
    onSelect(category);
    onClose();
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="categoriesPopupContainer">
      <div className="categoriesPopupBackground"></div>
      <div className="categoriesPopup" ref={popupRef}>
      <div className="categoriesPopupHeader">
        <h3>Select a Category</h3>
        <button className="categoriesPopupCloseButton" onClick={onClose}>X</button>
      </div>
      <div className="categoriesPopupContent">
        <ul>
          <li>
            <input type="radio" name="category" id="category1" value="Category 1" onChange={() => handleCategorySelect('Category 1')} />
            <label htmlFor="category1">Category 1</label>
          </li>
          <li>
            <input type="radio" name="category" id="category2" value="Category 2" onChange={() => handleCategorySelect('Category 2')} />
            <label htmlFor="category2">Category 2</label>
          </li>
          <li>
            <input type="radio" name="category" id="category3" value="Category 3" onChange={() => handleCategorySelect('Category 3')} />
            <label htmlFor="category3">Category 3</label>
          </li>
          <li>
            <input type="radio" name="category" id="category4" value="Category 4" onChange={() => handleCategorySelect('Category 4')} />
            <label htmlFor="category4">Category 4</label>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
