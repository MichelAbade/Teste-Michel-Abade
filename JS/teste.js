/*----- iNICIO IMAGENS TAGLINE----- */
/* FIRST */
const inputFile2 = document.querySelector("#picture__input");
const pictureImage2 = document.querySelector(".picture__image");
const pictureImageTxt2 = "Choose an image";
pictureImage2.innerHTML= pictureImageTxt2;

inputFile2.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage2.innerHTML = "";
      pictureImage2.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage2.innerHTML = pictureImageTxt;
  }
});
/* SECOND */
const inputFile = document.querySelector("#picture");
const pictureImage = document.querySelector(".picturei");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picturei");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
/*THIRD*/
const inputFile3 = document.querySelector("#picturee");
const pictureImage3 = document.querySelector(".pictureii");
const pictureImageTxt3 = "Choose an image";
pictureImage3.innerHTML= pictureImageTxt3;

inputFile3.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("pictureii");

      pictureImage3.innerHTML = "";
      pictureImage3.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage3.innerHTML = pictureImageTxt;
  }
});
/*----- FINAL IMAGENS TAGLINE----- */

/*----- iNICIO IMAGENS PRODUCTS----- */
/* FIRST */
const inputFile4 = document.querySelector("#picturree");
const pictureImage4 = document.querySelector(".picturreii");
const pictureImageTxt4 = "Choose an image";
pictureImage4.innerHTML= pictureImageTxt4;

inputFile4.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picturreii");

      pictureImage4.innerHTML = "";
      pictureImage4.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage4.innerHTML = pictureImageTxt;
  }
});
/* SECOND */
const inputFile5 = document.querySelector("#pictuurree");
const pictureImage5 = document.querySelector(".pictuurreii");
const pictureImageTxt5 = "Choose an image";
pictureImage5.innerHTML= pictureImageTxt5;

inputFile5.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("pictuurreii");

      pictureImage5.innerHTML = "";
      pictureImage5.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage5.innerHTML = pictureImageTxt;
  }
});
/*----- FINAL IMAGENS PRODUCTS----- */

/*----- iNICIO IMAGENS GRADE----- */
/*FIRST*/
const inputFile6 = document.querySelector("#picttuurree");
const pictureImage6 = document.querySelector(".picttuurreii");
const pictureImageTxt6 = "Choose an image";
pictureImage6.innerHTML= pictureImageTxt6;

inputFile6.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picttuurreii");

      pictureImage6.innerHTML = "";
      pictureImage6.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage6.innerHTML = pictureImageTxt;
  }
});
/*SECOND*/
const inputFile7 = document.querySelector("#piccttuurree");
const pictureImage7 = document.querySelector(".piccttuurreii");
const pictureImageTxt7 = "Choose an image";
pictureImage7.innerHTML= pictureImageTxt7;

inputFile7.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("piccttuurreii");

      pictureImage7.innerHTML = "";
      pictureImage7.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage7.innerHTML = pictureImageTxt;
  }
});
/*THIRD*/
const inputFile8 = document.querySelector("#piiccttuurree");
const pictureImage8 = document.querySelector(".piiccttuurreii");
const pictureImageTxt8 = "Choose an image";
pictureImage8.innerHTML= pictureImageTxt8;

inputFile8.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("piiccttuurreii");

      pictureImage8.innerHTML = "";
      pictureImage8.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage8.innerHTML = pictureImageTxt;
  }
});
/*FOURTH*/
const inputFile9 = document.querySelector("#piiccttuurree9");
const pictureImage9 = document.querySelector(".piiccttuurreii9");
const pictureImageTxt9 = "Choose an image";
pictureImage9.innerHTML= pictureImageTxt9;

inputFile9.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("piiccttuurreii9");

      pictureImage9.innerHTML = "";
      pictureImage9.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage9.innerHTML = pictureImageTxt;
  }
});
/*FIFTH*/
const inputFile10 = document.querySelector("#piiccttuurree10");
const pictureImage10 = document.querySelector(".piiccttuurreii10");
const pictureImageTxt10 = "Choose an image";
pictureImage10.innerHTML= pictureImageTxt10;

inputFile10.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("piiccttuurreii10");

      pictureImage10.innerHTML = "";
      pictureImage10.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage10.innerHTML = pictureImageTxt;
  }
});