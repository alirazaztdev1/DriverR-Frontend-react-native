import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View, Image, Platform, Text as Text1} from 'react-native';
import {Images} from 'src/assets';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {heightRef, widthRef} from 'src/config/screenSize';
import {colors} from 'src/config/colors';
import DriverDashboardScreen from 'src/screens/Driver/driverHome-screens/dashboard-screen';
import Button, {Alignments} from 'src/components/button';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {fontWeights} from 'src/config/fontWeight';
import {fontSizes} from 'src/config/fontSize';
import PrivacyPolicyScreen from 'src/screens/Driver/sideMenu-screens/privacyPolicy-screen';
import SettingsScreen from 'src/screens/Company/sideMenu-screens/settings-screens';
import ViewProfileScreen from 'src/screens/Company/sideMenu-screens/viewProfile-screen';
import TabNavigator from './company-tab-navigator';
import DeviceInfo from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';
import {
  reset,
  setProfile,
  setUserId,
  setUserToken,
} from 'src/redux/auth/authAction';
import AwesomeAlert from 'react-native-awesome-alerts';
import {getLanguage, getProfile} from 'src/redux/auth/authSelector';
import FaqScreen from 'src/screens/Company/faq-screen';
import SupportTicketsScreen from 'src/screens/Company/customerSupport-screens/supportTickets-screen';
import Modal from 'react-native-modal';
import {fullWidth} from 'src/config/screenSize';
import BuySubscriptionScreen from 'src/screens/Company/subscriptionPlans-screens/updateSubscription-screen';
import Text from 'src/components/text';
import {profile} from '@tensorflow/tfjs';
import {translation} from 'src/config/translation';

const Drawer = createDrawerNavigator();
function NavHeader(props: any) {
  const company = useSelector(getProfile);
  const navigation: any = useNavigation();
  const language = useSelector(getLanguage);
  console.log(company);
  return (
    <View
      style={{
        borderBottomColor: 'lightgray',

        alignItems: 'center',
        height: company
          ? DeviceInfo.hasNotch()
            ? 220 * heightRef
            : 175 * heightRef
          : DeviceInfo.hasNotch()
          ? 300 * heightRef
          : 255 * heightRef,
        top: DeviceInfo.hasNotch() ? -55 : -5,
        borderTopRightRadius: Platform.OS == 'ios' ? 20 : 20 * heightRef,
        shadowColor: 'gray',
        elevation: 2,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.3,
        backgroundColor: colors.secondary1,
      }}>
      <Button
        onPress={() => {
          // navigation.closeDrawer();
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
        isButtonText={false}
        buttonHeight={32 * heightRef}
        buttonWidth={32 * heightRef}
        isIcon
        buttonColor={colors.grey100}
        iconSize={18 * heightRef}
        buttonCorners={20 * heightRef}
        buttonPosition={Alignments.flex_start}
        buttonstyle={{
          marginBottom: 20 * heightRef,
          marginHorizontal: '4%',
          marginTop: Platform.OS == 'ios' ? 55 : 10,
        }}
        iconName={'arrow-back-sharp'}
        iconType={'Ionicons'}
      />
      {company ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20 * heightRef,
          }}>
          <Image
            // source={Images.logo2}
            source={{uri: company.profilePicture}}
            style={{
              width: 70 * widthRef,
              height: 70 * widthRef,
              borderRadius: 50 * widthRef,
              marginLeft: '4%',
            }}
          />
          <View style={{marginLeft: 15 * widthRef}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text1
                numberOfLines={1}
                style={{
                  fontWeight: fontWeights.h600,
                  fontSize: fontSizes.f22,
                  color: colors.background,
                  maxWidth: 150 * widthRef,
                }}>
                {company.name}
              </Text1>

              <Icon
                name={'verified'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.primary}
                style={{alignSelf: 'center', marginLeft: 10}}
              />
            </View>
            <Text1
              numberOfLines={1}
              style={{
                fontWeight: fontWeights.h400,
                fontSize: fontSizes.f12,
                color: colors.background,
                marginTop: 3 * heightRef,
                maxWidth: 150 * widthRef,
              }}>
              {company.email}
            </Text1>
          </View>
        </View>
      ) : (
        <View
          style={{
            height: 80 * heightRef,

            width: '90%',
            zIndex: -1,
          }}>
          <Image
            source={Images.personView}
            resizeMode="cover"
            style={{
              width: 33 * widthRef,
              height: 37 * widthRef,
              borderRadius: 100 * widthRef,
              marginLeft: '2%',
              position: 'absolute',
              top: 32 * heightRef,
              zIndex: 1,
              backgroundColor: colors.background,
            }}
          />
          <LinearGradient
            onTouchEnd={() => {
              navigation.navigate('PersonalInfoStep1Screen');
            }}
            colors={['#CA8C4D', '#CA8C4E', '#F4B26F']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{
              width: '100%',
              height: 80 * heightRef,
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRadius: 10,
              paddingLeft: 10 * widthRef,
              marginTop: 60 * heightRef,
            }}>
            <Text
              language={language}
              style={{
                fontSize: fontSizes.f16,
                fontWeight: fontWeights.w600,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}>
              Complete your profile
            </Text>
            <Text
              language={language}
              style={{
                fontSize: fontSizes.f12,
                fontWeight: fontWeights.h400,
                color: '#ffffff',
                backgroundColor: 'transparent',
                width: '90%',
                marginTop: 3 * heightRef,
              }}>
              Enjoy our services with full access and without restrictions
            </Text>
            <Icon
              name={'navigate-next'}
              type={IconType.MaterialIcons}
              size={28}
              color={colors.background}
              style={{position: 'absolute', right: 5 * widthRef}}
            />
          </LinearGradient>
        </View>
      )}
    </View>
  );
}
function CustomDrawerContent(props: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [logoutModel, setLogoutModel] = useState(false);
  const language = useSelector(getLanguage);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1}}
      showsVerticalScrollIndicator={false}
      style={{
        borderTopRightRadius: Platform.OS == 'ios' ? 20 : 40 * heightRef,
        borderBottomRightRadius: 0,
      }}>
      <NavHeader {...props} />
      <DrawerItemList {...props} />

      <DrawerItem
        style={{
          width: '100%',
          // position: 'absolute',
          bottom: 0,
          shadowColor: 'gray',
          borderTopRightRadius: 10 * heightRef,
          borderColor: 'grey',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.3,
        }}
        labelStyle={{
          fontSize: fontSizes.f13,
          fontWeight: fontWeights.h400,
          marginLeft: -15 * widthRef,
          color: colors.error,
        }}
        label={language == 'Romanian' ? translation['Logout'] : 'Logout'}
        icon={({focused, size}) => (
          <View
            style={{
              height: 24 * heightRef,
              width: 24 * heightRef,
              borderRadius: 12 * heightRef,
              backgroundColor: colors.grey150,
              marginLeft: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons
              name="md-log-out-outline"
              size={18 * heightRef}
              color={colors.error}
            />
            {/* <AwesomeAlert
              show={logoutModel}
              showProgress={false}
              title="Log out"
              titleStyle={{
                color: colors.black,
                alignSelf: 'flex-start',
                marginLeft: -15 * widthRef,
              }}
              message={'Are you sure you want to log out?'}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="Cancel"
              confirmText="Log out"
              confirmButtonColor={colors.success}
              confirmButtonStyle={{
                width: 80,
                alignItems: 'center',
                backgroundColor: colors.primary,
                marginLeft: 40,
              }}
              cancelButtonStyle={{
                width: 80,
                alignItems: 'center',
                backgroundColor: colors.background,
                borderColor: colors.primary,
                borderWidth: 1,
              }}
              cancelButtonTextStyle={{color: colors.primary}}
              onCancelPressed={() => {
                setLogoutModel(false);
              }}
              onConfirmPressed={() => {
                dispatch(setUserToken(''));
                dispatch(setUserId(''));
                dispatch(setProfile({}));
              }}
              onDismiss={() => {
                setLogoutModel(false);
              }}
            /> */}
            <Modal
              backdropOpacity={0.3}
              isVisible={logoutModel}
              onBackdropPress={() => {
                setLogoutModel(false);
              }}
              onSwipeComplete={() => {
                setLogoutModel(false);
              }}
              swipeDirection={['down', 'left', 'right', 'up']}
              style={{flex: 1}}>
              <View
                style={{
                  backgroundColor: colors.background,
                  height: 250 * heightRef,
                  width: 290 * widthRef,
                  alignSelf: 'center',
                  borderRadius: 15 * heightRef,
                  top: 20,
                }}>
                <View
                  style={{
                    width: '95%',
                    // height: 25 * heightRef,

                    marginTop: 20 * heightRef,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      height: 110 * heightRef,
                      width: 110 * heightRef,
                      backgroundColor: '#D7B875',
                      borderRadius: 70 * heightRef,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name={'logout'}
                      type={IconType.MaterialIcons}
                      size={65 * heightRef}
                      color={colors.background}
                      style={{alignSelf: 'center', marginLeft: 10}}
                    />
                  </View>
                  <Text
                    language={language}
                    style={{
                      color: colors.black,
                      fontSize: fontSizes.f13,
                      marginTop: 20 * heightRef,
                      fontWeight: fontWeights.h600,
                    }}>
                    Are you sure you want to logout?
                  </Text>
                  <View
                    style={{flexDirection: 'row', marginTop: 20 * heightRef}}>
                    <Button
                      onPress={() => {
                        setLogoutModel(false);
                      }}
                      buttonText={'Cancel'}
                      buttonHeight={35 * heightRef}
                      buttonWidth={0.33 * fullWidth}
                      buttonColor={colors.background}
                      borderColor={colors.primary}
                      titleColor={colors.primary}
                      iconSize={25}
                      buttonCorners={8 * heightRef}
                      buttonPosition={Alignments.center}
                      titleFontStyle={fontWeights.h500}
                      buttonstyle={{}}
                    />
                    <Button
                      onPress={() => {
                        dispatch(reset());
                      }}
                      buttonText={'Logout'}
                      buttonHeight={35 * heightRef}
                      buttonWidth={0.33 * fullWidth}
                      buttonColor={colors.primary}
                      iconSize={25}
                      buttonCorners={8 * heightRef}
                      buttonPosition={Alignments.center}
                      titleFontStyle={fontWeights.h500}
                      buttonstyle={{marginLeft: 15 * widthRef}}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )}
        onPress={() => {
          setLogoutModel(true);
        }}
      />
    </DrawerContentScrollView>
  );
}
export default function MyDrawer() {
  const company = useSelector(getProfile);
  const language = useSelector(getLanguage);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        swipeEnabled: false,
        drawerActiveBackgroundColor: colors.background,
        sceneContainerStyle: {
          padding: 0,
          margin: 0,
        },
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginLeft: 0,
        },
        drawerStyle: {
          backgroundColor: colors.background,
          width: 300 * widthRef,
          padding: 0,
          margin: 0,

          borderTopRightRadius: 20 * heightRef,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'home-outline'}
                  type={IconType.Ionicons}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'Home'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={TabNavigator}
      />
      {company ? (
        <Drawer.Screen
          name="My profile"
          options={{
            headerShown: false,

            drawerInactiveTintColor: colors.background,

            drawerIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  height: 40 * heightRef,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 24 * heightRef,
                    width: 24 * heightRef,
                    borderRadius: 12 * heightRef,
                    backgroundColor: colors.grey150,
                    marginLeft: '5%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name={'user'}
                    type={IconType.AntDesign}
                    size={15}
                    color={colors.primary}
                    style={{alignSelf: 'center'}}
                  />
                </View>
                <Text
                  language={language}
                  style={{
                    fontSize: fontSizes.f13,
                    fontWeight: fontWeights.h400,
                    marginLeft: 15 * widthRef,
                    color: colors.grey250,
                  }}>
                  {'My profile'}
                </Text>
                <Icon
                  name={'navigate-next'}
                  type={IconType.MaterialIcons}
                  size={20}
                  color={colors.grey250}
                  style={{position: 'absolute', right: 5 * widthRef}}
                />
              </View>
            ),
            headerTintColor: '#24BFF0',
          }}
          component={ViewProfileScreen}
        />
      ) : null}

      <Drawer.Screen
        name="Get Help"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'chatbubble-ellipses-outline'}
                  type={IconType.Ionicons}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'Get help'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={SupportTicketsScreen}
      />
      <Drawer.Screen
        name="Privacy policy"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'ios-shield-checkmark-outline'}
                  type={IconType.Ionicons}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'Privacy policy'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={PrivacyPolicyScreen}
      />
      <Drawer.Screen
        name="Faqs"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'questioncircleo'}
                  type={IconType.AntDesign}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'FAQs'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={FaqScreen}
      />
      <Drawer.Screen
        name="SubscriptionPlan"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'dollar'}
                  type={IconType.FontAwesome}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'Subscription Plan'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={BuySubscriptionScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerShown: false,

          drawerInactiveTintColor: colors.background,

          drawerIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                height: 40 * heightRef,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 24 * heightRef,
                  width: 24 * heightRef,
                  borderRadius: 12 * heightRef,
                  backgroundColor: colors.grey150,
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name={'settings'}
                  type={IconType.Feather}
                  size={15}
                  color={colors.primary}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text
                language={language}
                style={{
                  fontSize: fontSizes.f13,
                  fontWeight: fontWeights.h400,
                  marginLeft: 15 * widthRef,
                  color: colors.grey250,
                }}>
                {'Settings'}
              </Text>
              <Icon
                name={'navigate-next'}
                type={IconType.MaterialIcons}
                size={20}
                color={colors.grey250}
                style={{position: 'absolute', right: 5 * widthRef}}
              />
            </View>
          ),
          headerTintColor: '#24BFF0',
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
