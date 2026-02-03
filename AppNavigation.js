// AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// App provider and screens (adjust paths if your files live elsewhere)
import CalendarScreen from './app/calendar';
import CompleteCourses from './app/complete-courses';
import CourseDetails from './app/course-details';
import CourseMaterials from './app/course-materials';
import LearnerDashboard from './app/dashboard';
import CoursesList from './app/enroll-courses';
import LoginScreen from './app/login';
import ProfileScreen from './app/profile';
import RegistrationScreen from './app/register';
import UploadAssessment from './app/upload-assessment';
import AppProvider from './src/context/AppProvider';

// Admin screens (optional)
import AdminDashboard from './app/admin/dashboard';
import ManageCalendar from './app/admin/manage-calendar';
import ManageCourses from './app/admin/manage-courses';
import ViewLearners from './app/admin/view-learners';
import ViewSubmissions from './app/admin/view-submissions';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          {/* Auth */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />

          {/* Learner flows */}
          <Stack.Screen name="Dashboard" component={LearnerDashboard} />
          <Stack.Screen name="Courses" component={CoursesList} />
          <Stack.Screen name="CourseDetails" component={CourseDetails} />
          <Stack.Screen name="CourseMaterials" component={CourseMaterials} />
          <Stack.Screen name="CompletedCourses" component={CompleteCourses} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="UploadAssessment" component={UploadAssessment} />
          <Stack.Screen name="Profile" component={ProfileScreen} />

          {/* Admin flows */}
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="ManageCourses" component={ManageCourses} />
          <Stack.Screen name="ManageCalendar" component={ManageCalendar} />
          <Stack.Screen name="ViewLearners" component={ViewLearners} />
          <Stack.Screen name="ViewSubmissions" component={ViewSubmissions} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
