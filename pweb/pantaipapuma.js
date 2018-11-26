function terimainput() {
    var x = document.getElementById("nama").value;
    var tgl = new Date();
    var z = document.getElementById("komennya").value;
    var y = document.getElementById("email").value;
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();

    var tabel = document.getElementById("hasilKomentar");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if (!x || !z || !y) {
        alert("Data ada yang kosong");
        
    } else {
        cell1.innerHTML = x;
        cell2.innerHTML = tanggal + " " + namabulan[bulan] + " " + tahun;
        cell3.innerHTML = z;
    }

    var x=document.getElementById("email").value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {
    alert("Isi Email dengan Benar. contoh : blabla@gmail.com");
    }
    return false;
    
}

