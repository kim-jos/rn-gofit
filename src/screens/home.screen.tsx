import firestore from "@react-native-firebase/firestore";
import React, {useRef, useState} from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Classes } from "../backend/models/classes.model";
import WebView from "react-native-webview";

export default function HomeScreen() {
  const [classes, setClass] = useState<any>();
  const webViewRef = useRef(null);

  const getClasses = async () => {
    const studios = await firestore().collection("classes").get();
    setClass(
      studios.docs.map((studio) => ({ ...studio.data(), idx: studio.id }))
    );
  };

  return (
    <View style={{flex:1}}>
      <Text>home screen</Text>
      <Button title="데이터 불러오기" onPress={getClasses} />
      {classes?.map((studio: Classes, idx: string) => {
        return (
          <TouchableOpacity key={idx}>
            <Text>{studio?.name}</Text>
          </TouchableOpacity>
        );
      })}
      {/*<WebView*/}
      {/*    ref={webViewRef}*/}
      {/*    source={{*/}
      {/*      uri: `https://www.reitwagen.co.kr`,*/}
      {/*    }}*/}
      {/*    javaScriptEnabled={true}*/}
      {/*    bounces={true}*/}
      {/*    textZoom={100}*/}
      {/*    pullToRefreshEnabled={true}*/}
      {/*    domStorageEnabled={true}*/}
      {/*    scalesPageToFit={true}*/}
      {/*    useWebKit={true}*/}
      {/*    onMessage={e => {*/}
      {/*      console.log(e)*/}
      {/*    }}*/}
      {/*    setSupportMultipleWindows*/}
      {/*    originWhitelist={['*']}*/}
      {/*    injectedJavaScript={*/}
      {/*      'window.isApp=true;document.body.style.backgroundColor="black";'*/}
      {/*    }*/}
      {/*/>*/}
    </View>
  );
}
