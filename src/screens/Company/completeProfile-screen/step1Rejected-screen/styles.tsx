import {Platform, StyleSheet} from 'react-native';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import {fontWeights} from 'src/config/fontWeight';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
  },
  image: {
    height: 140 * heightRef,
    width: 140 * widthRef,
    alignSelf: 'center',
    marginTop: 20 * heightRef,
  },
  heading: {
    fontWeight: fontWeights.h600,
    fontSize: fontSizes.f22,
    // marginHorizontal: '1%',
    // marginRight: '5%',
    color: colors.black,
    marginBottom: 10 * heightRef,
  },
  text1: {
    fontWeight: fontWeights.h400,
    fontSize: fontSizes.f11,
    color: colors.primary,
    backgroundColor: colors.background,
    width: 40 * widthRef,
    position: 'absolute',
    zIndex: 1,
    left: 40 * widthRef,
    top: -5 * heightRef,
  },
  text2: {
    marginHorizontal: '5%',
    marginRight: '15%',
    marginTop: 10 * heightRef,
    marginBottom: 30 * heightRef,
    fontWeight: fontWeights.h400,
    fontSize: fontSizes.f14,
    color: '#6B7280',
  },
  backButton: {
    marginBottom: 20 * heightRef,
    marginHorizontal: '4%',
    marginTop: 10 * heightRef,
  },
  iconView: {
    height: 40 * heightRef,
    width: 40 * heightRef,
    backgroundColor: colors.grey100,
    borderRadius: 25 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    height: 60 * heightRef,
    width: 0.9 * fullWidth,
    marginLeft: '5%',
    // backgroundColor: colors.red,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20 * heightRef,
  },
  textInputContainer: {
    justifyContent: 'center',
    marginLeft: '5%',
    borderRadius: 5 * heightRef,
    // marginTop: 50 * heightRef,
    marginBottom: 20 * heightRef,
    width: '90%',
    height: 55 * heightRef,
    borderWidth: 0.75 * heightRef,
    borderColor: colors.secondary,
    padding: 1,
  },
  textInputText: {fontSize: 17 * fontRef, color: 'black'},
  textInputContainerAndroid: {
    justifyContent: 'center',
    borderRadius: 5 * heightRef,
    // marginTop: 50 * heightRef,
    marginBottom: 20 * heightRef,
    width: '95%',
    height: 55 * heightRef,
    borderWidth: 1 * heightRef,
    borderColor: '#BDBDBD',
    padding: 1,
  },
  textInputTextAndroid: {
    fontSize: 17 * fontRef,
    color: 'black',
    // backgroundColor: '#B3261E',
    position: 'absolute',
    top: 2,
    left: 65 * widthRef,
    width: 150 * widthRef,
  },
  flagButton: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'center',
    paddingTop: 5,
  },
  termText: {
    fontWeight: fontWeights.h500,
    fontSize: fontSizes.f12,
    color: colors.black,
    textAlign: 'center',
    alignSelf: 'center',
    width: 0.8 * fullWidth,
    marginBottom: 10,
  },
  termText2: {
    fontWeight: fontWeights.h500,
    fontSize: fontSizes.f12,
    color: '#1153DA',
    textDecorationLine: 'underline',
  },
  bottomView: {
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 0 : 20 * heightRef,
    left: '5%',
    zIndex: 200000,
  },
  bottomView2: {
    // position: 'absolute',
    marginTop: 25 * heightRef,
    bottom: Platform.OS == 'ios' ? 0 : 20 * heightRef,
    left: '5%',
    zIndex: 200000,
  },
  pageView: {
    height: 5,
    width: fullWidth,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  pageInnerView: {
    height: 5,
    width: fullWidth * 0.43,
    backgroundColor: colors.grey100,
    borderRadius: 5 * heightRef,
  },
  input: {
    width: 0.9 * fullWidth,
    marginLeft: '5%',
    backgroundColor: colors.background,
    fontSize: fontSizes.f15,
    // marginTop: 20 * heightRef,
  },
  containerBox: {
    borderColor: colors.grey300,
    borderRadius: 3 * heightRef,
    borderWidth: 2,
    height: 55 * heightRef,
    width: 0.9 * fullWidth,
    alignSelf: 'center',
    marginLeft: '5%',
    marginTop: 25 * heightRef,
    zIndex: 1000,
  },
});
