 class NhanVien {
    constructor(nv) {
        var {tknv,name,email,pass,ngaylam,luong,chucvu,giolam} = nv;
        this.tknv = tknv;
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.luong = luong*1;
        this.chucvu = chucvu;
        this.giolam = giolam*1;
        this.tongLuong = this;
        this.loai = "";
    }
    tinhLuong () {
        if (this.chucvu = "Sếp")  {
            this.tongLuong = this.luong*3;
        } else if (this.chucvu = "Trưởng phòng")  {
            this.tongLuong = this.luong*2;
        } else {
            this.tongLuong = this.luong;
        }
        return this.tongLuong;
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

}
