function mySearch(event) {
    var key = event.which || event.keyCode;
    var input = document.querySelector('#search').value;
    if (key == 32 && input != '') {
      event.preventDefault(); // Ngăn chặn hành động mặc định của form
      doSearch();
    }
  }

  function doSearch() {
    document.getElementById('search-form').submit();
  }

  // Thêm trình lắng nghe sự kiện cho phím cách
  document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
      mySearch(event);
    }
  });