import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  // Search Icon,
  MagnifyingGlassIcon,
  // Adjustments Icon
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';



const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
            navigation.setOptions({
               headerShown: false,
            });
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
     {/*<Text className="text-red-500">
        {/*header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>
        
    {/* Search  */}     
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
          {/*    <SearchIcon /> */} 
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput 
            placeholder="Tafuta Ndani ya Mgahawa" 
            keyboardType="default"
            />
          </View>

         {/*  <AdjustmentsIcon color="#00CCBB" /> */} 
            <AdjustmentsHorizontalIcon color="#00CCBB" />
        </View>
         
    {/* Body  */} 
    <ScrollView 
    className= "bg-gray-100"
    contentContainerStyle={{
      paddingBottom: 100,

    }} 
    >
      {/* Categories  */} 
       <Categories />

      {/* Featured Rows  */} 
      
       <FeaturedRow 
          id="1"
          title="Featured"
          description="Bidhaa zilizolipwa na mteja"
          
       />
       <FeaturedRow 
          id="2"
          title="Punguzo"
          description="Bidhaa zilizolipwa na mteja"
          
       />
       <FeaturedRow 
          id="3"
          title="Ofa Kabambe"
          description="Bidhaa zilizolipwa na mteja"
          
       />

    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;