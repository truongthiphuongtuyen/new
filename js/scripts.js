<script>
  let currentIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');

  // Chuyển slide tự động
  function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  // Hiển thị slide theo chỉ số
  function showSlide(index) {
    let offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Chuyển đến slide cụ thể khi bấm vào dấu chấm
  function currentSlide(index) {
    currentIndex = index - 1;  // Điều chỉnh chỉ số
    showSlide(currentIndex);
  }

  // Khởi tạo slide ban đầu và tự động chuyển
  showSlide(currentIndex);
  setInterval(autoSlide, 3000); // Chuyển slide tự động mỗi 3 giây
</script>let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

// Chuyển slide tự động
function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Hiển thị slide theo chỉ số
function showSlide(index) {
  let offset = -index * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Chuyển đến slide cụ thể khi bấm vào dấu chấm
function currentSlide(index) {
  currentIndex = index - 1;  // Điều chỉnh chỉ số
  showSlide(currentIndex);
}

// Khởi tạo slide ban đầu và tự động chuyển
showSlide(currentIndex);
setInterval(autoSlide, 3000); // Chuyển slide tự động mỗi 3 giâylet currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function showSlide(index) {
  let offset = -index * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function currentSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(autoSlide, 3000);function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}
function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function filterCategory(type) {
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clicked = [...buttons].find(btn => btn.innerText === type);
  if (clicked) clicked.classList.add('active');

  alert(`Đã chọn danh mục: ${type} (Bạn có thể thay đoạn này bằng filter thực tế)`);
}function muaNgay() {
  alert('Bạn đã nhấn Mua Ngay!');
}
