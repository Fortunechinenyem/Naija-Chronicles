import { TimelineFilters as TimelineFiltersType } from "@/types/historical";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface TimelineFiltersProps {
  filters: TimelineFiltersType;
  onFiltersChange: (filters: TimelineFiltersType) => void;
}

const decades = [1960, 1970, 1980, 1990, 2000, 2010, 2020];
const categories = [
  "all",
  "politics",
  "culture",
  "sports",
  "innovation",
  "achievement",
];

export const TimelineFilters = ({
  filters,
  onFiltersChange,
}: TimelineFiltersProps) => {
  const updateFilter = (
    key: keyof TimelineFiltersType,
    value: TimelineFiltersType[keyof TimelineFiltersType]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Events
          </label>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateFilter("searchQuery", e.target.value)
            }
            placeholder="Search historical events..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naija-green"
          />
        </div>

        {/* Decade Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Decade
          </label>
          <select
            value={filters.decade}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              updateFilter(
                "decade",
                e.target.value === "all" ? "all" : parseInt(e.target.value)
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naija-green"
          >
            <option value="all">All Decades</option>
            {decades.map((decade) => (
              <option key={decade} value={decade}>
                {decade}s
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter("category", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naija-green"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all"
                  ? "All Categories"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Filter Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          variant={
            filters.decade === "all" && filters.category === "all"
              ? "primary"
              : "outline"
          }
          size="sm"
          onClick={() =>
            onFiltersChange({ decade: "all", category: "all", searchQuery: "" })
          }
        >
          Show All
        </Button>
        <Button
          variant={filters.category === "politics" ? "primary" : "outline"}
          size="sm"
          onClick={() => updateFilter("category", "politics")}
        >
          Politics
        </Button>
        <Button
          variant={filters.category === "culture" ? "primary" : "outline"}
          size="sm"
          onClick={() => updateFilter("category", "culture")}
        >
          Culture
        </Button>
        <Button
          variant={filters.category === "sports" ? "primary" : "outline"}
          size="sm"
          onClick={() => updateFilter("category", "sports")}
        >
          Sports
        </Button>
      </div>
    </Card>
  );
};
