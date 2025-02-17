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
const createPromise = (delay, student) => {
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 11); // Random số từ 0-10
        console.log(`\nRandom số sau ${delay} giây:`, randomNum);

        setTimeout(() => {
            if (randomNum % 2 === 0) {
                resolve(student); // Thành công nếu số chẵn
            } else {
                reject("Dữ liệu lỗi"); // Thất bại nếu số lẻ
            }
        }, delay * 1000);
    });
};

// Tạo hai Promise với thời gian chờ khác nhau
const promise1 = createPromise(2, students[0]); // Chờ 2 giây
const promise2 = createPromise(4, students[1]); // Chờ 4 giây

// Sử dụng Promise.all để chạy cả hai Promise cùng lúc
Promise.all([promise1, promise2])
    .then(results => {
        console.log("\nLấy dữ liệu hoàn thành:", results);
    })
    .catch(error => {
        console.log("\nLỗi khi lấy dữ liệu:", error);
    });

// Sử dụng Promise.race để lấy dữ liệu từ Promise hoàn thành trước
Promise.race([promise1, promise2])
    .then(result => {
        console.log("\nĐã lấy được dữ liệu:", result);
    })
    .catch(error => {
        console.log("\nLỗi khi lấy dữ liệu:", error);
    });
