
// khởi tạo object chuyenXe
this.chuyenXe = function () {
    var tenChuyenXe
    var maChuyenXe
    var tenTaiXe
    var gia
    var bienSo
    this.getChuyenXe = getChuyenXe

}
// khởi tạo object chuyenXeNoiThanh kế thừa object chuyenXe
this.chuyenXeNoiThanh = function () {
    chuyenXe.call(this)
    var thoiGianDiChuyen
    this.setChuyenXeNoiThanh = setChuyenXeNoiThanh
    this.getChuyenXeNoiThanh = getChuyenXeNoiThanh
}

//khởi tạo object chuyenXeNgoaiThanh kế thừa object chuyenXe
this.chuyenXeNgoaiThanh = function () {
    chuyenXe.call(this)
    var noiXuatPhat
    var noiDen
    this.setChuyenXeNgoaiThanh = setChuyenXeNgoaiThanh
    this.getChuyenXeNgoaiThanh = getChuyenXeNgoaiThanh
}



//khởi tạo phương thức setChuyenXeNoiThanh
function setChuyenXeNoiThanh(tenChuyenXe, maChuyenXe, tenTaiXe, gia, bienSo, thoiGianDiChuyen) {
    this.tenChuyenXe = tenChuyenXe
    this.maChuyenXe = maChuyenXe
    this.tenTaiXe = tenTaiXe
    this.gia = gia
    this.bienSo = bienSo
    this.thoiGianDiChuyen = thoiGianDiChuyen
}

//khởi tạo phương thức setChuyenXeNgoaiThanh
function setChuyenXeNgoaiThanh(tenChuyenXe, maChuyenXe, tenTaiXe, gia, bienSo, noiXuatPhat, noiDen) {
    this.tenChuyenXe = tenChuyenXe
    this.maChuyenXe = maChuyenXe
    this.tenTaiXe = tenTaiXe
    this.gia = gia
    this.bienSo = bienSo
    this.noiXuatPhat = noiXuatPhat
    this.noiDen = noiDen
}


//khởi tạo phương thức getChuyenXe
function getChuyenXe() {
    var data = `tenChuyenXe :${this.tenChuyenXe},maChuyenXe:${this.maChuyenXe},tenTaiXe:${this.tenTaiXe},gia:${this.gia},bienSo:${this.bienSo},`;
    return data
}

//khởi tạo phương thức getChuyenXeNoiThanh
function getChuyenXeNoiThanh() {
    var data2 = this.getChuyenXe() + `thoiGianDiChuyen:${this.thoiGianDiChuyen}`;
    return data2
}


//khởi tạo phương thức getChuyenXeNgoaiThanh
function getChuyenXeNgoaiThanh() {
    var data3 = this.getChuyenXe() + `noiXuatPhat:${this.noiXuatPhat},noiDen:${this.noiDen}`;
    return data3
}


var object = new chuyenXeNoiThanh()
var object2 = new chuyenXeNgoaiThanh()
//thiết lập giá trị cho chuyenXeNoiThanh bằng phương thức setChuyenXeNoiThanh
object.setChuyenXeNoiThanh("Bến Thành - Quận 9", "001", "Kiều Đình Thái", "3000", "51A-34565", "3")
object2.setChuyenXeNgoaiThanh("HCM-Đồng Nai", "002", "Kiều Đình", "50000", "51A-34564", "SuốiTiên", "LongKhánh")
console.log(object.getChuyenXeNoiThanh());
console.log(object2.getChuyenXeNgoaiThanh());



