import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { vi } from "date-fns/locale";
const timeZone = "Asia/Bangkok";
export function displayDueDate(date) {
    const utcDate = fromZonedTime(date, timeZone);
    const localDate = toZonedTime(utcDate, timeZone);

    const timeString = format(localDate, "HH:mm");

    if (isToday(localDate)) return `Hôm nay ${timeString}`;
    if (isYesterday(localDate)) return `Hôm qua ${timeString}`;
    if (isTomorrow(localDate)) return `Ngày mai ${timeString}`;

    const currentYear = new Date().getFullYear();
    const dateYear = localDate.getFullYear();

    if (currentYear === dateYear) {
        return `${format(localDate, "dd 'tháng' M", { locale: vi })} ${timeString}`;
    } else {
        return `${format(localDate, "dd 'tháng' M, yyyy", { locale: vi })} ${timeString}`;
    }
}
