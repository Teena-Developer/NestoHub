import { TextInput, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'


import colors from '../../util/colors';
import { vh, vw } from '../../util/dimensions';
import { localImages } from '../../util/localImages';
import { FlatList } from 'react-native-gesture-handler';
import { getAPI } from '../../util/api';


function Home({navigation}) {
  const [selected, setSelected] = useState('Select Utility')
  const [isClicked, setIsClicked] = useState(false)
  const [isSearchOpen, setIsisearchOpen] = useState(false)
  const [radius, setRadius] = useState('')
  const [selectSearch, setSelectSearch] = useState('')
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])
  const utilityData = ['accounting', 'airport', 'bank', 'bakery', 'art_gallery'];

  

  const submit = () =>{
    navigation.navigate('Location',{
      area:selectSearch.position,
      utility:selected,
      radius:radius
    })
    // console.log("area",selectSearch.position)
    // console.log("utility",selected)
    // console.log("radius",radius)
    
  }

  useEffect(() => {
    let payload = {
      at: '28.704060,77.102493',
      limit: 5,
      lang: 'en',
      q: search,
      apiKey: 'mdTsqnAcuz3OPyVQokJnBc0nnl8CQFh0A4-ZQWZA_-k'
    }
    getAPI(
      'https://autosuggest.search.hereapi.com/v1/autosuggest',
      payload,
      (response) => {
        console.log(`response of ${search} is-->>`, response);
        setFilterData(response?.data?.items ?? [])

      },
      (error) => console.log(error)
    )
  }, [search])

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.countryItem}
        onPress={() => {
          setSelected(item);
          setIsClicked(false);
        }}
        key={index}
      >
        <Text key={index}>{item}</Text>
      </TouchableOpacity>
    )
  }

  const keyExtractor = (item, index) => index

  return (
    <SafeAreaView style={styles.container}>
      {/* SELECT AREA SECTION */}
      <TextInput
        style={styles.radiusInput}
        placeholder='Search'
        onChangeText={(e) => {
          setSearch(e)
          if (!isSearchOpen)
            setIsisearchOpen(true)
        }}
        value={search}
      />

      {
        (isSearchOpen && search?.trim()?.length) ?
          <View style={styles.searchArea}>
            {
              filterData?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.searchTxt}
                    onPress={() => {
                      setSearch(item.title)
                      setIsisearchOpen(false)
                      setSelectSearch(item)
                      console.log('item',item)
                    }
                    }
                  >
                    <Text
                      key={index}
                    >
                      {item?.title ?? ''}
                    </Text>
                  </TouchableOpacity>

                )
              })
            }
          </View> : null
      }

      {/* UTILITY SECTION */}
      <TouchableOpacity style={styles.dropdownSelector} onPress={() => setIsClicked(!isClicked)}>
        <Text>{selected}</Text>
        <Image source={localImages.DROPDOWN} />
      </TouchableOpacity>
      {
        isClicked ?
          <FlatList
            style={styles.dropDownArea}
            data={utilityData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          /> : null
      }

      {/* RADIUS SECTION */}
      <TextInput
        style={styles.radiusInput}
        placeholder='Enter Radius (In Meters)'
        onChangeText={(e) => setRadius(e)}
      />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.btnTxt}>Submit</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: vw(22),
    paddingVertical: vh(30),
    backgroundColor: colors.WHITE
  },
  searchArea: {
    position: "absolute",
    top: vh(115),
    left: vw(23),
    width: "100%",
    height: vh(300),
    borderRadius: vw(8),
    marginTop: vh(10),
    zIndex: 1,
    backgroundColor: colors.WHITE, borderWidth: 1,
    paddingLeft: vw(10),
    paddingVertical: vh(10)
  },
  searchTxt: {
    fontSize: vw(15),
    paddingBottom: vw(10)
  },
  dropdownSelector: {
    width: '100%',
    height: vh(50),
    borderRadius: vw(10),
    borderWidth: vw(1),
    borderColor: colors.BLUE,
    alignItems: "center",
    marginTop: vw(50),
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: vw(15)
  },
  dropDownArea: {
    position: "absolute",
    top: vh(230),
    // left: vw(23),
    alignSelf: 'center',
    width: "100%",
    height: vh(300),
    borderRadius: vw(10),
    marginTop: vh(10),
    zIndex: 1,
    backgroundColor: colors.WHITE,
    borderWidth: 1

  },
  countryItem: {
    width: '100%',
    paddingHorizontal: vw(10),
    paddingVertical: vh(10),
    borderBottomWidth: (0.4),
    marginTop: vw(15)
  },
  radiusInput: {
    borderWidth: 1,
    marginTop: vw(30),
    borderRadius: vw(10),
    paddingHorizontal: vw(10)
  },
  button: {
    borderWidth: 1,
    borderRadius: vw(20),
    paddingVertical: vw(10),
    alignItems: "center",
    marginTop: vh(100),
    backgroundColor: colors.BLUE
  },
  btnTxt: {
    color: colors.WHITE
  }


})