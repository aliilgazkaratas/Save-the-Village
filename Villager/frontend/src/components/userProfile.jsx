import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/userService'; // Import service for fetching user profiles

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile from the backend based on the userId prop
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile(userId); // Call service to fetch user profile
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <h3>{userProfile.name}</h3>
          <p>Email: {userProfile.email}</p>
          <p>Other details...</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
