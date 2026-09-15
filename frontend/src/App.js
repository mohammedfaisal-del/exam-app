import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/student/Dashboard";
import TeacherDashboard from "./pages/teacher/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import CreateExam from "./pages/teacher/CreateExam";
import AddQuestions from "./pages/teacher/AddQuestions";
import ExamList from "./pages/student/ExamList";
import TakeExam from "./pages/student/TakeExam";
import Results from "./pages/student/Results";
import MyExams from "./pages/teacher/MyExams";
import ExamResults from "./pages/teacher/ExamResults";
import ManageUsers from "./pages/admin/ManageUsers";
import AllExams from "./pages/admin/AllExams";
import AllSubmissions from "./pages/admin/AllSubmissions";
const HomeRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "student") return <Navigate to="/student" replace />;
  if (user.role === "teacher") return <Navigate to="/teacher" replace />;
  if (user.role === "admin") return <Navigate to="/admin" replace />;
  return <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/exams"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <ExamList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/exams/:examId/take"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <TakeExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/results"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Results />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/create-exam"
            element={
              <ProtectedRoute allowedRoles={["teacher", "admin"]}>
                <CreateExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/exams/:examId/questions"
            element={
              <ProtectedRoute allowedRoles={["teacher", "admin"]}>
                <AddQuestions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/exams"
            element={
              <ProtectedRoute allowedRoles={["teacher", "admin"]}>
                <MyExams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/exams/:examId/results"
            element={
              <ProtectedRoute allowedRoles={["teacher", "admin"]}>
                <ExamResults />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AllExams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/submissions"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AllSubmissions />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
