import React,{useState, useEffect} from 'react';
import { TouchableOpacity,ScrollView,StyleSheet, Text,Image, View, TextInput, Button, Alert } from 'react-native';

import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import base64 from 'base-64'
import OptionButton from '../components/OptionButton'

import Postcode from '@actbase/react-daum-postcode';
import DateTimePicker from '@react-native-community/datetimepicker';

import search from '../assets/search.png'
import bed from "../assets/bed.png"
import desk from "../assets/desk.png"
import fridge from "../assets/fridge.png"
import airconditioner from "../assets/airconditioner.png"
import chair from "../assets/chair.png"
import closet from "../assets/closet.png"
import washer from "../assets/washer.png"
import microwave from "../assets/microwave.png"
import wifi from "../assets/wifi.png"
import tv from "../assets/tv.png"
import cctv from "../assets/cctv.png"
import parking from "../assets/parking.png"
import elevator from "../assets/elevator.png"
import stove from "../assets/stove.png"
import add from "../assets/add.png"
import vr_image from "../assets/vr_image.png"
import image_add from "../assets/image_add.png"
import cimg from "../iconimage/cimg.png"



export default function PutOutRoom({navigation, route}) {

  const [img1,setImg1] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl93ASaa2NdIwZutsY6l82DpqvKCI5B43XBQ&usqp=CAU")
  const [img2,setImg2] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl93ASaa2NdIwZutsY6l82DpqvKCI5B43XBQ&usqp=CAU")
  const [img3,setImg3] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl93ASaa2NdIwZutsY6l82DpqvKCI5B43XBQ&usqp=CAU")
  const [img4,setImg4] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl93ASaa2NdIwZutsY6l82DpqvKCI5B43XBQ&usqp=CAU")
  const [img5,setImg5] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl93ASaa2NdIwZutsY6l82DpqvKCI5B43XBQ&usqp=CAU")
  const [post,setPost] = useState('주소')
  //컨텐츠 새로고침,데이터 갱신
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      if(route.params != undefined){
      if(route.params.image1 != undefined){
        setImg1(route.params.image1)}
      if(route.params.image2 != undefined){
        setImg2(route.params.image2)}
      if(route.params.image3 != undefined){
        setImg3(route.params.image3)}
      if(route.params.image4 != undefined){
        setImg4(route.params.image4)}
      if(route.params.image5 != undefined){
        setImg5(route.params.image5)}
      if(route.params.postcode != undefined){
        setPost(route.params.postcode)
        console.log("focused");
      }
      }
    }
  }, [isFocused])

  const [date1, setDate1] = useState(new Date(1598051730000));
  const [date2, setDate2] = useState(new Date(1598051730000));

  const [kcol, setKcol] = useState([0,0,0,0])
  const [mcol, setMcol] = useState([0,0])
  const [tcol, setTcol] = useState([0,0])
  const [scol, setScol] = useState([0,0,0])
  const [ccol, setCcol] = useState([0,0])

  const [room, setRoom] = useState('')
  const [category, setCategory] = useState('')
  const [rent, setRent] = useState('')
  const [address, setAddress] = useState('')

  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [smoking, setSmoking] = useState('')

  const [deposit, setDeposit] = useState(0)
  const [monthly, setMonthly] = useState(0)
  const [control, setControl] = useState(0)
  const [area,setArea] = useState(0)
  const [floor,setFloor] = useState(0)
  const [construction,setConstruction] = useState(0)

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJFbWFpbCI6InJ1cnVAZW1haWwuY29tIiwiaWF0IjoxNjA5MzQ5MDc2fQ.oG0IUwH9W07XOLVEABDVwSPHpFqjjy8tu9QIixLMqpc"

  let colour = ["#C4C4C4","#D84315"]
  const [show, setShow] = useState(false);

  let kind = ["원룸", "투룸 이상", "오피스텔", "아파트"]
  let method = ["단기임대","양도"]
  let type = ["월세","전세"]
  let sex = ["남성","여성","무관"]
  let cigar = ["비흡연","무관"]

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow(Platform.OS === 'ios');
    setDate1(currentDate);
    setDate2(currentDate)
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow(Platform.OS === 'ios');
    setDate2(currentDate);
  };
  const kindColor = (i) =>{
    let col = [0,0,0,0]
    col[i] = 1
    setKcol(col)
    setRoom(kind[i])
  }
  const methodColor = (i) =>{
    let col = [0,0]
    col[i] = 1
    setMcol(col)
    setCategory(method[i])
  }
  const typeColor = (i) =>{
    let col = [0,0]
    col[i] = 1
    setTcol(col)
    setRent(type[i])
  }
  const sexColor = (i) =>{
    let col = [0,0,0]
    col[i] = 1
    setScol(col)
    setGender(sex[i])
  }
  const cigarColor = (i) =>{
    let col = [0,0]
    col[i] = 1
    setCcol(col)
    if (i==0){
      setSmoking('비흡연')
    }
    else{
      setSmoking('무관')
    }
  }

  let form = {
    type : {
      roomType : room,
      category : category,
      rentType : rent, 
    },
    price : {
      deposit : deposit,
      monthly : monthly,
      control : control,
    },
    information : {
      area : area,
      floor: floor,
      construction : construction,
      address: post+" "+address,
      description : description,
    },
    rentPeriod:{
      startDate : date1,
      endDate : date2,
    },
    options:{
      bed : true,
      table : false,
      chair : true,
      closet : true,
      airconditioner : true,
      induction : true,
      refrigerator : true,
      tv : true,
      doorlock : true,
      microwave : true,
      washingmachine : false,
      cctv : true,
      wifi : false,
      parking : false,
      elevator : false,
    },
    conditions:{
      gender : gender,
      smoking : smoking,
    },
    photo:{
      main: img1,
      restroom: img2,
      kitchen: img3,
      photo1: img4,
      photo2: img5
      // main : base64.encode(img1),
      // restroom : base64.encode(img2),
      // kitchen : base64.encode(img3),
      // photo1 : base64.encode(img4),
      // photo2 : base64.encode(img5),
      // main : img1.base64,
      // restroom : img2.base64,
      // kitchen : img3.base64,
      // photo1 : img4.base64,
      // photo2 : img5.base64,
    }
  }

  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>매물 종류</Text>
        <View style = {styles.btnContainer}>
          <View style = {styles.twoBtnContainer}>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[kcol[0]]}]} onPress={()=>kindColor(0)}>
              <Text style = {styles.text}>{kind[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[kcol[1]]}]} onPress={()=>kindColor(1)}>
              <Text style = {styles.text}>{kind[1]}</Text>
            </TouchableOpacity>          
          </View>
          <View style = {styles.twoBtnContainer}>
          <TouchableOpacity style = {[styles.button,{backgroundColor:colour[kcol[2]]}]} onPress={()=>kindColor(2)}>
              <Text style = {styles.text}>{kind[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.button,{backgroundColor:colour[kcol[3]]}]} onPress={()=>kindColor(3)}>
              <Text style = {styles.text}>{kind[3]}</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>계약 방식</Text>
        <View style = {styles.btnContainer}>
          <View style = {styles.twoBtnContainer}>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[mcol[0]]}]} onPress={()=>methodColor(0)}>
              <Text style = {styles.text}>{method[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[mcol[1]]}]} onPress={()=>methodColor(1)}>
              <Text style = {styles.text}>{method[1]}</Text>
            </TouchableOpacity>     
          </View>
        </View>
      </View>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>거래 유형</Text>
        <View style = {styles.btnContainer}>
          <View style = {styles.twoBtnContainer}>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[tcol[0]]}]} onPress={()=>typeColor(0)}>
              <Text style = {styles.text}>{type[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button,{backgroundColor:colour[tcol[1]]}]} onPress={()=>typeColor(1)}>
              <Text style = {styles.text}>{type[1]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>임대 기간</Text>
        <View style = {styles.twoPicker}>
          <DateTimePicker style={styles.date} minimumDate={new Date(2021,10,1)} maximumDate={new Date(2050,0,1)}
              testID="dateTimePicker"
              value={date1}
              mode='date'
              display="default"
              onChange={onChange1}
          />
          <Text style={
            [{
              alignSelf:"center",
              fontSize:20,
              fontWeight:'700'
          }]}>~</Text>
          <DateTimePicker style={styles.date} minimumDate={new Date(2021,10,1)} maximumDate={new Date(2050,0,1)}
              testID="dateTimePicker"
              value={date2}
              mode='date'
              display="default"
              onChange={onChange2}
          />
        </View>
      </View>
      <View style = {styles.components}>
        <Text style={styles.subTitle}>주소 입력</Text>
        {/* <TouchableOpacity style={styles.address} 
          onPress={()=>{navigation.navigate('주소 검색')}}> 
          <Image source={search} style={{
            alignSelf:"flex-end",
            marginRight:5,
            marginTop:7,
          }}/>
        </TouchableOpacity> */}
        <Postcode
          style={{ width: "100%", height: 500 }}
          jsOptions={{ animation: true }}
          onSelected={ data=>{
            //console.log(JSON.stringify(data.address))
            setPost(data.address)
            console.log(post)
            navigation.navigate('방 내놓기'),{"postcode": data.address}
            console.log(post)
            Alert.alert("주소 선택 완료!",post);
          }}
      />
        <Text style={styles.textInputStyle}>{post}</Text>
        <TextInput
              style={styles.textInputStyle}
              placeholder="상세주소를 입력하세요."
              placeholderTextColor="#60605e"
              onChangeText={text=>setAddress(text)}
        />
      </View>

      <View style = {styles.components}>
        <Text style = {styles.subTitle}>기본 정보</Text>
          <View style={[styles.info,{borderTopWidth:1}]}>
              <Text style={styles.infoComp}>보증금</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 200"
              placeholderTextColor="#60605e"
              onChangeText={text=>setDeposit(text)}
              />
              <Text style={styles.infoData}>만원</Text>
          </View>
          <View style={styles.info}>
              <Text style={styles.infoComp}>월세</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 30"
              placeholderTextColor="#60605e"
              onChangeText={text=>setMonthly(text)}
              />
              <Text style={styles.infoData}>만원</Text>
          </View>
          <View style={styles.info}>
              <Text style={styles.infoComp}>관리비</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 5"
              placeholderTextColor="#60605e"
              onChangeText={text=>setControl(text)}
              />
              <Text style={styles.infoData}>만원</Text>
          </View>
          <View style={styles.info}>
              <Text style={styles.infoComp}>전용 면적</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 10"
              placeholderTextColor="#60605e"
              onChangeText={text=>setArea(text)}
              />
              <Text style={styles.infoData}>평</Text>
          </View>
          <View style={styles.info}>
              <Text style={styles.infoComp}>층수</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 5"
              placeholderTextColor="#60605e"
              onChangeText={text=>setFloor(text)}
              />
              <Text style={styles.infoData}>층</Text>
          </View>
          <View style={styles.info}>
              <Text style={styles.infoComp}>건축년도</Text>
              <TextInput
              style={styles.basicInput}
              keyboardType="number-pad"
              placeholder="ex) 2020"
              placeholderTextColor="#60605e"
              onChangeText={text=>setConstruction(text)}
              />
              <Text style={styles.infoData}>년</Text>
          </View>

      </View>

      <View style = {styles.components}>
        <Text style = {styles.subTitle}>부가 옵션</Text>
        <View style = {styles.btnContainer}>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="침대" img={bed}></OptionButton>
            <OptionButton content="책상" img={desk}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="냉장고" img={fridge}></OptionButton>
            <OptionButton content="에어컨" img={airconditioner}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="의자" img={chair}></OptionButton>
            <OptionButton content="옷장" img={closet}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="세탁기" img={washer}></OptionButton>
            <OptionButton content="전자레인지" img={microwave}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="WIFI" img={wifi}></OptionButton>
            <OptionButton content="TV" img={tv}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="복도 CCTV" img={cctv}></OptionButton>
            <OptionButton content="주차 가능" img={parking}></OptionButton>
          </View>
          <View style = {styles.twoBtnContainer}>
            <OptionButton content="엘리베이터" img={elevator}></OptionButton>
            <OptionButton content="가스레인지" img={stove}></OptionButton>
          </View>
        </View>
      </View>

      <View style = {styles.components}>
        <Text style = {styles.subTitle}>조건</Text>
        <Text style = {styles.optionTitle}>성별</Text>
        <View style = {styles.smallBtnContainer}>
          <TouchableOpacity style = {[styles.sButton,{backgroundColor:colour[scol[0]]}]} onPress={()=>sexColor(0)}>
              <Text style = {styles.sText}>{sex[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.sButton,{backgroundColor:colour[scol[1]]}]} onPress={()=>sexColor(1)}>
              <Text style = {styles.sText}>{sex[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.sButton,{backgroundColor:colour[scol[2]]}]} onPress={()=>sexColor(2)}>
              <Text style = {styles.sText}>{sex[2]}</Text>
          </TouchableOpacity>
        </View>
        <Text style = {styles.optionTitle}>흡연여부</Text>
        <View style = {styles.smallBtnContainer}>
          <TouchableOpacity style = {[styles.sButton,{backgroundColor:colour[ccol[0]]}]} onPress={()=>cigarColor(0)}>
              <Text style = {styles.sText}>{cigar[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.sButton,{backgroundColor:colour[ccol[1]]}]} onPress={()=>cigarColor(1)}>
              <Text style = {styles.sText}>{cigar[1]}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>상세 설명</Text>
        <TextInput
              style={styles.detailInputStyle}
              multiline
              numberOfLines={10}
              placeholder="방에 대한 상세 설명을 작성해주세요."
              placeholderTextColor="#60605e"
              keyboardType="default"
              onChangeText={text=>setDescription(text)}
        />
      </View>
      <View style =  {{height:220, backgroundColor:"#FFF",padding:10, marginTop:5,marginBottom:5}}>
        <Text style = {styles.subTitle}>방 사진 업로드</Text>
        <ScrollView style={styles.detailImage} horizontal indicatorStyle={"white"}>
          <TouchableOpacity style={styles.smallImage} onPress={()=>{navigation.navigate('대표사진')}}>
            <Image style={styles.showimage} source={{uri: img1}} resizeMode={"cover"}/>
            <Text style={styles.imageTitle}>대표사진</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImage} onPress={()=>{navigation.navigate('화장실')}}> 
            <Image style={styles.showimage} source={{uri: img2}}/>
            <Text style={styles.imageTitle}>화장실</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImage} onPress={()=>{navigation.navigate('부엌')}}>
            <Image style={styles.showimage} source={{uri: img3}}/>
            <Text style={styles.imageTitle}>부엌</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImage} onPress={()=>{navigation.navigate('사진1')}}>
            <Image style={styles.showimage} source={{uri: img4}}/>
            <Text style={styles.imageTitle}>사진1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImage} onPress={()=>{navigation.navigate('사진2')}}>
            <Image style={styles.showimage} source={{uri: img5}}/>
            <Text style={styles.imageTitle}>사진2</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style = {styles.components}>
        <Text style = {styles.subTitle}>360° 방 사진</Text>
        <Text style = {styles.detailText}>
        VR 카메라를 이용해 촬영하거나 '구글 스트리트 뷰' 앱으로 제작하세요.{"\n"}
        사진의 크기는 가로:세로=2:1의 비율이어야 합니다.{"\n"}
        사진의 확장자는 .jpeg 입니다.
        </Text>
        <TouchableOpacity style={styles.add_image}>
          <Image source={vr_image} style={{
            alignSelf:"center",
            marginTop:100,
          }}></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style = {styles.cButton} onPress={()=>
      axios.post(`http://54.180.160.150:5000/api/v1/room`,JSON.stringify(form),{
        headers: {
          Authorization : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6MjR9LCJpYXQiOjE2MzY0NDE2MzUsImV4cCI6MTYzNzY1MTIzNX0.1XGUeQ7tQ23nQcT3iLAtVFoEO_govS9cHED71LRYbCc`,
          "content-type" : "application/json"
        }
      })
      .then(function(response){
        console.log(response)
        navigation.navigate("MainPage")
        Alert.alert("방이 정상적으로 등록되었습니다.")
      })
      .catch(function(error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          //console.log(error.response.headers);
        }
        else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        }
        else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('Error', error.message);
        }
        console.log(error.config);
        //Alert.alert(JSON.stringify(error.response.status))
      })
      }>
        <Text style = {styles.cText}>방 내놓기</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#F6F6F6",
  },
  button : {
    width:150,
    height:50,
    marginRight:5,
    marginLeft:5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
  },
  text : {
    color:"#FFF",
    fontWeight:"700",
    fontSize:20,
  },
  sButton : {
    width:90,
    height:50,
    marginRight:5,
    marginLeft:5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
  },
  sText : {
    color:"#FFF",
    fontWeight:"700",
    fontSize:20,
  },
  cButton : {
    width:"100%",
    height:72.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#D84315"
  },
  cText : {
    color:"#FFF",
    fontWeight:"700",
    fontSize:20,
  },
  components:{
    backgroundColor:"#FFF",
    padding:10,
    marginTop:5,
    marginBottom:5
  },
  titleRow:{
    flexDirection:"row",
  },
  title:{
    fontSize:20,
    fontWeight:'500',
    marginTop:30,
    alignSelf:'center',
    marginLeft:110,
    flex:10,
  },
  subTitle:{
    fontSize:20,
    fontWeight:'700',
    marginTop:10,
    marginLeft:40,
  },
  optionTitle:{
    fontSize: 15,
    fontWeight:'700',
    marginTop:20,
    marginLeft:40
  },
  btnContainer: {
    marginTop:10,
    alignItems:"center"
  },
  twoBtnContainer:{
    marginTop:10,
    flexDirection:"row",
  },
  smallBtnContainer:{
    marginTop:20,
    marginLeft:30,
    flexDirection:"row",
  },
  arrow:{
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  backArrow:{
    width:30,
    height:30,
    borderRadius:10,
    marginTop:30,
    marginLeft:20,
    alignSelf:'flex-start',
    alignItems:'flex-start',
    backgroundColor:"#FFF",
    flex:1,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  twoPicker:{
    marginTop:10,
    flexDirection:"row",
  },
  date:{
    margin:5,
    flex:1,
    marginLeft:30
  },
  deposit:{
    flexDirection:"row",
    marginLeft:30
  },
  textInputStyle: {
    marginTop:20,
    width: 300,
    borderColor:"#C4C4C4",
    borderBottomWidth:2,
    borderRadius:5,
    padding: 5,
    alignSelf:"center",
    flex:1
  },
  address:{
    marginTop:10,
    alignSelf:"center",
    width:300,
    height:40,
    borderRadius:13,
    backgroundColor:"#F1F0F0",
  },
  detailInputStyle:{
    marginTop:20,
    borderRadius:5,
    borderWidth:1,
    borderColor:"#C4C4C4",
    width:300,
    height:370,
    alignSelf:"center",
    padding:5
  },
  add_image:{
    marginTop:20,
    width:250,
    height:250,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#C4C4C4",
    alignSelf:"center"
  },
  detailImage:{
    marginTop:10,
    padding:5,
    height:80,
    marginLeft:20,
    flexDirection:"row"
  },
  smallImage:{
    marginTop:10,
    height:100,
    width:100,
    borderColor:"#C4C4C4",
    borderRadius:5,
    borderWidth:1,
    marginLeft:10,
  },
  showimage:{
    borderRadius:5,
    width:"90%",
    height:"90%",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:5,
    marginTop:5
  },
  add:{
    marginTop:50,
  },
  imageTitle:{
    alignSelf:"center",
    marginTop:20,
    fontWeight:"700",
  },
  detailText:{
    marginTop:10,
    marginLeft:40,
    color:"#8A8A8A",
    fontSize:10,
  },
  basicInput:{
    fontSize:15,
    fontWeight:"500",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems:"center",
    flex:2,
  },
  info:{
    flexDirection:"row",
    height:55,
    width:"100%",
    borderBottomWidth:1,
    borderColor:"#E5E5E5",
  },
  infoComp:{
      marginLeft:20,
      alignSelf:"center",
      flex:1.2,
      fontSize:15,
      color:"#8A8A8A",
  },
  infoData:{
      flex:1,
      fontSize:15,
      color:"#000",
      alignSelf:"center",
      fontWeight:"500",
  },
})
