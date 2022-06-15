//Bài 5: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
document.getElementById("hQua").onclick = function () {
  //input: ngay: number, thang: number, nam: number
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  //output: d, m, y: number
  var d = ngay;
  var m = thang;
  var y = nam;
  //progress:

  //TÌM NGÀY TRƯỚC ĐÓ
  //nếu tháng nhập vào != 1 và ngày nhập vào = 1
  if (ngay === 1 && thang !== 1) {
    //Nếu tháng nhập vào là 2,4,6,8,9,11 thì ngày trước đó sẽ là ngày 31 tháng trước đó
    if (
      thang === 2 ||
      thang === 4 ||
      thang === 6 ||
      thang === 8 ||
      thang === 9 ||
      thang === 11
    ) {
      d = 31;
    } //Nếu tháng nhập vào là tháng 3 thì ngày trước đó là ngày 28 tháng 2
    else if (thang === 3) {
      d = 28;
    } //Nếu tháng nhập vào là tháng 5,7,10,12 thì ngày trước đó sẽ là 30 tháng trước đó
    else if (thang === 5 || thang === 7 || thang === 10 || thang === 12) {
      d = 30;
    }
    m = thang - 1;
  } //nếu tháng nhập vào là tháng 1 và ngày 1 thì ngày tháng năm trước đó sẽ là ngày 31 tháng 12 năm trước đó
  else if (ngay === 1 && thang === 1) {
    d = 31;
    m = 12;
    y = nam - 1;
  } //nếu không rơi vào các trước hợp đặc biệt thì ngày trước đó bằng ngày nhập - 1
  else {
    d = ngay - 1;
  }

  //in kết quả ra màn hinh
  document.getElementById("xuatNgay").innerHTML =
    "Ngày hôm qua là ngày: " + d + "/" + m + "/" + y;
};

document.getElementById("mai").onclick = function () {
  //input: ngay: number, thang: number, nam: number
  var ngay = Number(document.getElementById("ngay").value);
  var thang = Number(document.getElementById("thang").value);
  var nam = Number(document.getElementById("nam").value);
  //output: d, m, y: number
  var d = ngay;
  var m = thang;
  var y = nam;
  //progress:
  var ngayTrongThang;
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ngayTrongThang = 31;
      break;
    case 2: {
      ngayTrongThang = 28;
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11:
      ngayTrongThang = 30;
      break;
  }
  //TÌM NGÀY SAU ĐÓ
  if (ngay === ngayTrongThang && thang !== 12) {
    d = 1;
    m = thang + 1;
  } else if (ngay === ngayTrongThang && thang == 12) {
    d = 1;
    m = 1;
    y = nam + 1;
  } else d = ngay + 1;
  //in kết quả ra màn hinh
  document.getElementById("xuatNgay").innerHTML =
    "Ngày mai là ngày: " + d + "/" + m + "/" + y;
};

//Bài 6:Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
document.getElementById("TinhNgay").onclick = function () {
  //input: m: number, y: number
  var m = Number(document.getElementById("month").value);
  var y = Number(document.getElementById("year").value);
  var ngayTrongThang;
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ngayTrongThang = 31;
      break;
    case 2: {
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        ngayTrongThang = 29;
      } else ngayTrongThang = 28;
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11:
      ngayTrongThang = 30;
      break;
  }
  //in kết quả ra màn hinh
  document.getElementById("xuatRaNgay").innerHTML =
    "Tháng " + m + " năm " + y + " có " + ngayTrongThang + " ngày";
};

//Bài 7:Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
document.getElementById("docSo").onclick = function () {
  //input: so3ChuSo: number
  var so3ChuSo = Number(document.getElementById("so3ChuSo").value);
  //output: xuatDoc : string
  var xuatDoc = "";
  //progress
  var hangTram = Math.floor(so3ChuSo / 100);
  var hangChuc = Math.floor((so3ChuSo % 100) / 10);
  var hangDonVi = so3ChuSo % 10;

  //đọc hàng trăm
  switch (hangTram) {
    case 1:
      xuatDoc = "Một trăm";
      break;
    case 2:
      xuatDoc = "Hai trăm";
      break;
    case 3:
      xuatDoc = "Ba trăm";
      break;
    case 4:
      xuatDoc = "Bốn trăm";
      break;
    case 5:
      xuatDoc = "Năm trăm";
      break;
    case 6:
      xuatDoc = "Sáu trăm";
      break;
    case 7:
      xuatDoc = "Bảy trăm";
      break;
    case 8:
      xuatDoc = "Tám trăm";
      break;
    case 9:
      xuatDoc = "Chín trăm";
      break;
  }
  //đọc hàng chục
  if (hangTram !== 0 && hangChuc === 0 && hangDonVi !== 0) {
    xuatDoc += " lẻ ";
  } else {
    switch (hangChuc) {
      case 1:
        xuatDoc += " mười ";
        break;
      case 2:
        xuatDoc += " hai mươi ";
        break;
      case 3:
        xuatDoc += " ba mươi ";
        break;
      case 4:
        xuatDoc += " bốn mươi ";
        break;
      case 5:
        xuatDoc += " năm mươi ";
        break;
      case 6:
        xuatDoc += " sáu mươi ";
        break;
      case 7:
        xuatDoc += " bảy mươi ";
        break;
      case 8:
        xuatDoc += " tám mươi ";
        break;
      case 9:
        xuatDoc += " chín mươi ";
        break;
    }
  }

  //đọc hàng đơn vị
  switch (hangDonVi) {
    case 1:
      {
        if (hangChuc === 0 || hangChuc === 1) {
          xuatDoc += "một";
        } else {
          xuatDoc += "mốt";
        }
      }
      break;
    case 2:
      xuatDoc += "hai";
      break;
    case 3:
      xuatDoc += "ba";
      break;
    case 4:
      xuatDoc += "bốn";
      break;
    case 5:
      xuatDoc += "năm";
      break;
    case 6:
      xuatDoc += "sáu";
      break;
    case 7:
      xuatDoc += "bảy";
      break;
    case 8:
      xuatDoc += "tám";
      break;
    case 9:
      xuatDoc += "chín";
      break;
  }
  if (so3ChuSo === 0) {
    xuatDoc = "Dzui lòng nhập số lớn hơn 0";
  }
  //in kết quả ra màn hinh
  document.getElementById("xuatDocSo").innerHTML = xuatDoc;
};

//Bài 8:Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất
document.getElementById("timSVXa").onclick = function () {
  //input: tenSV1, tenSV2, tenSV3: string, toaDoX1, toaDoX2, toaDoX3, toaDoXTruong, toaDoY1, toaDoY2, toaDoY3, toaDoYTruong: number
  var tenSV1 = document.getElementById("tenSV1").value;
  var toaDoX1 = +document.getElementById("toaDoX1").value;
  var toaDoY1 = +document.getElementById("toaDoY1").value;
  var tenSV2 = document.getElementById("tenSV2").value;
  var toaDoX2 = +document.getElementById("toaDoX2").value;
  var toaDoY2 = +document.getElementById("toaDoY2").value;
  var tenSV3 = document.getElementById("tenSV3").value;
  var toaDoX3 = +document.getElementById("toaDoX3").value;
  var toaDoY3 = +document.getElementById("toaDoY3").value;
  var toaDoXTruong = +document.getElementById("toaDoXTruong").value;
  var toaDoYTruong = +document.getElementById("toaDoYTruong").value;
  //output SVXa: string, dMax,d1, d2, d3: number
  dMax = 0;
  SVXa = "";
  //progress
  d1 = Math.sqrt(
    Math.pow(toaDoXTruong - toaDoX1, 2) + Math.pow(toaDoYTruong - toaDoY1, 2)
  );
  d2 = Math.sqrt(
    Math.pow(toaDoXTruong - toaDoX2, 2) + Math.pow(toaDoYTruong - toaDoY2, 2)
  );
  d3 = Math.sqrt(
    Math.pow(toaDoXTruong - toaDoX3, 2) + Math.pow(toaDoYTruong - toaDoY3, 2)
  );
  SVXa = Math.max(d1, d2, d3);
  switch (SVXa) {
    case d1:
      SVXa = "Sinh viên xa trường nhất là: " + tenSV1;
      break;
    case d2:
      SVXa = "Sinh viên xa trường nhất là: " + tenSV2;
      break;
    case d3:
      SVXa = "Sinh viên xa trường nhất là: " + tenSV3;
      break;
  }
  //in kết quả ra màn hinh
  document.getElementById("xuatSVXa").innerHTML = SVXa;
};
