import { css } from "@emotion/react";

export const modal = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// 모달 리스트 스타일
export const modalList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// 모달 리스트 아이템 스타일
export const modalListItem = css`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// 모달 닫기 버튼 스타일
export const modalCloseButton = css`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;