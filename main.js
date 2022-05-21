
function getEle (ele) {
    return document.getElementById(ele);
}
var ds = new DanhSach();

// getEle("myModal").style.display = "block";
// getEle("myModal").style.opacity = 1;
window.onload = function () {
    $('#myModal').modal('show');
}
getData();

function nhapThongTin (capnhat) {
    var nv = new NhanVien({
     tknv :getEle("tknv").value,
     name :getEle("name").value,
     email : getEle("email").value,
     pass  : getEle("password").value,
     ngaylam : getEle("datepicker").value,
     luong : getEle("luongCB").value,
     chucvu: getEle("chucvu").value,
     giolam:  getEle("gioLam").value,
    })
    var tk = nv.tknv;
    nv.ktThongTin();
    console.log(tk);
    return nv;
    
}

 



function taoBang (ds) {
getEle("tableDanhSach").innerHTML = ds.map((nv,index) => {
    var {tknv,name,email,pass,ngaylam,loai,tongLuong,luong,chucvu,giolam} = nv;

    return (`<tr>
    <td>${tknv}</td>   
    <td>${name}</td>   
    <td>${email}</td>   
    <td>${ngaylam}</td>   
    <td>${chucvu}</td> 
    <td>${tongLuong}</td> 
    <td>${loai}</td> 
    <td><button 
    onclick="suaNV(${tknv.toString()})"
    class="btn btn-success">
    sửa
    </button> 
    <button 
    class="btn btn-danger mt-1"
    onclick="xoaNV(${tknv.toString()})"
    >Xoá</button>
    </td>
    </tr>`)
});
};
function 

function hienthiNV (nv) {
    var {tknv,name,email,pass,ngaylam,luong,chucvu,giolam} = nv ;
    getEle("tknv").value = tknv;
    getEle("name").value = name;
    getEle("email").value = email;
    getEle("password").value =  pass;
    getEle("datepicker").value =  ngaylam;
    getEle("luongCB").value = luong;
    getEle("chucvu").value = chucvu;
    getEle("gioLam").value = giolam;
}

function suaNV (tk) {
    getEle('btnThemNV').disabled = true;
    var nv = ds.sua(tk);
    if (nv) {
        hienthiNV(nv);
    }
    $('#myModal').modal('show');
    

}
getEle("btnCapNhat").onclick = function () {
    var nv = nhapThongTin();
    getEle("tknv").disabled = true;
    if (nv.checked) {
    ds.capNhat(nv);
    getEle('btnThemNV').disabled = false;
    setData();
    taoBang(ds.danhSach);
    $('#myModal').modal('hide');
    } 
    getEle("tknv").disabled = false;
}


getEle('btnThemNV').onclick = function () {
    var nv = nhapThongTin();
    if (ds.ktTaikhoan(nv.tknv)) {
        nv.err("taikhoan","* trùng tài khoải");
    } else if (nv !== undefined && nv.checked){ 
    ds.themNV(nv);
    console.log(ds.danhSach);
    setData()
    $('#myModal').modal('hide');
    taoBang(ds.danhSach);
    // setData();
}
}

getEle("searchName").addEventListener("keyup",()=>{
    taoBang(ds.timKiem(getEle("searchName").value))
})

function setData() {
    //Convert from JSON to String
    var dataString = JSON.stringify(ds.danhSach);
    //luu xuong localStorage
    localStorage.setItem("data", dataString);
  }


function getData () {
    if (localStorage.getItem("data")) {
        var dataString = localStorage.getItem("data");
        ds.danhSach = JSON.parse(dataString);
        taoBang(ds.danhSach);
    }
}