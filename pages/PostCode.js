import * as React from 'react';
import Postcode from '@actbase/react-daum-postcode';
import {Alert} from 'react-native'

export default function PostCode({navigation}){
  return (
      <Postcode
          style={{ width: "100%", height: "100%" }}
          jsOptions={{ animation: true }}
          onSelected={ data=>{
            //console.log(JSON.stringify(data.address))
            navigation.navigate('방 내놓기'),{"postcode": JSON.stringify(data.address)}
            Alert.alert("주소 선택 완료!",data.address);
          }}
      />
     );
}