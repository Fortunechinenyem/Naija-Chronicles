"use client";

import { useState } from "react";
import { TimelineFilters as TimelineFiltersType } from "@/types/historical";
import { historicalEvents } from "@/lib/historical-data";
import { TimelineFilters } from "./TimelineFilters";
import { TimelineEvent } from "./TimelineEvent";

export const Timeline = () => {
  const [filters, setFilters] = useState<TimelineFiltersType>({
    decade: "all",
    category: "all",
    searchQuery: "",
  });

  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const filteredEvents = historicalEvents.filter((event) => {
    // Decade filter
    if (
      filters.decade !== "all" &&
      Math.floor(event.year / 10) * 10 !== filters.decade
    ) {
      return false;
    }

    // Category filter
    if (filters.category !== "all" && event.category !== filters.category) {
      return false;
    }

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.peopleInvolved.some((person) =>
          person.toLowerCase().includes(query)
        )
      );
    }

    return true;
  });

  // Sort by year in descending order (most recent first)
  const sortedEvents = filteredEvents.sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-naija-green mb-2">
          Nigeria's Historical Timeline
        </h1>
        <p className="text-gray-600">
          Explore key events since independence in 1960
        </p>
      </div>

      <TimelineFilters filters={filters} onFiltersChange={setFilters} />

      <div className="space-y-6">
        {sortedEvents.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
            <p className="text-gray-500">
              No events found matching your filters.
            </p>
            <button
              className="mt-4 px-4 py-2 border-2 border-naija-green text-naija-green rounded-lg hover:bg-green-50 transition-colors"
              onClick={() =>
                setFilters({ decade: "all", category: "all", searchQuery: "" })
              }
            >
              Clear Filters
            </button>
          </div>
        ) : (
          sortedEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline line */}
              {index < sortedEvents.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-6 bg-gray-300 z-0" />
              )}

              <div className="relative z-10">
                <TimelineEvent
                  event={event}
                  isActive={activeEvent === event.id}
                  onClick={() =>
                    setActiveEvent(activeEvent === event.id ? null : event.id)
                  }
                />
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 text-center text-gray-500">
        Showing {sortedEvents.length} of {historicalEvents.length} events
      </div>
    </div>
  );
};
