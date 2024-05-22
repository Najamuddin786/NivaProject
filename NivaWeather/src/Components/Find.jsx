import {Box,Image,Text,Input, Button, Spinner} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"


export default function Find(){
    let [location,setLocation]=useState("Off")
    let [data,setData]=useState(false)
    console.log(data)
    let [lodding,setLodding]=useState(false)
    let [error,setError]=useState(false)
    function detectLocation(){
        if(location=='Off'){
            setLocation("On")
        }else{
            setLocation("Off")
        }
    }
    function Your(){
        if(lodding){
            return <>
                    <Text><Spinner/>Lodding Now</Text>
            </>
        }
        if(error){
            return <>
                    <Text color={'red'}>Name is wrong</Text>
            </>
        }

        return (<>
                <Box>
                    {data!==false ? <Box color={'white'}>
                    <Text>{data.resolvedAddress}</Text>
                    
                    <Box><Text>Temperatue : { data.currentConditions.temp}</Text></Box> 
                     <Box><Text>Feelslike : {data.currentConditions.feelslike }</Text></Box>
                    <Box><Text>Humidity : {data.currentConditions.humidity}</Text></Box>
                    
                    <Box><Text>SunRise : {data.currentConditions.sunrise}</Text></Box>
                    <Box><Text>SunSet : {data.currentConditions.sunset}</Text></Box>
                   
                </Box> : null}
                </Box>
        </>)
    }

   async function getData(e){
        let city=e.target.value;
        console.log(city)
        setLodding(true)

            try {
                let res=await axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=35MVQRAL94HH64AF86NXGEC9Q&contentType=json`);
                console.log(res.data)
                setData(res.data)
                setLodding(false)
                setError(false)
            } catch (error) {
                console.log("error")
                setLodding(false)
                setError(true)
                
            }


    }
    return (<>
             <Box gap={'3'} display={'flex'} flexDirection={'column'}>
            <Text color={'wheat'} fontSize={'2rem'} fontWeight={600}>Find Your Weater Now</Text>
            <Text>Enter Your Location </Text>
            <Input placeholder='Patna' onChange={getData}></Input>
            <Box gap={4} alignItems={'center'}  display={'flex'}><Text>Auto Detact Locaton </Text> <Button onClick={detectLocation}>  {location}</Button></Box>
            <Your/>
        </Box>
    </>)
}