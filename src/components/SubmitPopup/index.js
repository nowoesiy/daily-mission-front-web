import React from 'react';
import './index.scss';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faSmileWink } from '@fortawesome/free-solid-svg-icons';

const SubmitPopup = ({
  inputValue,
  inputValue2,
  updateInputValue,
  PostBoard,
  file,
  submit,
  fileImgUrl,
}) => {
  return (
    <Popup
      modal
      closeOnDocumentClick
      open={file}
      trigger={
        !submit ? (
          <div className="drop-upload-box__wrap">
            <FontAwesomeIcon icon={faUpload} size="2x" />
            <span className="drop-upload-box__title">미션 업로드 !</span>
          </div>
        ) : (
          <div className="drop-upload-box__wrap--submit">
            <FontAwesomeIcon icon={faSmileWink} size="2x" />
            <span className="drop-upload-box__title">제출완료!!!</span>
          </div>
        )
      }
    >
      <div className="submit-board">
        <div className="submit-board__title">
          <input
            className="submit-board__board-title-input"
            name="title"
            type="text"
            placeholder="제목"
            autocomplete="off"
            value={inputValue}
            onChange={updateInputValue}
          />
        </div>
        <hr />
        <div className="submit-board__author">
          <input
            className="submit-board__author-input"
            id="author"
            name="author"
            value="이수백"
            type="text"
          ></input>
        </div>
        <div className="submit-board__contents">
          <textarea
            className="submit-board__contents-input"
            name="content"
            cols="40"
            rows="13"
            placeholder="글 써주실꺼죠? :)"
            value={inputValue2}
            onChange={updateInputValue}
          ></textarea>
        </div>
        <hr />
        <div className="submit-board__img-box">
          <img className="submit-board__img" src={fileImgUrl} alt={file} />
        </div>
        <button
          type="button"
          className="submit-board__button submit-board__button--cancel"
          onClick={(file = '')}
        >
          취소
        </button>
        <button
          type="button"
          className="submit-board__button submit-board__button--submit"
          onClick={PostBoard}
        >
          등록
        </button>
      </div>
    </Popup>
  );
};

export default SubmitPopup;
