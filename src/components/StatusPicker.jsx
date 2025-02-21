import { taskStatuses } from "@/data/taskData.js";
import { Controller } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx";

export default function StatusPicker({ defaultStatus, control }) {
    return (
        <Controller
            name="status"
            control={control}
            render={({ field }) => (
                <Select defaultValue={defaultStatus} value={field.value} onValueChange={field.onChange}>
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
            )}
        />
    );
}
