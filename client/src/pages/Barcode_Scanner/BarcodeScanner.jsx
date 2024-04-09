import React, { useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import Quagga from '@ericblade/quagga2';
import { useNavigate } from 'react-router-dom';

const BarcodeScanner  = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  const handleStartScan = () => {
    setScanning(true);
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-container'),
        constraints: {
          width: 480,
          height: 320,
          facingMode: "environment"
        },
      },
      decoder: {
        readers: ["ean_reader"],
      },
    }, (err) => {
      if (err) {
        console.error(err);
        alert('Error initializing barcode scanner');
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((result) => {
      Quagga.stop();
      setScanning(false);
      navigate(`/product/get?searchValue=${result.codeResult.code}`);
    });
  };

  return (
    <div>
      {!scanning ? (
        <button onClick={handleStartScan}>Scan Barcode</button>
      ) : (
        <div id="scanner-container" style={{ width: '100%', height: '100%' }}>
          <Webcam audio={false} />
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner ;
