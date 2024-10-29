
export function CardSkeleton() {
    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
      
      <div className="mt-4 space-y-2">
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        
        <div className="flex items-center space-x-4 mt-4">
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
        </div>

        <div className="flex items-center mt-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-8 ml-2 animate-pulse" />
        </div>
      </div>
    </div>
    );
}