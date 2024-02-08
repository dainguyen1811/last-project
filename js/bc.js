var hinh = [
    "images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
  ];

  var index = 0;
  var backgroundImage = document.getElementById('hinh');

  function prev() {
    index--;
    if (index < 0) index = hinh.length - 1;
    changeImage();
  }

  function next() {
    index++;
    if (index >= hinh.length) index = 0;
    changeImage();
  }

  function changeImage() {
    backgroundImage.classList.add('blur'); // Áp dụng lớp làm mờ
    setTimeout(function () {
      backgroundImage.src = hinh[index];
      backgroundImage.classList.remove('blur'); // Loại bỏ lớp làm mờ sau khi chuyển ảnh
    }, 500); // Thời gian delay giống với thời gian transition
  }

  // Gọi hàm chuyển đổi ảnh mỗi 3 giây (3000 milliseconds)
  setInterval(function () {
    console.log('next image');
    next();
  }, 3000);