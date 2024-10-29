
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


export function ProductSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Skeleton de la imagen del producto */}
        <div className="w-full aspect-w-1 aspect-h-1 relative rounded-lg overflow-hidden bg-gray-200 animate-pulse" />

        {/* Skeleton de la información del producto */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          {/* Skeleton del título */}
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />

          {/* Skeleton de los precios */}
          <div className="mt-3 flex items-center space-x-2">
            <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          </div>

          {/* Skeleton de las reseñas */}
          <div className="mt-3">
            <div className="flex items-center space-x-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />
              ))}
              <div className="h-5 bg-gray-200 rounded w-24 ml-2 animate-pulse" />
            </div>
          </div>

          {/* Skeleton de la descripción */}
          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
          </div>

          {/* Skeleton de la selección de talla */}
          <div className="mt-6">
            <div className="h-5 bg-gray-200 rounded w-16 animate-pulse" />
            <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="h-10 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>

          {/* Skeleton de los botones de acción */}
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="w-full h-12 bg-gray-200 rounded animate-pulse" />
            <div className="w-full h-12 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Skeleton de la información adicional */}
          <div className="mt-6">
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}