import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Use HashRouter
import './index.css';
import App from './App.jsx';
import { SearchListings } from './SearchListings.jsx';
import { Listings } from './Listings.jsx';
import ListingDetails from './ListingDetails.jsx';
import { CheckoutServices } from './CheckoutServices.jsx';
import { CheckoutDetails } from './CheckoutDetails.jsx';
import { CheckoutFoods } from './CheckoutFoods.jsx';
import { CheckoutBar } from './CheckoutBar.jsx';
import { CheckouConfirmation } from './CheckouConfirmation.jsx';
import { CheckouGuests } from './CheckouGuests.jsx';
import { Packages } from './Packages.jsx';
import { VendorHomePage } from './vendors/HomePage.jsx';
import { StoreFront } from './vendors/Storefront.jsx';
import { Messages } from './vendors/Messages.jsx';
import { Reviews } from './vendors/Reviews.jsx';
import { Settings } from './vendors/Settings.jsx';
import { AddSpace } from './vendors/AddSpace.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/search' element={<SearchListings />} />
        <Route path='/listing' element={<Listings />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/checkout/services' element={<CheckoutServices />} />
        <Route path='/checkout/details' element={<CheckoutDetails />} />
        <Route path='/checkout/food' element={<CheckoutFoods />} />
        <Route path='/checkout/bar' element={<CheckoutBar />} />
        <Route path='/checkout/guests' element={<CheckouGuests />} />
        <Route path='/checkout/confirm' element={<CheckouConfirmation />} />
        <Route path='/listing-details' element={<ListingDetails />} />
        <Route path="vendor">
          <Route index element={<VendorHomePage />} />
          <Route path="storefront" element={<StoreFront />} />
          <Route path="messages" element={<Messages />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-space" element={<AddSpace />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
