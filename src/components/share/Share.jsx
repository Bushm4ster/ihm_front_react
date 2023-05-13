import React, { useState, useRef } from "react";
import "./share.css";
import { PermMedia, Label } from "@mui/icons-material";

export default function Share() {

  // Image upload section start
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

          const widthScaleFactor = 300 / image.width;
          const heightScaleFactor = 300 / image.height;

          const newWidth = image.width * widthScaleFactor;
          const newHeight = image.height * heightScaleFactor;

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
  // Image upload section end
  // Category popup start
  const [category, setCategory] = useState('');

  function handleCategorySelection(e) {
    setCategory(e.value);
  }

  function handlePopupClose() {
    setOpenPopup(false);
  }

  const [openPopup, setOpenPopup] = useState(false);

  // Category popup end

  return (
    <div className="shareContainer">
      <div className={`share ${selectedImages.length > 0 ? "expanded" : ""}`}>
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src="assets/persons/1.jpg" alt="" />
            <input
              placeholder="What's in your mind Sophia?"
              className="shareInput"
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption" onClick={handlePermMediaClick}>
                <input
                  type="file"
                  onChange={handleImageSelect}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  multiple
                />
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">
                  Upload Images
                </span>
              </div>
              <div className="shareOption" onClick={() => setOpenPopup(true)}>
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">
                  {category || 'Category'}
                </span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
        {openPopup && <Popup onClose={handlePopupClose} />}
        {selectedImages.length > 0 && (
          <div className="imageContainer">
            {selectedImages.map((image, index) => (
              <div className="imageWrapper" key={index}>
                <button
                  className="removeButton"
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
                <img src={image} alt={`Selected ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  function Popup({ onClose }) {
    const handleClose = (e) => {
      handleCategorySelection(e.target);
      onClose();
    };
    const popupStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    };

    const contentStyle = {
      background: '#fff',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
    };

    return (
      <div className="popup" style={popupStyle}>
        <div className="popupContent" style={contentStyle}>
          <button className="closeButton" onClick={handleClose}>X</button>
          <h3>Select a category:</h3>
          <button name="category" value="Sports" className="categoryBtn" onClick={handleClose}>
            Sports
          </button>
          <button name="category" value="Life" className="categoryBtn" onClick={handleClose}>
            Life
          </button>
          <button name="category" value="Politics" className="categoryBtn" onClick={handleClose} >
            Politics
          </button>
          <button name="category" value="Relationships" className="categoryBtn" onClick={handleClose} >
            Relationships
          </button>
        </div>
      </div>
    );
  }

}
