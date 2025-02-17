// Khai báo kiểu dữ liệu student
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}

// Tạo một mảng gồm 4 sinh viên
const students = [
    new Student("Huy", 19, 8, 7),
    new Student("Trinh", 17, 6, 5),
    new Student("Hien", 20, 9, 9),
    new Student("Anh", 22, 7, 6)
];

// Sử dụng map để in ra xếp loại của từng sinh viên
students.map(student => {
    let avg = (student.score1 + student.score2) / 2;
    let rank = avg >= 8 ? "Giỏi" : avg >= 6.5 ? "Khá" : avg >= 5 ? "Trung bình" : "Yếu";
    console.log(`${student.name}: ${rank}`);
});

// Sử dụng reduce để tính trung bình cộng điểm của SV trong lớp
const totalAvg = students.reduce((sum, student) => sum + (student.score1 + student.score2) / 2, 0) / students.length;
console.log("Điểm trung bình cả lớp:", totalAvg.toFixed(2));

// Sử dụng some để kiểm tra xem có sinh viên nào dưới 18 tuổi hay không
const hasUnder18 = students.some(student => student.age < 18);
console.log("Có sinh viên nào dưới 18 tuổi không?", hasUnder18);

// Sử dụng every để kiểm tra cả lớp có đầy đủ tên hay không
const allHaveNames = students.every(student => student.name.trim() !== "");
console.log("Tất cả sinh viên có đầy đủ tên không?", allHaveNames);
