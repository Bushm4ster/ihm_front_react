import React, { useState, useRef } from "react";
import "./share.css";
import { PermMedia, Label } from "@mui/icons-material";
import CategoriesPopup from "./CategoryPopoup";

export default function Share() {
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef();

  function handleImageSelect(event) {
    const selectedFiles = event.target.files;
    const newImages = [];

    Array.from(selectedFiles).forEach((selectedFile) => {
      const reader = new FileReader();

      reader.onload = function () {
        const image = new Image();
        image.onload = function () {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          const scaleFactor = 400 / image.width;
          const newWidth = image.width * scaleFactor;
          const newHeight = image.height * scaleFactor;

          canvas.width = newWidth;
          canvas.height = newHeight;

          context.drawImage(image, 0, 0, newWidth, newHeight);

          const resizedImage = canvas.toDataURL(selectedFile.type);
          newImages.push(resizedImage);

          // Update the state only after all images are resized
          if (newImages.length === selectedFiles.length) {
            setSelectedImages((prevImages) => [...prevImages, ...newImages]);
          }
        };

        image.src = reader.result;
      };

      reader.readAsDataURL(selectedFile);
    });
  }

  function handlePermMediaClick() {
    fileInputRef.current.click();
  }

  function handleRemoveImage(index) {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);

  const handleCategoryClick = () => {
    setShowCategoriesPopup(true);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`share ${selectedImages.length > 0 ? "expanded" : ""}`}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/persons/1.jpg" alt="" />
          <input
            type="file"
            onChange={handleImageSelect}
            ref={fileInputRef}
            style={{ display: "none" }}
            multiple
          />
          <span onClick={handlePermMediaClick}>
            <PermMedia htmlColor="tomato" className="shareIcon" />
          </span>
          <input
            placeholder="What's in your mind Sophia?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption" onClick={handleCategoryClick}>
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">
                {selectedCategory ? selectedCategory : "Category"}
              </span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
        {showCategoriesPopup && (
          <CategoriesPopup
            onSelect={handleCategorySelect}
            onClose={() => setShowCategoriesPopup(false)}
          />
        )}
        {showCategoriesPopup && <div className="overlay"></div>}
      </div>
      {selectedImages.length > 0 && (
        <div className="imageContainer">
          {selectedImages.map((image, index) => (
            <div className="imageWrapper" key={index}>
              <img src={image} alt={`Selected image ${index + 1}`} />
              <button
                className="removeButton"
                onClick={() => handleRemoveImage(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
