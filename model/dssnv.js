class DanhSach {
    constructor(data) {
        this.danhSach = [];
    }
themNV (nv) {
    this.danhSach.push(nv);

}
timvitriNV (tk) {
    var index = -1;
    console.log(this.danhSach);
    this.danhSach.forEach((nv,id) => {
        console.log(nv);
        if (nv.tknv === tk) {
            index = id;
        }
    })
    return index;
}
xoa (i) {
    console.log(i);
    this.danhSach = this.danhSach.filter((nv,index)=>{
        return index !== i;
    })
    console.log(this.danhSach);
}


sua (tk) {
    var index = this.timvitriNV(tk);
    if (index !== -1) {
        return this.danhSach[index];
    }    
    return null
    };

capNhat (nv) {
    var index = this.timvitriNV(nv.tknv);
    console.log(index);
    if (index !== -1) {
         this.danhSach[index] = nv;
    }
}


ktTaikhoan (tk) {
    var trung = false;
    this.danhSach.forEach(nv =>{
        if (tk == nv.tknv) {
            trung = true;
        }
    })
   return trung;
}

// timNV (tk) {
//     return this.danhSach.find(nv => nv.tknv === tk);
// }
    timKiem (keyword) {
        var mangTimKiem = []
        this.danhSach.forEach(function (item) {
            if (item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
              mangTimKiem.push(item);
            }
          });
          return mangTimKiem;
    }
}