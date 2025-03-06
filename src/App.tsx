
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import { SidebarProvider } from './components/ui/sidebar';
import { AnimatePresence } from 'framer-motion';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AppInitializer } from './components/auth/AppInitializer';

import Index from './pages/Index';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/NotFound';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Support from './pages/Support';
import FAQ from './pages/FAQ';

import Profile from './pages/user/Profile';
import Favorites from './pages/user/Favorites';
import UserReservations from './pages/user/Reservations';
import Messages from './pages/user/Messages';
import Notifications from './pages/user/Notifications';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminListings from './pages/admin/AdminListings';
import AdminJobs from './pages/admin/AdminJobs';
import AdminReviews from './pages/admin/AdminReviews';
import AdminReservations from './pages/admin/AdminReservations';
import AdminPayments from './pages/admin/AdminPayments';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSupport from './pages/admin/AdminSupport';
import AdminSettings from './pages/admin/AdminSettings';
import AdminMessages from './pages/admin/AdminMessages';

import { CompareListings } from './components/CompareListings';
import { useEffect } from 'react';
import { useSiteSettings } from './hooks/useSiteSettings';

function App() {
  const { settings, applySettingsToDOM } = useSiteSettings();
  
  useEffect(() => {
    applySettingsToDOM();
  }, [applySettingsToDOM, settings]);

  return (
    <SidebarProvider>
      <AppInitializer />
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/logement/:id" element={<ListingDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/emplois" element={<Jobs />} />
            <Route path="/emploi/:id" element={<JobDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reservations" element={<UserReservations />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/logements" element={<AdminListings />} />
            <Route path="/admin/emplois" element={<AdminJobs />} />
            <Route path="/admin/avis" element={<AdminReviews />} />
            <Route path="/admin/reservations" element={<AdminReservations />} />
            <Route path="/admin/paiements" element={<AdminPayments />} />
            <Route path="/admin/utilisateurs" element={<AdminUsers />} />
            <Route path="/admin/support" element={<AdminSupport />} />
            <Route path="/admin/parametres" element={<AdminSettings />} />
            <Route path="/admin/messages" element={<AdminMessages />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        
        <CompareListings />
        
        <SonnerToaster position="top-right" closeButton theme="light" 
          toastOptions={{
            classNames: {
              toast: "notification-pop",
              title: "font-semibold",
              description: "text-sm"
            }
          }}
        />
        <Toaster />
      </Router>
    </SidebarProvider>
  );
}

export default App;
