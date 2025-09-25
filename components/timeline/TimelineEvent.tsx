import { HistoricalEvent } from "@/types/historical";
import { Card } from "../ui/Card";

interface TimelineEventProps {
  event: HistoricalEvent;
  isActive?: boolean;
  onClick?: () => void;
}

const categoryColors = {
  politics: "bg-blue-100 text-blue-800",
  culture: "bg-purple-100 text-purple-800",
  sports: "bg-green-100 text-green-800",
  innovation: "bg-orange-100 text-orange-800",
  achievement: "bg-yellow-100 text-yellow-800",
};

const significanceIcons = {
  high: "⭐",
  medium: "🔸",
  low: "🔹",
};

export const TimelineEvent = ({
  event,
  isActive,
  onClick,
}: TimelineEventProps) => {
  return (
    <Card
      className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
        isActive ? "ring-2 ring-naija-green transform scale-105" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-2xl font-bold text-naija-green">
          {event.year}
        </span>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              categoryColors[event.category]
            }`}
          >
            {event.category}
          </span>
          <span className="text-lg">
            {significanceIcons[event.significance]}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {event.title}
      </h3>
      <p className="text-gray-600 mb-4">{event.description}</p>

      {event.peopleInvolved.length > 0 && (
        <div className="mb-3">
          <span className="text-sm text-gray-500">Key People: </span>
          <span className="text-sm font-medium">
            {event.peopleInvolved.join(", ")}
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-1">
        {event.region.map((region) => (
          <span
            key={region}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
          >
            {region}
          </span>
        ))}
      </div>

      {isActive && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{event.detailedStory}</p>
        </div>
      )}
    </Card>
  );
};
