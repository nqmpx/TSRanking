document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const toan = parseFloat(document.getElementById('toan').value);
    const van = parseFloat(document.getElementById('van').value);
    const anh = parseFloat(document.getElementById('anh').value);
    const su = parseFloat(document.getElementById('su').value);
    const dia = parseFloat(document.getElementById('dia').value);
    const gdcd = parseFloat(document.getElementById('gdcd').value);

    const newStudent = new Student('Sinh Viên Mới', toan, van, anh, su, dia, gdcd);

    // Tìm sinh viên trùng điểm
    const existingStudent = students.find(student => 
        student.toan === toan &&
        student.van === van &&
        student.anh === anh &&
        student.su === su &&
        student.dia === dia &&
        student.gdcd === gdcd
    );

    if (existingStudent) {
        newStudent.name = existingStudent.name;
    } else {
        // Trả về thông báo nếu không trùng
        document.getElementById('result').innerHTML = `
            <h2>Kết quả</h2>
            <p>Không khớp với dữ liệu</p>
        `;
        return;
    }

    // Tìm thứ hạng của sinh viên mới cho từng môn học
    const ranks = {
        toan: getRank(students, 'toan', toan),
        van: getRank(students, 'van', van),
        anh: getRank(students, 'anh', anh),
        su: getRank(students, 'su', su),
        dia: getRank(students, 'dia', dia),
        gdcd: getRank(students, 'gdcd', gdcd)
    };

    // Hiển thị kết quả trên trang
    document.getElementById('result').innerHTML = `
        <h2>Kết quả của ${newStudent.name}</h2>
        <p>Toán: ${toan} (Thứ hạng: ${ranks.toan})</p>
        <p>Văn: ${van} (Thứ hạng: ${ranks.van})</p>
        <p>Anh: ${anh} (Thứ hạng: ${ranks.anh})</p>
        <p>Sử: ${su} (Thứ hạng: ${ranks.su})</p>
        <p>Địa: ${dia} (Thứ hạng: ${ranks.dia})</p>
        <p>GDCD: ${gdcd} (Thứ hạng: ${ranks.gdcd})</p>
    `;
});

function getRank(students, subject, score) {
    students.sort((a, b) => b[subject] - a[subject]);
    return students.findIndex(student => student[subject] === score) + 1;
}

class Student {
    constructor(name, toan, van, anh, su, dia, gdcd) {
        this.name = name;
        this.toan = toan;
        this.van = van;
        this.anh = anh;
        this.su = su;
        this.dia = dia;
        this.gdcd = gdcd;
    }
}

const students = [
    new Student("Đỗ Việt Anh", 6.4, 8, 2.6, 5.5, 5.5, 8.5),
    new Student("Nguyễn Thị Hà Anh", 1, 0, 0, 0, 0, 0),
    new Student("Vũ Lưu Bảo Anh", 0, 0, 0, 0, 0, 0),
    new Student("Lý Quang Ánh", 0, 0, 0, 0, 0, 0),
    new Student("Đinh Quốc Bảo", 0, 0, 0, 0, 0, 0),
    new Student("Trần Việt Dũng", 3.2, 6.75, 4.6, 4.75, 5.75, 6.5),
    new Student("Nguyễn Khánh Duy", 3.8, 7.75, 3.2, 6, 8, 6.5),
    new Student("Nguyễn Hải Đăng", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Minh Đức", 4.4, 7, 4.2, 5.75, 6.75, 7.25),
    new Student("Dương Thúy Hạnh", 0, 0, 0, 0, 0, 0),
    new Student("Vũ Đỗ Trọng Hiếu", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Lan Hương", 0, 0, 0, 0, 0, 0),
    new Student("Hoàng Gia Khánh", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Bảo Lâm", 5.4, 7.5, 5, 5.75, 7.75, 8),
    new Student("Nguyễn Duy Linh", 3.2, 7.75, 4.4, 6, 7, 8.75),
    new Student("Nguyễn Quang Minh", 7.6, 5.75, 6.4, 6.25, 8.25, 9),
    new Student("Đỗ Việt Nam", 0, 0, 0, 0, 0, 0),
    new Student("Đinh Thu Phương", 0, 0, 0, 0, 0, 0),
    new Student("Đinh Thị Hà Thu", 0, 0, 0, 0, 0, 0),
    new Student("Đinh Cao Tiến Tới", 0, 0, 0, 0, 0, 0),
    new Student("Đào Anh Tuấn", 7.4, 7.25, 5, 7.25, 7.25, 8),
    new Student("Giáp Đức Vinh", 3.8, 6.5, 2.6, 5, 7, 5.75),
    new Student("Vũ Hải Yến", 5.4, 8.5, 4.8, 5, 6.5, 8.5),

    new Student("Đinh Thị Ngọc Anh", 0, 0, 0, 0, 0, 0),
    new Student("Hoàng Kiều Anh", 0, 0, 0, 0, 0, 0),
    new Student("Hoàng Ngọc Anh", 0, 0, 0, 0, 0, 0),
    new Student("Lê Đức Anh", 0, 0, 0, 0, 0, 0),
    new Student("Lê Đức Anh", 0, 0, 0, 0, 0, 0),
    new Student("Lê Nam Anh", 0, 0, 0, 0, 0, 0),
    new Student("Vũ Thị Khánh Anh", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Vũ Dũng", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Thu Hằng", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Ngọc Hân", 0, 0, 0, 0, 0, 0),
    new Student("Đỗ Như Học", 0, 0, 0, 0, 0, 0),
    new Student("Trần Ngọc Khánh", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Khánh Ly", 0, 0, 0, 0, 0, 0),
    new Student("Trần Khánh Ly", 0, 0, 0, 0, 0, 0),
    new Student("Lưu Duy Mạnh", 0, 0, 0, 0, 0, 0),
    new Student("Giáp Thị Hà My", 0, 0, 0, 0, 0, 0),
    new Student("Đào Tiến Nhàn", 0, 0, 0, 0, 0, 0),
    new Student("Dương Thiên Nhi", 0, 0, 0, 0, 0, 0),
    new Student("Nguyễn Huyền Nhi", 0, 0, 0, 0, 0, 0),
    new Student("Trần Thị Thu Trang", 0, 0, 0, 0, 0, 0),
    new Student("Bùi Bích Trâm", 0, 0, 0, 0, 0, 0),
    new Student("Bùi Thị Ngân Xuyến", 0, 0, 0, 0, 0, 0),
];
