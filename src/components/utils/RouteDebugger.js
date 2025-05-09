import React, { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

// This is a utility component to help debug routing issues
const RouteDebugger = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.group('Route Debugger');
    console.log('Current pathname:', location.pathname);
    console.log('Current search:', location.search);
    console.log('Current params:', params);
    console.log('Current state:', location.state);
    console.groupEnd();
  }, [location, params]);

  return (
    <div className="fixed bottom-0 right-0 bg-black bg-opacity-80 text-white p-4 m-4 rounded-lg max-w-md overflow-auto z-50" style={{ maxHeight: '300px' }}>
      <h3 className="text-lg font-bold mb-2">Route Debugger</h3>
      <div className="text-sm mb-2">
        <strong>Path:</strong> {location.pathname}
      </div>
      <div className="text-sm mb-2">
        <strong>Params:</strong> {JSON.stringify(params, null, 2)}
      </div>
      <div className="text-sm mb-4">
        <strong>Query:</strong> {location.search}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button 
          onClick={() => navigate('/solutions/residential')}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs"
        >
          Residential
        </button>
        <button 
          onClick={() => navigate('/solutions/commercial')}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs"
        >
          Commercial
        </button>
        <button 
          onClick={() => navigate('/solutions/public-safety')}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs"
        >
          Public Safety
        </button>
      </div>
    </div>
  );
};

export default RouteDebugger;