import { ArrowLeft, Menu, X } from "lucide-react";
import { VendorHeader } from "../components/vendor/VendorHeader";
import './addSpace.css';
import { useState } from "react";
import { SpaceDetails } from "../components/vendor/addSpace/SpaceDetails";
import { Availability } from "../components/vendor/addSpace/Availability";
import { LocationMap } from "../components/vendor/addSpace/LocationMap";
import Faqs from "../components/vendor/addSpace/Faqs";
import AddSpaceImages from "../components/vendor/addSpace/AddSpaceImages";
import AddSpaceVideos from "../components/vendor/addSpace/AddSpaceVideos";
import AddSpace3D from "../components/vendor/addSpace/AddSpace3D";
import { useNavigate } from "react-router";
import { FoodMenu } from "../components/vendor/addSpace/FoodMenu";
import { BarMenu } from "../components/vendor/addSpace/BarMenu";
import { AddFoodMenu } from "../components/vendor/addSpace/AddFoodMenu";
import { AddBarMenu } from "../components/vendor/addSpace/AddBarMenu";


export const AddSpace = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('space-details');

    const handleActiveMenu = (menuName) => {
        setActiveMenu(menuName);
        setShowMenu(false);
    }

    const navigate = useNavigate();

    return (
        <div className='bg-gray-100 min-h-screen'>
            <VendorHeader />
            <div className='pb-12'>
                {/* GO Back Button */}
                <div className='py-2 px-4 flex w-full justify-between lg:justify-end bg-white mb-4'>
                    <button
                        className='text-primary-dark text-base font-bold flex lg:hidden items-center gap-2 py-2 px-4 rounded-md'
                        onClick={() => setShowMenu(true)}
                    >
                        <Menu />
                    </button>

                    <button
                        className='bg-primary-dark text-white text-base font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary-dark/80'
                        onClick={() => navigate('/vendor/storefront')}
                    >
                        <ArrowLeft />   Go Back
                    </button>
                </div>
                <div className="container mx-auto">
                    <div className='grid grid-cols-12 gap-4'>
                        {/* Menu */}
                        <div className={`col-span-12 lg:col-span-3 bg-white p-4 lg:rounded-2xl h-screen lg:h-auto lg:relative fixed z-50 top-0 left-0 right-0 ${showMenu ? 'block' : 'hidden lg:block'}`}>
                            <div className="flex lg:hidden items-center justify-end mb-2">
                                <X size={45} className="p-1 text-primary-dark hover:text-primary-dark/70" onClick={() => setShowMenu(false)} />
                            </div>
                            <ul>
                                <li className={`add-space-menu-list ${activeMenu === 'space-details' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('space-details')}>Space Details</li>
                                <li className={`add-space-menu-list ${activeMenu === 'availability' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('availability')}>Availability</li>
                                <li className={`add-space-menu-list ${activeMenu === 'location-and-map' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('location-and-map')}>Location and map</li>
                                <li className={`add-space-menu-list ${activeMenu === 'faqs' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('faqs')}>FAQs</li>
                                <li className={`add-space-menu-list ${activeMenu === 'photos' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('photos')}>Photos</li>
                                <li className={`add-space-menu-list ${activeMenu === 'videos' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('videos')}>Videos</li>
                                <li className={`add-space-menu-list ${activeMenu === '3d-view' && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('3d-view')}>3D View</li>
                                <li className={`add-space-menu-list ${(activeMenu === 'food-menu' || activeMenu === 'add-food-menu') && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('food-menu')}>Food Menus</li>
                                <li className={`add-space-menu-list ${(activeMenu === 'bar-menu' || activeMenu === 'add-bar-menu') && 'add-space-menu-list-active'}`} onClick={() => handleActiveMenu('bar-menu')}>Bar Menus</li>
                            </ul>
                        </div>
                        {/* Content */}
                        <div className="col-span-12 lg:col-span-9 h-full p-2 lg:p-0">
                            {
                                activeMenu === 'space-details' && (
                                    <SpaceDetails />
                                )
                            }

                            {
                                activeMenu === 'availability' && (
                                    <Availability />
                                )
                            }

                            {
                                activeMenu === 'location-and-map' && (
                                    <LocationMap />
                                )
                            }

                            {
                                activeMenu === 'faqs' && (
                                    <Faqs />
                                )
                            }

                            {
                                activeMenu === 'photos' && (
                                    <AddSpaceImages />
                                )
                            }

                            {
                                activeMenu === 'videos' && (
                                    <AddSpaceVideos />
                                )
                            }

                            {
                                activeMenu === '3d-view' && (
                                    <AddSpace3D />
                                )
                            }

                            {
                                activeMenu === 'food-menu' && (
                                    <FoodMenu handleActiveMenu={handleActiveMenu} />
                                )
                            }
                            {
                                activeMenu === 'bar-menu' && (
                                    <BarMenu handleActiveMenu={handleActiveMenu} />
                                )
                            }
                            {
                                activeMenu === 'add-food-menu' && (
                                    <AddFoodMenu />
                                )
                            }
                            {
                                activeMenu === 'add-bar-menu' && (
                                    <AddBarMenu />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

