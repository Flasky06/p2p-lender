import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoanListings from "../screens/LoanListings";
import LoanDetails from "../screens/LoanDetails";
import Account from "../screens/Account";
import Withdraw from "../screens/Withdraw";
import AddFunds from "../screens/AddFunds";
import EnterMobile from "../screens/EnterMobile";
import VerifyMobile from "../screens/VerifyMobile";
import PersonnalInfo from "../screens/PersonnalInfo";
import WorkInfo from "../screens/WorkInfo";
import SetPassword from "../screens/SetPassword";
import LoanRequest from "../screens/LoanRequest";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="EnterMobile">
    <Stack.Screen name="LoanListings" component={LoanListings} />
    <Stack.Screen name="LoanDetails" component={LoanDetails} />
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="AddFunds" component={AddFunds} />
    <Stack.Screen name="Withdraw" component={Withdraw} />
    <Stack.Screen name="EnterMobile" component={EnterMobile} />
    <Stack.Screen name="VerifyMobile" component={VerifyMobile} />
    <Stack.Screen name="PersonnalInfo" component={PersonnalInfo} />
    <Stack.Screen name="WorkInfo" component={WorkInfo} />
    <Stack.Screen name="SetPassword" component={SetPassword} />
    <Stack.Screen name="LoanRequest" component={LoanRequest} />
  </Stack.Navigator>
);
