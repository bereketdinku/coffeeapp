import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../../../theme/theme';
import HeaderBar from '../../../components/Headerbar';
import EmptyListAnimation from '../../../components/EmptyListAnimation';
import { router } from 'expo-router';
import FavoritesItemCard from '../../../components/FavoritesItemCard';
import { useStore } from '../../../store/store';
const FavoritesScreen = () => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  useEffect(()=>{
console.log(FavoritesList.length)
  },[FavoritesList])
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title='Favourites' />
            {
              FavoritesList.length == 0 ? (null) : (
                <View style={styles.ListItemContainer}>
                  {FavoritesList.map((data: any) => (
                    <TouchableOpacity onPress={() => {
                      router.push({
                        pathname: 'detail',
                        params: {
                          index: data.index,
                          id: data.id,
                          type: data.type
                        }
                      })
                    }}
                      key={data.id}
                    >
                      <FavoritesItemCard
                        id={data.id}
                        imagelink_portrait={data.imagelink_portrait}
                        name={data.name}
                        special_ingredient={data.special_ingredient}
                        type={data.type}
                        ingredients={data.ingredients}
                        average_rating={data.average_rating}
                        ratings_count={data.ratings_count}
                        roasted={data.roasted}
                        description={data.description}
                        favourite={data.favourite}
                        ToggleFavouriteItem={ToggleFavourite}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )
            }
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default FavoritesScreen;
