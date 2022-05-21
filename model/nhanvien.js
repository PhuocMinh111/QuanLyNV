function getEle (ele) {
    return document.getElementById(ele);
}
const symbol = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"!","@","#","$","%","&","*"];
const letters = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
const numArr = Array.from({length:10},(_,index)=>(index).toString());
console.log(numArr);

class NhanVien {
    constructor(nv) {
        var {tknv,name,email,pass,ngaylam,luong,chucvu,giolam} = nv;
        this.tknv = tknv;
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.ngaylam = ngaylam;
        this.luong = luong*1;
        this.chucvu = chucvu;
        this.giolam = giolam*1;
        this.tongLuong = 0; 
        this.loai = "";
        this.checked = true;
        this.ktThongTin();
        this.tinhLuong();
        this.xepLoai();
        // console.log(this.checked);
    }
    tinhLuong () {
        if (this.chucvu = "Sếp")  {
            this.tongLuong = this.luong*3;
        } else if (this.chucvu = "Trưởng phòng")  {
            this.tongLuong = this.luong*2;
        } else {
            this.tongLuong = this.luong;
        }
    }  
    xepLoai () {
        var gioLam = this.giolam
        if (gioLam >= 192 ) {
            this.loai = "nhân viên xuất sắc";
        }else if (gioLam <= 192 && gioLam >= 176 ) {
            this.loai = "nhân viên giỏi";
        } else if (gioLam <= 176 && gioLam >= 160) {
            this.loai = "nhân viên khá";
        } else {
            this.loai = " nhân viên trung bình";
        }
        return this.loai;
    }
    ktThongTin () {
        if (this.chucvu === "Chọn chức vụ" ) {
            this.err("chucvu");
            this.checked = false;
        } else {
            this.check("chucvu");
        }
        for (var letter of numArr) {
        if (this.name === "" || !this.name.match(letters)) {
            this.err("name");
            this.checked = false;
        } else {
            this.check("name");
        }
        }
        if (this.pass.length<7 ) {
        for (var letter of symbol) {
        if (!this.pass.includes(letter)) {
            this.err("pass");
            this.checked = false;
            }
        }
        } else {
            this.check("pass");
    }

        if (!this.luong || this.luong > 2000000 && this.luong < 100000) {
            this.err("luong");
            this.checked = false;
        } else {
            this.check("luong");
        }
        if (this.email === "" || !this.email.includes("@")) {
            this.err("email");
            this.checked = false;
        } else {
            this.check("email");
        }
        if (!this.giolam || this.giolam < 8 || this.giolam > 200) {
            this.err("giolam");
            this.checked = false;
        } else {
            this.check("giolam")
        }
        
        
    }
    err (key,msg) {
        getEle(`error-${key}`).style.display = "block";
        if (msg) {
            getEle(`error-${key}`).innerHTML = msg;
        }
        }
    check (key) {
        getEle(`error-${key}`).style.display = "none";
    }

}
