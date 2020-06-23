import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import {request, PERMISSIONS} from 'react-native-permissions';

MapboxGL.setAccessToken('pk.eyJ1IjoiZXZvcmVzdCIsImEiOiJja2JyNDE0eDYwM2p3MnNxeHVydHBrMjNpIn0.nTH8Py47Ql9nTY_6w1uSjw');


request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
    console.log('eae prof');
});

export default class App extends Component {
    render() {
        return (
            <MapboxGL.MapView
                showUserLocation={true}
                style={{ flex: 1 }}
                userTrackingMode={1}
                styleURL={MapboxGL.StyleURL.Dark}
            >
        <MapboxGL.Camera
            followUserLocation
            zoomLevel={12}
            followUserMode="course"
            pitch={60}        
        />
        <MapboxGL.UserLocation />
        </MapboxGL.MapView>
        );
      }
}
