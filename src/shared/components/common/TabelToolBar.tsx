import React from "react";
import { Search, Filter } from "lucide-react";

interface TableToolbarProps {
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;

  filterLabel?: string;
  onFilterClick?: () => void;

  actionLabel?: string;
  onCreate?: () => void;
}

export const TableToolbar: React.FC<TableToolbarProps> = ({
  searchPlaceholder = "Search...",
  onSearch,
  filterLabel = "All",
  onFilterClick,
  actionLabel,
  onCreate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      
      {/* Search */}
      {onSearch && (
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-orange-500/20
              focus:border-orange-500 transition-all"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 w-full sm:w-auto">
        {onFilterClick && (
          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200
              rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">{filterLabel}</span>
            <Filter className="w-4 h-4" />
          </button>
        )}

        {onCreate && actionLabel && (
          <button
            onClick={onCreate}
            className="bg-[#D96B4D] hover:bg-[#c25e41]
              text-white px-6 py-2 rounded-lg font-medium
              transition-colors flex items-center gap-2"
          >
            + {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};
