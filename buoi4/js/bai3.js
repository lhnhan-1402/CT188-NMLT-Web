var itemList = {
  "sp001": {
    "name": "Sữa Chua Vị Kiwi",
    "price": 21000,
    "photo": "/images/TH_B1_Data/images/sanpham/kiwi.jpg"
  },
  "sp002": {
    "name": "Sữa Chua Vị Xoài",
    "price": 22000,
    "photo": "/images/TH_B1_Data/images/sanpham/mango.jpg"
  },
  "sp003": {
    "name": "Sữa Chua Vị Dưa lưới",
    "price": 23000,
    "photo": "/images/TH_B1_Data/images/sanpham/cantaloupe.jpg"
  },
  "sp004": {
    "name": "Sữa Chua Vị Mâm Xôi",
    "price": 24000,
    "photo": "/images/TH_B1_Data/images/sanpham/blackberry.jpg"
  },
  "sp005": {
    "name": "Sữa Chua Vị Dâu Tây",
    "price": 25000,
    "photo": "/images/TH_B1_Data/images/sanpham/strawberry.jpg"
  },
  "sp006": {
    "name": "Sữa Chua Vị Việt Quất",
    "price": 26000,
    "photo": "/images/TH_B1_Data/images/sanpham/blueberry.jpg"
  },
  "sp007": {
    "name": "Sữa Chua Vị Bưởi",
    "price": 27000,
    "photo": "/images/TH_B1_Data/images/sanpham/grapes.jpg"
  },
  "sp008": {
    "name": "Sữa Chua Vị Táo Xanh",
    "price": 28000,
    "photo": "/images/TH_B1_Data/images/sanpham/green-apple.jpg"
  },
  "sp009": {
    "name": "Sữa Chua Vị Dứa",
    "price": 29000,
    "photo": "/images/TH_B1_Data/images/sanpham/pineapple.jpg"
  }
};

function addCart(code) {
  let number = parseInt(document.getElementById(code).value);
  if (number <= 0) return;

  let current = localStorage.getItem(code) ? parseInt(localStorage.getItem(code)) : 0;
  let newTotal = number + current;

  if (newTotal > 100) {
    let allowed = 100 - current;
    if (allowed > 0) {
      localStorage.setItem(code, 100);
      alert("Số lượng đặt hàng không thể vượt quá 100. Bạn chỉ có thể thêm " + allowed + " sản phẩm.");
    } else {
      alert("Bạn đã đạt giới hạn 100 sản phẩm cho mặt hàng này.");
    }
  } else {
    localStorage.setItem(code, newTotal);
    alert("Đặt hàng thành công. Tổng số lượng đã đặt hàng là: " + newTotal + ".");
  }
}

