import React from "react";
import { saveAs } from "file-saver";

const BtnDownCV = () => {
  const handleDownload = () => {
    // Создайте содержимое файла (в данном случае, текстовый файл)
    const fileContent = "PDF содержимое или данные";

    // Создайте объект Blob для содержимого файла
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });

    // Скачивание файла с помощью file-saver
    saveAs(blob, "cv_kairbekov_m.pdf");
  };

  return (
    <a href="#!" className="btn" onClick={handleDownload}>
      Download CV
    </a>
  );
};

export default BtnDownCV;
