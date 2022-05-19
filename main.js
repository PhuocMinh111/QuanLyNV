// import NhanVien from "./model/nhanvien";
function getEle (ele) {
    return document.getElementById(ele);
}
var ds = new DanhSach();
// getEle("myModal").style.display = "block";
// getEle("myModal").style.opacity = 1;
window.onload = function () {
    $('#myModal').modal('show')
}
// function ktThongTin (nv) {
//     var keys = Object.keys(nv);
//     console.log(keys);
//     keys.forEach(key => {
//         if (!nv[key]) {
//             getEle(`error-${key}`).style.display = "block";
//     }
//         })
 
//  }


function nhapThongTin () {
    var nv = new NhanVien({
     tknv :getEle("tknv").value,
     name :getEle("name").value,
     email : getEle("email").value,
     pass  : getEle("password").value,
     ngaylam : getEle("datepicker").value,
     luong:getEle("luongCB").value,
     chucvu: getEle("chucvu").value,
     giolam:  getEle("gioLam").value,
    })
    console.log(nv);
    ds.themNV(nv);
    // ktThongTin(nv);
    return nv;
}
function taoBang (dsnv) {
getEle("tableDanhSach").innerHTML = dsnv.map((nv,index) => {
    var {tknv,name,email,pass,ngaylam,luong,chucvu,giolam} = nv;

    return (`<tr>
    <td>${tknv}</td>   
    <td>${name}</td>   
    <td>${email}</td>   
    <td>${pass}</td>   
    <td>${ngaylam}</td>   
    <td>${chucvu}</td> 
    <td>${nv.tinhLuong()}</td> 
    <td>${nv.xepLoai()}</td> 
    </tr>`)
})

}
getEle('btnThemNV').onclick = function () {
    console.log(nhapThongTin());
    $('#myModal').modal('hide');
    taoBang(ds.danhSach)
}


