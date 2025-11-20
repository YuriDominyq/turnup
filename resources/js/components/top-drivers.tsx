import { Driver } from "@/types/driver";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Trophy, Star } from "lucide-react";

export default function TopDrivers({ drivers }: { drivers: Driver[] }) {
    const getRankColor = (index: number) => {
        switch (index) {
            case 0: return "bg-yellow-500 dark:bg-yellow-600 text-white shadow-md";
            case 1: return "bg-gray-400 dark:bg-gray-500 text-white shadow-md";
            case 2: return "bg-amber-700 dark:bg-amber-800 text-white shadow-md";
            default: return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
        }
    };

    const getRatingColor = (rating: number) => {
        if (rating >= 4.9) return "text-yellow-600 dark:text-yellow-500";
        if (rating >= 4.7) return "text-orange-500 dark:text-orange-400";
        return "text-gray-600 dark:text-gray-400";
    };

    const getRankLabel = (index: number) => {
        switch (index) {
            case 0: return "🏆 Champion";
            case 1: return "🥈 Runner-up";
            case 2: return "🥉 Third Place";
            default: return null;
        }
    };

    return (
        <Card className="rounded-2xl shadow-lg border dark:border-gray-800">
            <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Top Drivers of the Week
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {drivers.map((d, index) => {
                    const fullName = `${d.first_name} ${d.last_name}`;
                    const initials = `${d.first_name[0]}${d.last_name[0]}`;
                    const isTopThree = index < 3;
                    const rankLabel = getRankLabel(index);

                    return (
                        <div
                            key={d.drivers_id}
                            className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md border ${isTopThree
                                ? 'bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700'
                                : 'bg-gray-50 dark:bg-gray-900/50 border-transparent'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {/* Enhanced Rank Badge */}
                                <div className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-lg ${getRankColor(index)}`}>
                                    {isTopThree ? <Trophy className="h-5 w-5" /> : index + 1}
                                </div>

                                {/* Avatar + Name */}
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-12 w-12 ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-700 dark:ring-offset-gray-900">
                                        <AvatarImage src={d.avatar_url ?? ""} />
                                        <AvatarFallback className="bg-blue-600 dark:bg-blue-700 text-white font-semibold">
                                            {initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">{fullName}</p>
                                        {rankLabel && (
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {rankLabel}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Rating */}
                            <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                                <Star className={`h-4 w-4 fill-current ${getRatingColor(d.rating)}`} />
                                <p className={`text-sm font-bold ${getRatingColor(d.rating)}`}>
                                    {typeof d.rating === 'string' ? parseFloat(d.rating).toFixed(2) : d.rating.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}