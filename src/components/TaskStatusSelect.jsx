import { taskStatuses } from "@/data/taskData.js";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx";

export default function TaskStatusSelect({ value, onChange }) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-auto gap-1">
                <SelectValue placeholder="Việc cần làm" />
            </SelectTrigger>
            <SelectContent>
                {taskStatuses.map((status) => (
                    <SelectItem key={status.id} value={status.value}>
                        {status.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
