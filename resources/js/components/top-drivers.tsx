import { Driver } from "@/types/driver";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function TopDrivers({ drivers }: { drivers: Driver[] }) {
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">
                    Top Drivers of the Week
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {drivers.map((d, index) => {
                    const fullName = `${d.first_name} ${d.last_name}`;
                    const initials = `${d.first_name[0]}${d.last_name[0]}`;

                    return (
                        <div
                            key={d.drivers_id}
                            className="flex items-center justify-between border-b pb-3 last:border-none"
                        >
                            <div className="flex items-center gap-3">
                                {/* Rank */}
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                                    {index + 1}
                                </div>

                                {/* Avatar + Name */}
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={d.avatar_url ?? ""} />
                                        <AvatarFallback>{initials}</AvatarFallback>
                                    </Avatar>

                                    <p className="font-medium">{fullName}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <p className="text-sm font-semibold">{d.rating} ★</p>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}
