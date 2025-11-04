import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

// DFT Headquarters - Manga House, Kiambere Road, Nairobi, Kenya
const center = {
  lat: -1.2864, // Approximate coordinates for Kiambere Road area
  lng: 36.8172,
};

export default function DFTMap() {
  const [apiKey, setApiKey] = useState('');
  const [showMap, setShowMap] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!showMap) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
        <MapPin className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Google Maps</h3>
        <p className="text-sm text-gray-600 mb-4 text-center max-w-md">
          Enter your Google Maps API key to view the DFT headquarters location.
          Get your API key from the{' '}
          <a
            href="https://console.cloud.google.com/google/maps-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Cloud Console
          </a>
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Enter Google Maps API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={() => setShowMap(true)}
            disabled={!apiKey}
          >
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-50 rounded-lg p-8">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">Error loading map</p>
          <p className="text-sm text-gray-600">{loadError.message}</p>
          <Button
            onClick={() => setShowMap(false)}
            variant="outline"
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={center}
      options={{
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
      }}
    >
      <Marker
        position={center}
        title="DFT Consult - Manga House, Kiambere Road"
        animation={google.maps.Animation.DROP}
      />
    </GoogleMap>
  );
}
