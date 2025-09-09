import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { CameraView as Camera } from 'expo-camera';
import { SIZES } from '../constants/Styles';

interface CameraViewProps {
  scanned: boolean;
  onBarCodeScanned: ({ type, data }: { type: string; data: string }) => void;
  onScanAgain: () => void;
}

export default function CameraView({ scanned, onBarCodeScanned, onScanAgain }: Readonly<CameraViewProps>) {
  return (
    <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        onBarcodeScanned={scanned ? undefined : onBarCodeScanned}
      />
      {scanned && (
        <View style={styles.scanUI}>
          <Button
            title={"Scanner à nouveau"}
            onPress={onScanAgain}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  scanUI: {
    position: 'absolute',
    bottom: SIZES.paddingLarge * 2,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
