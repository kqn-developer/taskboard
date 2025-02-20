export const taskStatuses = [
    {
        id: 1,
        name: "Việc cần làm",
        bgColor: "bg-gray-400",
        value: "todo",
    },
    {
        id: 2,
        name: "Đang làm",
        bgColor: "bg-blue-400",
        value: "in_progress",
    },
    {
        id: 3,
        name: "Hoàn thành",
        bgColor: "bg-green-400",
        value: "completed",
    },
];

export const taskPriorities = [
    {
        id: 1,
        name: "Ưu tiên 1",
        color: "text-red-500",
        level: 1,
    },
    {
        id: 2,
        name: "Ưu tiên 2",
        color: "text-yellow-500",
        level: 2,
    },
    {
        id: 3,
        name: "Ưu tiên 3",
        color: "text-blue-500",
        level: 3,
    },
];

export const taskLabels = [
    {
        id: 1,
        name: "Sức khỏe",
    },
    {
        id: 2,
        name: "Công việc",
    },
    {
        id: 3,
        name: "Gia đình",
    },
    {
        id: 4,
        name: "Tài chính",
    },
    {
        id: 5,
        name: "Giải trí",
    },
];

export const tasks = [
    {
        id: 1,
        name: "Tập thể dục buổi sáng",
        description: "Chạy bộ 30 phút quanh công viên để nâng cao sức khỏe.",
        dueDate: "2025-02-21T07:00:00",
        labels: ["Sức khỏe", "Gia đình"],
        priority: 3,
        status: "todo",
    },
    {
        id: 2,
        name: "Hoàn thành báo cáo tuần",
        description: "Tổng hợp số liệu và viết báo cáo cho cuộc họp thứ Hai.",
        dueDate: "2025-02-23T18:00:00",
        labels: ["Công việc", "Tài chính"],
        priority: 2,
        status: "in_progress",
    },
    {
        id: 3,
        name: "Mua sắm nhu yếu phẩm",
        description: "Mua rau, thịt, gạo và sữa cho cả tuần.",
        dueDate: "2025-02-22T16:00:00",
        labels: ["Gia đình", "Tài chính"],
        priority: 1,
        status: "todo",
    },
    {
        id: 4,
        name: "Thanh toán hóa đơn điện nước",
        description: "Kiểm tra và thanh toán hóa đơn tháng này trước ngày 25.",
        dueDate: "2025-02-24T12:00:00",
        labels: ["Tài chính", "Công việc"],
        priority: 3,
        status: "todo",
    },
    {
        id: 5,
        name: "Xem phim cùng gia đình",
        description: "Tối thứ Bảy xem phim hoạt hình cùng con.",
        dueDate: "2025-02-24T20:00:00",
        labels: ["Giải trí", "Gia đình"],
        priority: 1,
        status: "completed",
    },
    {
        id: 6,
        name: "Lên kế hoạch du lịch hè",
        description: "Tìm địa điểm, đặt vé máy bay và khách sạn.",
        dueDate: "2025-03-01T10:00:00",
        labels: ["Giải trí", "Gia đình", "Tài chính"],
        priority: 2,
        status: "in_progress",
    },
    {
        id: 7,
        name: "Họp nhóm dự án",
        description: "Thảo luận tiến độ và kế hoạch cho sprint tiếp theo.",
        dueDate: "2025-02-26T15:00:00",
        labels: ["Công việc", "Sức khỏe"],
        priority: 2,
        status: "todo",
    },
    {
        id: 8,
        name: "Đọc sách phát triển bản thân",
        description: "Đọc 30 phút sách về quản lý thời gian.",
        dueDate: "2025-02-28T21:00:00",
        labels: ["Sức khỏe", "Giải trí"],
        priority: 1,
        status: "in_progress",
    },
    {
        id: 9,
        name: "Kiểm tra ngân sách hàng tháng",
        description: "Xem xét các khoản chi tiêu trong tháng và điều chỉnh kế hoạch tài chính.",
        dueDate: "2025-02-27T09:00:00",
        labels: ["Tài chính", "Công việc"],
        priority: 3,
        status: "todo",
    },
    {
        id: 10,
        name: "Chuẩn bị quà sinh nhật cho bạn",
        description: "Mua quà và viết thiệp chúc mừng.",
        dueDate: "2025-02-25T18:00:00",
        labels: ["Gia đình", "Giải trí"],
        priority: 2,
        status: "completed",
    },
];
